import { Button, Card } from "antd";
import { FC, useState } from "react";

interface IProps {
  correctCount: number;
  allQuestions: number;
  restart: () => void;
  answers: Record<number, string>;
  questions: {
    questionText: string;
    options: string[];
    correctAnswer: string;
  }[];
}

export const TestResult: FC<IProps> = ({
  allQuestions,
  restart,
  correctCount,
  answers,
  questions,
}) => {
  const [showAnswers, setShowAnswers] = useState(false);

  return (
    <Card title="Результат" bodyStyle={{ padding: "8px" }}>
      <p>
        Верных ответов: {correctCount} из {allQuestions}
      </p>
      <Button type="primary" className="my-4" onClick={restart}>
        Пройти снова
      </Button>
      <Button className="ml-2" onClick={() => setShowAnswers(!showAnswers)}>
        {showAnswers ? "Скрыть ответы" : "Показать ответы"}
      </Button>

      {showAnswers && (
        <div className="mt-4">
          {questions.map((q, index) => (
            <Card key={index} className="mb-2" title={`Вопрос ${index + 1}`}>
              <p>{q.questionText}</p>
              {q.options.map((option) => (
                <Button
                  key={option}
                  className={`block mt-2 ${
                    option === q.correctAnswer
                      ? "bg-green-300"
                      : answers[index] === option
                        ? "bg-red-300"
                        : ""
                  }`}
                >
                  {option}
                </Button>
              ))}
            </Card>
          ))}
        </div>
      )}
    </Card>
  );
};
