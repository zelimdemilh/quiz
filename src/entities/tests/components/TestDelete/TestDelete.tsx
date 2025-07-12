import { Button, message, Modal } from 'antd';
import { FC, useState } from 'react';
import { useDeleteTestMutation } from '@shared/api';
import { DeleteOutlined } from '@ant-design/icons';

interface IProps {
  id: string;
}

export const TestDelete: FC<IProps> = ({ id }) => {
  const [deleteTest] = useDeleteTestMutation();
  const [modalVisible, setModalVisible] = useState(false);

  const onClickAction = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  const deleteTestAction = async () => {
    try {
      await deleteTest(id).unwrap();
      message.success('Тест удалён');
      onCloseModal();
    } catch {
      message.error('Ошибка при удалении теста');
    }
  };

  return (
    <>
      <Button type="text" className="p-2 m-0 h-full" onClick={onClickAction}>
        <DeleteOutlined />
      </Button>

      <Modal
        open={modalVisible}
        title="Удаление теста"
        okText="Да"
        cancelText="Отменить"
        onOk={deleteTestAction}
        onCancel={onCloseModal}
      >
        Вы уверены, что хотите удалить тест?
      </Modal>
    </>
  );
};
