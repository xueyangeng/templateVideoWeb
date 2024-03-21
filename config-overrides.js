const path = require("path");

module.exports = override = (config, env) => {
  // 路径别名
  config.resolve.alias = {
    "@": path.join(__dirname, ".", "src"),
  };
  // 解决eslintrc.js 不生效
  config.module.rules[1].use[0].options.useEslintrc = true;
  // 解决babelrc.js 不生效
  config.module.rules[2].oneOf[1].options.babelrc = true;
  return config;
}
// module.exports = {
//   webpack: (config, env) => {
//     // 路径别名
//     config.resolve.alias = {
//       "@": path.join(__dirname, ".", "src"),
//     };
//     // 解决eslintrc.js 不生效
//     config.module.rules[1].use[0].options.useEslintrc = true;
//     // 解决babelrc.js 不生效
//     config.module.rules[2].oneOf[1].options.babelrc = true;
//     return config;
//   },
//   // paths: (paths, env) => {
//   //   return paths;
//   // },
// };
