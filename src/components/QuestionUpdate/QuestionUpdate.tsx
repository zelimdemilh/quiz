import { Button, Modal, Form, Input, Space, Select } from "antd";
import { FC, useState } from "react";
import { useUpdateQuestionMutation } from "../../sevices";
import { IQuestion } from "../../types";
import { EditOutlined } from "@ant-design/icons";

interface IProps {
  question: IQuestion;
}

export const QuestionUpdate: FC<IProps> = ({ question }) => {
  const {
    questionText,
    options: currentOptions,
    correctAnswer,
    _id: id,
  } = question;

  const [updateQuestion, { isSuccess, reset }] = useUpdateQuestionMutation();
  const [modalHidden, setModalHidden] = useState<boolean>(true);
  const [form] = Form.useForm();

  const onClickAction = () => {
    form.setFieldsValue({
      questionText,
      options: currentOptions,
      correctAnswer,
    });
    setModalHidden(false);
  };

  const onCloseModal = () => {
    setModalHidden(true);
  };

  const options = Form.useWatch<string[]>("options", form) || [];

  const updateQuestionAction = async () => {
    try {
      const values = await form.validateFields();

      await updateQuestion({ id, ...values }).unwrap();
      onCloseModal();
    } catch (error) {
      console.error("Ошибка обновления:", error);
    }
  };

  const onCloseFinishModal = () => {
    reset();
  };

  return (
    <>
      <Button type="text" className="p-2 m-0 h-full" onClick={onClickAction}>
        <EditOutlined />
      </Button>

      <Modal
        open={!modalHidden}
        title="Редактировать вопрос"
        okText="Сохранить"
        cancelText="Отмена"
        onOk={updateQuestionAction}
        onCancel={onCloseModal}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            label="Текст вопроса"
            name="questionText"
            rules={[{ required: true, message: "Введите текст вопроса" }]}
          >
            <Input />
          </Form.Item>

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
                      <Input placeholder={`Вариант ${name + 1}`} />
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

          <Form.Item
            label="Правильный ответ"
            name="correctAnswer"
            rules={[
              { required: true, message: "Выберите правильный ответ" },
              {
                validator: (_, value) => {
                  if (!options.includes(value)) {
                    return Promise.reject(new Error("Такого варианта нет"));
                  }
                  return Promise.resolve();
                },
              },
            ]}
          >
            <Select placeholder="Выберите правильный вариант">
              {options.map((option, index) => (
                <Select.Option key={index} value={option}>
                  {option}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        open={isSuccess}
        cancelText="Закрыть"
        okText="Ок"
        onCancel={onCloseFinishModal}
        onOk={onCloseFinishModal}
        title="Обновление прошло успешно"
      >
        Вопрос обновлён
      </Modal>
    </>
  );
};
