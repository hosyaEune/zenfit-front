import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import checkFile from "eslint-plugin-check-file";
import importPlugin from "eslint-plugin-import";
import reactPlugin from "eslint-plugin-react";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

export default tseslint.config(
  { ignores: ["dist", "**/*.d.ts", "*.config.js", "vite.config.ts"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parser: typescriptEslintParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      react: reactPlugin,
      import: importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "check-file": checkFile,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^react$"], ["^@?\\w"], ["^\\."], ["^.+\\.(css|scss)$"]],
        },
      ],
      "import/first": "error",
      "padding-line-between-statements": [
        "error",
        { blankLine: "always", prev: "*", next: "return" },
      ],
      "arrow-body-style": [
        "error",
        "as-needed",
        { requireReturnForObjectLiteral: false },
      ],
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx,js,jsx,css,scss}": "KEBAB_CASE",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "react/prop-types": "off",
    },
  }
);
