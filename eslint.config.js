import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import prettierPlugin from "eslint-plugin-prettier";
import nextPlugin from "@next/eslint-plugin-next";
import globals from "globals";

export default [
  ...tseslint.config(
    {
      ignores: [
        ".next/**",
        ".cache/**",
        "package-lock.json",
        "public/**",
        "examples/**",
        "node_modules/**",
        "next-env.d.ts",
        "next.config.ts",
        "yarn.lock",
      ],
    },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ["**/*.{js,jsx,ts,tsx}"],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          ecmaVersion: 2021,
          sourceType: "module",
          ecmaFeatures: {
            jsx: true,
          },
        },
        globals: {
          ...globals.node,
          ...globals.es2021,
          ...globals.browser,
          React: "readonly",
        },
      },
      linterOptions: {
        reportUnusedDisableDirectives: true,
        noInlineConfig: false,
      },
      plugins: {
        "@typescript-eslint": tsPlugin,
        react: reactPlugin,
        "react-hooks": reactHooksPlugin,
        prettier: prettierPlugin,
        "@next/next": nextPlugin,
      },
      rules: {
        "prefer-const": "warn",
        "no-var": "warn",
        "no-unused-vars": "warn",
        "object-shorthand": "warn",
        "quote-props": ["warn", "as-needed"],
        "@typescript-eslint/array-type": [
          "warn",
          {
            default: "array",
          },
        ],
        "@typescript-eslint/consistent-type-assertions": [
          "warn",
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never",
          },
        ],
        "react/jsx-fragments": ["warn", "syntax"],
        "react/jsx-filename-extension": [
          "warn",
          {
            extensions: ["ts", "tsx"],
          },
        ],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "prettier/prettier": "warn",
        "import/no-anonymous-default-export": "off",
        "@next/next/no-img-element": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
    },
  ),
];
