import { useState, useMemo } from "react";
import { List, Card, Typography, Input } from "antd";
import { TestDelete, TestUpdate, Page } from "../../components";
import { useGetAllTestsQuery } from "../../sevices";
import { ITest } from "../../types";

export const AllTests = () => {
  const { data: tests, isLoading } = useGetAllTestsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTests = useMemo(() => {
    if (!tests) return [];
    return tests.filter((test) =>
      test.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [tests, searchTerm]);

  return (
    <Page title="Все тесты">
      <Input.Search
        placeholder="Поиск тестов..."
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {isLoading ? (
        <Typography.Text>Загрузка...</Typography.Text>
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={filteredTests}
          renderItem={(test: ITest) => (
            <List.Item>
              <Card
                title={
                  <div className="flex justify-between">
                    <div>{test.title}</div>
                    <div>
                      <TestDelete id={test._id} />
                      <TestUpdate test={test} />
                    </div>
                  </div>
                }
              >
                <div>Количество вопросов: {test.questions.length}</div>
              </Card>
            </List.Item>
          )}
        />
      )}
    </Page>
  );
};
