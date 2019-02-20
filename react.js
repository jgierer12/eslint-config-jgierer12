module.exports = {
  extends: [`healthier/react`],
  plugins: [`react-hooks`],
  rules: {
    "react-hooks/rules-of-hooks": `error`,
    "healthier/prop-types": `off`,
  },
};
