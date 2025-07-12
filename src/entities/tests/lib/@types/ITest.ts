import { IQuestion } from '@entities/questions/lib/@types';

export interface ITest {
  _id: string;
  title: string;
  description: string;
  questions: IQuestion[];
  createdAt: string;
}
