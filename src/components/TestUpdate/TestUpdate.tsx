import { EditOutlined } from "@ant-design/icons";
import { Button, Modal, message, Form } from "antd";
import { FC, useEffect, useState } from "react";
import {
  TCreateTestApiArg,
  useGetAllQuestionsQuery,
  useUpdateTestMutation,
} from "../../sevices";
import { ITest } from "../../types";
import { TestForm } from "../TestForm";

interface IProps {
  test: ITest;
}

export const TestUpdate: FC<IProps> = ({ test }) => {
  const [updateTest] = useUpdateTestMutation();
  const { data: questions, isLoading } = useGetAllQuestionsQuery();
  const [modalHidden, setModalHidden] = useState<boolean>(true);
  const [formData, setFormData] = useState<Partial<TCreateTestApiArg>>({});
  const [form] = Form.useForm();

  const onClickAction = () => {
    setModalHidden(false);
  };
  const onCloseModal = () => {
    setModalHidden(true);
  };

  useEffect(() => {
    if (test) {
      form.setFields([
        { name: "title", value: test.title },
        { name: "description", value: test.description },
        { name: "questions", value: test.questions.map((q) => q._id) },
      ]);
    }
  }, [form, test]);

  const updateTestAction = async () => {
    try {
      await updateTest({ id: test._id, ...formData }).unwrap();
      message.success("Тест успешно обновлен");
      onCloseModal();
    } catch {
      message.error("Ошибка при обновлении теста");
    }
  };

  return (
    <>
      <Button type="text" className="p-2 m-0 h-full" onClick={onClickAction}>
        <EditOutlined />
      </Button>

      <Modal
        open={!modalHidden}
        title="Редактировать тест"
        okText="Сохранить"
        cancelText="Отмена"
        onOk={updateTestAction}
        onCancel={onCloseModal}
      >
        <TestForm
          questions={questions!}
          form={form}
          isLoading={isLoading}
          onValuesChange={setFormData}
        />
      </Modal>
    </>
  );
};
