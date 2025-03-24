export type TUserSignUpApiArg = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};
export type TUserSignInApiArg = {
  username: string;
  password: string;
};

export type TUserSignInApiResponse = {
  token: string;
  id: string;
  role: "user" | "admin";
};

export type TUserByTokenApiArg = {
  id: string;
};

export type TUserByTokenApiResponse = {
  token: string;
  id: string;
  role: "user" | "admin";
};
