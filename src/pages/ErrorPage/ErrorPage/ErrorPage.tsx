import { FC, lazy, Suspense } from 'react';

import { EServerErrors } from '@shared/@types';

import { TErrorCodes } from '../model/@types';
import { Loader } from '@shared/ui';

interface IErrorPageProps {
  code?: TErrorCodes;
  beginLink?: string;
}
export const ErrorPage: FC<IErrorPageProps> = ({ code = EServerErrors.NOT_FOUND }) => {
  const Error = lazy(() => import(`../Error${code}/Error${code}.tsx`));
  return (
    <Suspense fallback={<Loader />}>
      <Error />
    </Suspense>
  );
};
