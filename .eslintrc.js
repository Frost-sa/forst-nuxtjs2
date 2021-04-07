module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-deprecated-v-bind-sync": "off",
    "no-unused-vars": "off",
    "no-undef": "off",
    quotes: "off",
    semi: "off",
    "no-deprecated-slot-attribute": "off",
    "no-constant-condition": "off"
  }
};
