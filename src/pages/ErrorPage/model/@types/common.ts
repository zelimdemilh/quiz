import { EServerErrors } from '@shared/@types';

export type TErrorCodes =
  | EServerErrors.NOT_FOUND
  | EServerErrors.SERVER_ERROR
  | EServerErrors.FORBIDDEN
  | EServerErrors.UNAUTHORIZED;
