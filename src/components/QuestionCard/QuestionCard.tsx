import { Button, Card } from "antd";
import clsx from "clsx";
import { FC } from "react";

interface IProps {
  questionText: string;
  options: string[];
  correctAnswer: string;
  userAnswer: string | undefined;
  onAnswer: (answer: string) => void;
  isResultPage: boolean;
}

export const QuestionCard: FC<IProps> = ({
  questionText,
  options,
  correctAnswer,
  userAnswer,
  onAnswer,
  isResultPage,
}) => {
  return (
    <Card className="mb-4" title={questionText}>
      {options.map((option) => (
        <Button
          key={option}
          className={clsx(
            "block mt-2",
            userAnswer && {
              "!bg-green-400": option === correctAnswer,
              "!bg-red-200": userAnswer === option && option !== correctAnswer,
            },
          )}
          onClick={() => !userAnswer && onAnswer(option)}
          disabled={isResultPage || !!userAnswer}
        >
          {option}
        </Button>
      ))}
    </Card>
  );
};
