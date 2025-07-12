import { Card, List } from 'antd';
import { FC } from 'react';

import { useGetUser } from '@entities/users';

import { ITest } from '../../lib/@types';
import { TestDelete } from '../TestDelete';
import { TestSelect } from '../TestSelect';
import { TestUpdate } from '../TestUpdate';

interface IProps {
  tests: ITest[];
}

export const TestList: FC<IProps> = ({ tests }) => {
  const { role } = useGetUser();

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={tests}
      renderItem={(test: ITest) => (
        <List.Item>
          <Card
            className="p-0 m-0 border-gray-400"
            title={
              <div className="flex justify-between">
                <div>
                  <div>{test.title}</div>
                  <div className="text-xs font-light">Количество вопросов: {test.questions.length}</div>
                </div>
                <div>
                  <div>
                    <TestSelect test={test} />
                    {role === 'admin' && (
                      <>
                        <TestDelete id={test._id} />
                        <TestUpdate test={test} />
                      </>
                    )}
                  </div>
                </div>
              </div>
            }
          >
            <div className="">{test.description}</div>
          </Card>
        </List.Item>
      )}
    />
  );
};
