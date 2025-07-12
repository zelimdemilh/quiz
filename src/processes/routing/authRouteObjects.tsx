import { createRoutesFromElements, Route } from 'react-router-dom';

import { CreateQuestion, HomePage, AllQuestions, CreateTest, AllTests, QuizPage } from '@/pages';

import { AuthLayoutElement } from '../Platform/components/AuthLayout/AuthLayoutElement';

export const authRouteObjects = createRoutesFromElements(
  <Route path="/" element={<AuthLayoutElement />}>
    <Route path="/" element={<HomePage />} />
    <Route path="/questions/create" element={<CreateQuestion />} />
    <Route path="/questions" element={<AllQuestions />} />
    <Route path="/tests/create" element={<CreateTest />} />
    <Route path="/tests" element={<AllTests />} />
    <Route path="/tests/:id" element={<QuizPage />} />
  </Route>
);
