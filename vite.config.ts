import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolveOptions } from "./config/vite/resolve.ts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: resolveOptions,
});
