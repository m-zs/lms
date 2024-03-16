module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  root: true,
  env: {
    node: true,
    jest: true,
  },
  plugins: ["prettier"],
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:unicorn/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  rules: {
    "unicorn/no-fn-reference-in-iterator": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/no-null": "off",
    "unicorn/consistent-destructuring": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/consistent-function-scoping": "off",
    "unicorn/no-useless-undefined": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": "off",
  },
};
