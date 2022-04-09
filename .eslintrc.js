module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      parserOptions: {
        project: ["./tsconfig.json"],
      },
    },
  ],
  rules: {
    "@typescript-eslint/no-unsafe-assignment": "error",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],

    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "@typescript-eslint/strict-boolean-expressions": 0,
    "prettier/prettier": ["error", { singleQuote: false }],
  },
  ignorePatterns: ["index.js"],
};
