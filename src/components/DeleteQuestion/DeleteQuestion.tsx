import { Button, Modal } from "antd";
import { FC, useState } from "react";
import { useDeleteQuestionMutation } from "../../sevices";

interface IProps {
  id: string;
}
export const DeleteQuestion: FC<IProps> = ({ id }) => {
  const [deleteQuestions, { isSuccess, reset }] = useDeleteQuestionMutation();
  const [modalHidden, setModalHidden] = useState<boolean>(true);

  const onClickAction = () => {
    setModalHidden(false);
  };

  const onCloseModal = () => {
    setModalHidden(true);
  };

  const deleteQuestionAction = () => {
    void deleteQuestions(id);
    onCloseModal();
  };

  const onCloseFinishModal = () => {
    reset();
  };

  return (
    <div>
      <Button type="text" className="py-0 m-0 h-full" onClick={onClickAction}>
        x
      </Button>
      <Modal
        open={!modalHidden}
        title="Удаление вопроса"
        okText="Да"
        cancelText="Отменить"
        onOk={deleteQuestionAction}
        onCancel={onCloseModal}
      >
        Вы уверены, что хотите удалить вопрос?
      </Modal>
      <Modal
        open={isSuccess}
        cancelText={"Закрыть"}
        okText={"Ок"}
        onCancel={onCloseFinishModal}
        onOk={onCloseFinishModal}
        title="Удаление прошло успешно"
      >
        Вопрос удален
      </Modal>
    </div>
  );
};
