// module.exports = {
//   // Các cài đặt khác
//   rules: {
//     "no-unused-vars": "off",
//     // Các quy tắc khác bạn muốn tắt
//   },
// };

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    "no-unused-vars": "off",
  },
};