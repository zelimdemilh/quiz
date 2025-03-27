import { IQuestion } from "../question";

export interface ITest {
  _id: string;
  title: string;
  description: string;
  questions: IQuestion[];
  createdAt: string;
}
