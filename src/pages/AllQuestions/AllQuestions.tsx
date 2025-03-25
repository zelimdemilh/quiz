import { useState, useMemo } from "react";
import { List, Card, Typography, Input } from "antd";
import { DeleteQuestion, Page } from "../../components";
import { useGetAllQuestionsQuery } from "../../sevices";

export const AllQuestions = () => {
  const { data: questions, isLoading } = useGetAllQuestionsQuery();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredQuestions = useMemo(() => {
    if (!questions) return [];
    return questions.filter((question) =>
      question.questionText.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [questions, searchTerm]);

  return (
    <Page title="Все вопросы">
      <Input.Search
        placeholder="Поиск вопросов..."
        allowClear
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4"
      />

      {isLoading ? (
        <Typography.Text>Загрузка...</Typography.Text>
      ) : (
        <List
          grid={{ gutter: 16, column: 1 }}
          dataSource={filteredQuestions}
          renderItem={(question) => (
            <List.Item>
              <Card
                title={
                  <div className="flex justify-between">
                    <div>{question.questionText}</div>
                    <DeleteQuestion id={question._id} />
                  </div>
                }
              >
                <ul>
                  {question.options.map((option: string, index: number) => (
                    <li key={index}>
                      {option}
                      {option === question.correctAnswer ? " ✅" : ""}
                    </li>
                  ))}
                </ul>
              </Card>
            </List.Item>
          )}
        />
      )}
    </Page>
  );
};
