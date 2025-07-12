import { useAuth } from '../authentication';

import { AuthLayout, NoAccessLayout, NoAuthLayout } from './components';

export const Platform = () => {
  const { isAuthenticated, hasAccess } = useAuth();

  return (
    <>
      {isAuthenticated && hasAccess && <AuthLayout />}
      {!isAuthenticated && <NoAuthLayout />}
      {isAuthenticated && !hasAccess && <NoAccessLayout />}
    </>
  );
};
