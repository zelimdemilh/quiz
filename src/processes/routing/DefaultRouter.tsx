import { Navigate, Route, Routes } from 'react-router-dom';

import { Auth, NotFound, Signup } from '@/pages';

const defaultRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate to="auth" replace />} />
    <Route path="/auth" element={<Auth />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default defaultRouter;
