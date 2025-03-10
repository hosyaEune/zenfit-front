import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
// eslint-disable-next-line  @typescript-eslint/ban-ts-comment
// @ts-ignore
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      include: ["**/*.{js,jsx,ts,tsx}"], // Проверяемые файлы
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
});
