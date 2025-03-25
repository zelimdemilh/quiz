import { FC } from "react";
import { Page } from "../../components";
import { Button } from "antd";

export const HomePage: FC = () => {
  return (
    <Page title="Главная">
      <div>
        <Button type="link">Пройти тест</Button>
      </div>
      <div>
        <Button type="link" href="/questions">
          Вопросы
        </Button>
      </div>
      <div>
        <Button type="link" href="/questions/create">
          Создать вопрос
        </Button>
      </div>
      <div>
        <Button type="link">Создать тест</Button>
      </div>
    </Page>
  );
};
