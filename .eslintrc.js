module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:vue/vue3-recommended", "prettier"],
  plugins: ["vue", "html", "prettier"],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    "prettier/prettier": "error",
    "vue/require-default-prop": "off",
    "no-unused-vars": "off",
    "no-func-assign": "off",
  },
};
