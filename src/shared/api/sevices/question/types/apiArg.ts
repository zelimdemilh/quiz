
// Типы для создания нового вопроса
import {IQuestion} from "../../../types";

export type TCreateQuestionApiArg = {
  questionText: string
  options: string[]
  correctAnswer: string
};

// Ответ при создании вопроса
export type TCreateQuestionApiResponse = IQuestion;

// Типы для получения всех вопросов
export type TGetAllQuestionsApiResponse = IQuestion[];  // Массив вопросов

// Типы для получения одного вопроса
export type TGetOneQuestionApiArg = string;  // ID вопроса
export type TGetOneQuestionApiResponse = IQuestion; // Ответ - один вопрос

// Типы для обновления вопроса
export type TUpdateQuestionApiArg = {
  id: string;               // ID вопроса для обновления
  questionText?: string;    // Новый текст вопроса (необязательное поле)
  options?: string[];       // Новые варианты ответа (необязательное поле)
  correctAnswer?: string;   // Новый правильный ответ (необязательное поле)
};

export type TUpdateQuestionApiResponse = IQuestion; // Ответ - обновленный вопрос

// Типы для удаления вопроса
export type TDeleteQuestionApiArg = string;  // ID вопроса для удаления
export type TDeleteQuestionApiResponse = { message: string }; // Ответ с сообщением о удалении
