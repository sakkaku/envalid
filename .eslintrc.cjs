/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "prettier"
  ],
  env: {
    "vue/setup-compiler-macros": true
  },
  rules: {
    "max-len": ["error", { code: 120 }],
    semi: ["error", "always"],
    quotes: ["error", "double"]
  }
};
