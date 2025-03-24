import { IUser } from "../types";
import { adminRoutes, publicRoutes, userRoutes } from "./roles";

export const routesToRender = (role: IUser["role"] | null) => {
  return [
    ...publicRoutes,
    ...(role ? userRoutes : []),
    ...(role === "admin" ? adminRoutes : []),
  ];
};
