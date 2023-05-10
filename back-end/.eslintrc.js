module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb-base", "airbnb-typescript/base", "prettier"],
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  ignorePatterns: [".eslintrc.js", "node_modules"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/__tests__/**/*.[jt]s?(x)",
          "**/?(*.)+(spec|test).[jt]s?(x)",
          "**/*.stories.*",
          "**/.storybook/**/*.*",
        ],
        peerDependencies: true,
      },
    ],
    "@typescript-eslint/naming-convention": "off",
  },
};
