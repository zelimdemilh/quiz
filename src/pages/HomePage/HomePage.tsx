import { Button } from 'antd';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { SignOut, useGetUser } from '@entities/users';
import { Page } from '@shared/ui';

export const HomePage: FC = () => {
  const { role } = useGetUser();

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
      {role === 'admin' && (
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
          {/* <div> */}
          {/*  <NavLink to="/tests"> */}
          {/*    <Button className="p-0" type="link"> */}
          {/*      Все тесты */}
          {/*    </Button> */}
          {/*  </NavLink> */}
          {/* </div> */}
        </div>
      )}
    </Page>
  );
};
