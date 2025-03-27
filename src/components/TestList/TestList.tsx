import { Card, List } from "antd";
import { ITest } from "../../types";
import { TestDelete } from "../TestDelete";
import { TestUpdate } from "../TestUpdate";
import { useAppSelector } from "../../hooks";
import { FC } from "react";
import { TestSelect } from "../TestSelect";

interface IProps {
  tests: ITest[];
}

export const TestList: FC<IProps> = ({ tests }) => {
  const role = useAppSelector((state) => state.userSlice.role);

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
                  <div className="text-xs font-light">
                    Количество вопросов: {test.questions.length}
                  </div>
                </div>
                <div>
                  <div>
                    <TestSelect test={test} />
                    {role === "admin" && (
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
