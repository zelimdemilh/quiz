import { useState } from "react";
import { Button, Card, Progress } from "antd";
import { Loader, Page, TestResult } from "../../components";
import { useGetOneTestQuery } from "../../sevices";
import { useParams } from "react-router-dom";
import clsx from "clsx";

export const QuizPage = () => {
  const [current, setCurrent] = useState(0);
  const { id } = useParams();
  const { data: testData, isLoading } = useGetOneTestQuery(id!);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isFinished, setIsFinished] = useState(false);

  const questions = testData?.questions || [];

  const handleAnswer = (answer: string) => {
    setAnswers((prev) => ({ ...prev, [current]: answer }));
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setIsFinished(true);
    }
  };

  const correctCount = Object.entries(answers).filter(
    ([index, answer]) => questions[Number(index)].correctAnswer === answer,
  ).length;

  const restart = () => {
    setAnswers({});
    setCurrent(0);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <Page title={`Тест: ${testData?.title}`}>
        <TestResult
          correctCount={correctCount}
          allQuestions={questions.length}
          restart={restart}
          answers={answers}
          questions={questions}
        />
      </Page>
    );
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Page title={`Тест: ${testData?.title}`}>
      <Card title={`Вопрос ${current + 1}/${questions.length}`}>
        <p>{questions[current].questionText}</p>
        <Progress
          percent={Math.floor(((current + 1) / questions.length) * 100)}
        />
        {questions[current].options.map((option) => (
          <Button
            key={option}
            className={clsx(
              "block mt-2",
              answers[current] && {
                "!bg-green-400": option === questions[current].correctAnswer,
                "!bg-red-200":
                  answers[current] === option &&
                  option !== questions[current].correctAnswer,
              },
            )}
            onClick={() => !answers[current] && handleAnswer(option)}
            disabled={!!answers[current]}
          >
            {option}
          </Button>
        ))}
      </Card>
      {answers[current] && (
        <Button className="mt-4" type="primary" onClick={nextQuestion}>
          Далее
        </Button>
      )}
    </Page>
  );
};
