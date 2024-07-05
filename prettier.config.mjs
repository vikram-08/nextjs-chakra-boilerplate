// prettier.config.js, .prettierrc.js, prettier.config.mjs, or .prettierrc.mjs

/** @type {import("prettier").Config} */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: false,
  overrides: [
    {
      files: ["*.{js,ts,jsx,tsx}"],
      options: {
        semi: true,
      },
    },
  ],
}

export default config
