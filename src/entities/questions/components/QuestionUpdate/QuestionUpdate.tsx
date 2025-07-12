import { EditOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { FC, useState } from 'react';

import { useUpdateQuestionMutation } from '@shared/api';

import { IQuestion } from '../../lib/@types';
import { QuestionForm } from '../QuestionForm';

interface IProps {
  question: IQuestion;
}

export const QuestionUpdate: FC<IProps> = ({ question }) => {
  const [updateQuestion] = useUpdateQuestionMutation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<Partial<IQuestion>>({});
  const [form] = useForm();

  const onClickAction = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const updateQuestionAction = async () => {
    try {
      await updateQuestion({ id: question._id, ...formData }).unwrap();
      message.success('Вопрос успешно обновлён');
      onCloseModal();
    } catch (error) {
      console.error('Ошибка обновления:', error);
      message.error('Ошибка при обновлении вопроса');
    }
  };

  return (
    <>
      <Button type="text" className="p-2 m-0 h-full" onClick={onClickAction}>
        <EditOutlined />
      </Button>

      <Modal
        open={modalVisible}
        title="Редактировать вопрос"
        okText="Сохранить"
        cancelText="Отмена"
        onOk={updateQuestionAction}
        onCancel={onCloseModal}
      >
        <QuestionForm form={form} question={question} onValuesChange={setFormData} />
      </Modal>
    </>
  );
};
