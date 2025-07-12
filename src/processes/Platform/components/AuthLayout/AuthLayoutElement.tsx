import { ReactElement, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '@shared/ui';

export const AuthLayoutElement = (): ReactElement => (
  <div className="layout bg-transparent max-h-screen">
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </div>
);
