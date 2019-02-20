module.exports = {
  extends: [`healthier`],
  plugins: [`prettier`],
  rules: {
    // formatting
    "prettier/prettier": `warn`,
    quotes: [`warn`, `backtick`],

    // development
    "no-console": [`error`, { allow: [`info`, `warn`, `error`] }],
  },
};
