import { SendOutlined } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ITest } from '../../lib/@types';

interface IProps {
  test: ITest;
}

export const TestSelect: FC<IProps> = ({ test }) => {
  const [modalHidden, setModalHidden] = useState<boolean>(false);
  const navigate = useNavigate();

  const onClickAction = () => {
    setModalHidden(true);
  };

  const onCloseModal = () => {
    setModalHidden(false);
  };

  const onActionModal = () => {
    navigate(`/tests/${test._id}`);
  };

  return (
    <>
      <Button type="text" className="p-2 m-0 h-full" onClick={onClickAction}>
        <SendOutlined />
      </Button>
      <Modal
        open={modalHidden}
        title="Пройти тест"
        okText="Да"
        cancelText="Отменить"
        onOk={onActionModal}
        onCancel={onCloseModal}
      >
        Вы уверены, что хотите пройти тест: {test.title}?
      </Modal>
    </>
  );
};
