import { Navigate, Route, Routes } from 'react-router-dom';

import { ErrorPage } from '@pages/ErrorPage';

const NoAccessRouter = () => (
  <Routes>
    <Route path="/forbidden" element={<ErrorPage beginLink="/logout" code={403} />} />
    {/*<Route path="/logout" element={<LogoutPage />} />*/}
    <Route path="*" element={<Navigate replace to="/forbidden" />} />
  </Routes>
);

export default NoAccessRouter;
