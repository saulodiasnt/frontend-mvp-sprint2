import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import tsConfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  config({ path: `./.env.${mode}` });

  return {
    plugins: [react(), tsConfigPaths()],
    build: {},
    esbuild: { exclude: [] },
  };
});
