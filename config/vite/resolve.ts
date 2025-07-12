import { AliasOptions, ResolveOptions } from "vite";
import path from "path";
import { SRC_PATH } from "../../shared/vars";

export const resolveOptions: ResolveOptions & {
  alias?: AliasOptions;
} = {
  alias: {
    "@": path.resolve(SRC_PATH),
    "@app": path.resolve(SRC_PATH, "./app"),
    "@processes": path.resolve(SRC_PATH, "./processes"),
    "@pages": path.resolve(SRC_PATH, "./pages"),
    "@widgets": path.resolve(SRC_PATH, "./widgets"),
    "@features": path.resolve(SRC_PATH, "./features"),
    "@entities": path.resolve(SRC_PATH, "./entities"),
    "@shared": path.resolve(SRC_PATH, "./shared"),
  },
};
