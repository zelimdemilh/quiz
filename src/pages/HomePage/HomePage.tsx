import { FC } from "react";
import { Page, SignOut } from "../../components";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../hooks";

export const HomePage: FC = () => {
  const role = useAppSelector((state) => state.userSlice.role);

  return (
    <Page
      title={
        <div className="flex justify-between">
          <div>Главная</div>
          <div>
            <SignOut />
          </div>
        </div>
      }
    >
      <div>
        <NavLink to="/tests">
          <Button className="p-0" type="link">
            Пройти тест
          </Button>
        </NavLink>
      </div>
      {role === "admin" && (
        <div>
          <div>
            <NavLink to="/questions">
              <Button className="p-0" type="link">
                Вопросы
              </Button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/questions/create">
              <Button className="p-0" type="link">
                Создать вопрос
              </Button>
            </NavLink>
          </div>
          <div>
            <NavLink to="/test/create">
              <Button className="p-0" type="link">
                Создать тест
              </Button>
            </NavLink>
          </div>
          {/*<div>*/}
          {/*  <NavLink to="/tests">*/}
          {/*    <Button className="p-0" type="link">*/}
          {/*      Все тесты*/}
          {/*    </Button>*/}
          {/*  </NavLink>*/}
          {/*</div>*/}
        </div>
      )}
    </Page>
  );
};
