import js from "@eslint/js"
import globals from "globals"

export default [
  js.configs.recommended,
  {
    plugins: {
      extends: ["next/core-web-vitals"],
    },
  },
  {
    files: ["app/**", "core/**"],
  },
  {
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es5,
        ...globals.commonjs,
        ...globals.jest,
      },
    },
  },
  {
    ignores: [
      "**/*.config.js",
      "**/*.config.mjs",
      ".next/*",
      "node_modules/*",
      "build/*",
      "docs/*",
      "templates/*",
      "test/*",
    ],
  },
]
