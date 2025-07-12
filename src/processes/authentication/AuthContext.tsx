import { createContext, ReactElement, ReactNode, useContext, useEffect, useMemo } from 'react';

import { useGetUser } from '@entities/users/model/selectors';

interface IAuthContext {
  user?: string;
  isAuthenticated?: boolean;
  hasAccess: boolean;
}

interface IAuthProvider {
  children: ReactNode;
}

const EXCLUDED_URLS = ['/login', '/authenticate', '/logout'];

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: IAuthProvider): ReactElement => {
  const storedUser = useGetUser();
  const { id, token, role } = storedUser;
  const { pathname } = window.location;

  const value = useMemo(
    () => ({
      isAuthenticated: !!token,
      user: id ?? '',
      hasAccess: role === 'admin',
    }),
    [id, token, role]
  );

  useEffect(() => {
    const isNeedRedirect = token && pathname !== '/' && !EXCLUDED_URLS.some(url => pathname.startsWith(url));
    const redirectUrl = `/auth?back_url=${encodeURIComponent(pathname)}`;
    if (isNeedRedirect) {
      window.location.href = redirectUrl;
    }
  }, [token, pathname]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
