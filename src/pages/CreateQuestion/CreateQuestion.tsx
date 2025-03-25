import { FC } from "react";
import { Form, Input, Button, Select, Space, Modal } from "antd";
import { Page } from "../../components";
import {
  TCreateQuestionApiArg,
  useCreateQuestionMutation,
} from "../../sevices";

interface IProps {
  className?: string;
}

export const CreateQuestion: FC<IProps> = () => {
  const [form] = Form.useForm();
  const [createQuestion, { isSuccess, reset }] = useCreateQuestionMutation();

  // Следим за обновлениями вариантов ответа
  const formAnswers = Form.useWatch("options", form) || [];

  const onFinish = (values: TCreateQuestionApiArg) => {
    void createQuestion(values);
  };

  const onCloseModal = () => {
    reset();
    form.resetFields();
  };

  return (
    <Page title="Создать вопрос">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ options: ["", ""] }}
      >
        {/* Вопрос */}
        <Form.Item
          label="Текст вопроса"
          name="questionText"
          rules={[{ required: true, message: "Введите текст вопроса" }]}
        >
          <Input placeholder="Введите ваш вопрос" />
        </Form.Item>

        {/* Варианты ответов */}
        <Form.List name="options">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name]}
                    rules={[
                      { required: true, message: "Введите вариант ответа" },
                    ]}
                  >
                    <Input placeholder={`Вариант ответа ${name + 1}`} />
                  </Form.Item>
                  {fields.length > 2 && (
                    <Button type="link" danger onClick={() => remove(name)}>
                      Удалить
                    </Button>
                  )}
                </Space>
              ))}
              <Button type="dashed" onClick={() => add()} block>
                Добавить вариант ответа
              </Button>
            </>
          )}
        </Form.List>

        {/* Выбор правильного ответа */}
        <Form.Item
          label="Правильный ответ"
          name="correctAnswer"
          rules={[{ required: true, message: "Выберите правильный ответ" }]}
        >
          <Select placeholder="Выберите правильный вариант">
            {formAnswers.map((option: string, index: number) => (
              <Select.Option key={index} value={option}>
                {option || `Вариант ответа ${index + 1}`}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        {/* Кнопка отправки */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать вопрос
          </Button>
        </Form.Item>
      </Form>
      <Modal
        open={isSuccess}
        cancelText={"Закрыть"}
        okText={"Ок"}
        onCancel={onCloseModal}
        onOk={onCloseModal}
        title="Создать вопрос"
      >
        Вопрос создан
      </Modal>
    </Page>
  );
};
