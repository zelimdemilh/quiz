import { BaseQueryApi } from '@reduxjs/toolkit/query';
import { TUserSignInApiResponse } from '../../sevices/user/types/apiArg';

const getUserFromLocalStorage = (): TUserSignInApiResponse | null => {
  const userData = localStorage.getItem('user');
  return userData ? JSON.parse(userData) : null;
};

export const PrepareTypicalAuthUserHeaders = (
  headers: Headers,
  //@ts-ignore
  { getState }: Pick<BaseQueryApi, 'getState' | 'extra' | 'endpoint' | 'type' | 'forced'>
) => {
  const user = getUserFromLocalStorage();
  if (user?.token) {
    headers.set('Authorization', `Bearer ${user.token}`);
  }
  return headers;
};
