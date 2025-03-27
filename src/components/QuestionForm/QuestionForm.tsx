import { Button, Form, Input, Space, Select, FormInstance } from "antd";
import { FC, useMemo } from "react";
import { IQuestion } from "../../types";
import { TCreateQuestionApiArg } from "../../sevices";

interface IProps {
  question?: IQuestion;
  form: FormInstance<TCreateQuestionApiArg>;
  onValuesChange?: (values: Partial<TCreateQuestionApiArg>) => void;
}

export const QuestionForm: FC<IProps> = ({
  question,
  form,
  onValuesChange,
}) => {
  const initData = useMemo(() => {
    return question
      ? {
          questionText: question.questionText,
          options: question.options,
          correctAnswer: question.correctAnswer,
        }
      : { options: ["", ""] };
  }, [question]);

  const options = Form.useWatch<string[]>("options", form) || [];

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initData}
      onValuesChange={(_, values) => onValuesChange?.(values)}
    >
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
  );
};
