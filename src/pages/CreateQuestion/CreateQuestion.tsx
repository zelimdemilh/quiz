import { FC, useState } from "react";
import { Button, message } from "antd";
import { Page, QuestionForm } from "../../components";
import {
  TCreateQuestionApiArg,
  useCreateQuestionMutation,
} from "../../sevices";
import { useForm } from "antd/es/form/Form";

interface IProps {
  className?: string;
}

export const CreateQuestion: FC<IProps> = () => {
  const [createQuestion] = useCreateQuestionMutation();
  const [, setFormData] = useState<Partial<TCreateQuestionApiArg>>({});
  const [form] = useForm();

  const action = async () => {
    const values = form.getFieldsValue();

    try {
      await createQuestion(values);
      form.resetFields();
      message.success("Вопрос успешно создан");
    } catch {
      return message.error("Какая ошибка");
    }
  };

  return (
    <Page title="Создать вопрос">
      <QuestionForm form={form} onValuesChange={setFormData} />
      <Button type="primary" onClick={action}>
        Создать вопрос
      </Button>
    </Page>
  );
};
