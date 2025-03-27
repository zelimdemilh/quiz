import { FC } from "react";
import { Form, FormInstance, Input, Select } from "antd";
import { IQuestion } from "../../types";
import { TCreateTestApiArg } from "../../sevices";

interface IProps {
  questions: IQuestion[];
  form: FormInstance<TCreateTestApiArg>;
  isLoading: boolean;
  onValuesChange?: (values: Partial<TCreateTestApiArg>) => void;
}

export const TestForm: FC<IProps> = ({
  questions,
  isLoading,
  onValuesChange,
  form,
}) => {
  return (
    <Form
      form={form}
      layout="vertical"
      onValuesChange={(_, values) => onValuesChange?.(values)}
    >
      <Form.Item
        label="Название теста"
        name="title"
        rules={[{ required: true, message: "Введите название теста" }]}
      >
        <Input placeholder="Введите название теста" />
      </Form.Item>

      <Form.Item label="Описание" name="description">
        <Input.TextArea placeholder="Введите описание (необязательно)" />
      </Form.Item>

      <Form.Item
        label="Выберите вопросы"
        name="questions"
        rules={[{ required: true, message: "Выберите хотя бы один вопрос" }]}
      >
        <Select
          mode="multiple"
          allowClear
          showSearch
          loading={isLoading}
          placeholder="Выберите вопросы"
          filterOption={(input, option) =>
            (option?.children as unknown as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        >
          {questions.map((q) => (
            <Select.Option key={q._id} value={q._id}>
              {q.questionText}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
};
