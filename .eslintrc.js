const { patterns, ignorePatterns } = require("./config/eslint-patterns");

// ----------------------------------------------------------------------------
// https://eslint.org/docs/user-guide/configuring

/** @type {ESLintConfig} */
const config = {
  ignorePatterns,

  // common to all
  env: { es6: true },
  parserOptions: { sourceType: "module" },

  overrides: [
    // all *.js files
    {
      files: ["**/*.js"],
      rules: {
        "lines-around-comment": [
          "error",
          {
            beforeBlockComment: true,
            beforeLineComment: true,
            allowBlockStart: true,
            allowObjectStart: true,
            allowArrayStart: true,
            allowClassStart: true,
          },
        ],
      },
    },

    // all *.ts files
    {
      files: ["**/*.ts"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
    },

    // basic rules
    {
      files: patterns.lintedAll,
      extends: ["eslint:recommended", "prettier"],
      rules: {
        eqeqeq: "error",
      },
    },

    // basic rules for *.ts
    {
      files: patterns.lintedTs,
      plugins: ["total-functions"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:total-functions/recommended",
        "prettier/@typescript-eslint",
      ],
      rules: {
        "no-fallthrough": "off", // already checked by TypeScript
      },
    },
    {
      files: patterns.src,
      parserOptions: { project: `src/tsconfig.json` },
    },
    {
      files: patterns.scriptsTs,
      parserOptions: { project: `scripts/tsconfig.json` },
    },

    // files for Node.js
    {
      files: patterns.node,
      env: {
        es2017: true,
        es2020: true,
        node: true,
      },
    },
  ],
};

module.exports = config;

/** @typedef {import("eslint").Linter.Config} ESLintConfig */
