import { Button, message, Modal } from 'antd';
import { FC, useState } from 'react';
import { useDeleteQuestionMutation } from '@shared/api';
import { DeleteOutlined } from '@ant-design/icons';

interface IProps {
  id: string;
}

export const QuestionDelete: FC<IProps> = ({ id }) => {
  const [deleteQuestion] = useDeleteQuestionMutation();
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const onClickAction = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const deleteQuestionAction = async () => {
    try {
      await deleteQuestion(id).unwrap();
      message.success('Вопрос удалён');
      onCloseModal();
    } catch {
      message.error('Ошибка при удалении вопроса');
    }
  };

  return (
    <>
      <Button type="text" className="p-2 m-0 h-full" onClick={onClickAction}>
        <DeleteOutlined />
      </Button>

      <Modal
        open={modalVisible}
        title="Удаление вопроса"
        okText="Да"
        cancelText="Отменить"
        onOk={deleteQuestionAction}
        onCancel={onCloseModal}
      >
        Вы уверены, что хотите удалить вопрос?
      </Modal>
    </>
  );
};
