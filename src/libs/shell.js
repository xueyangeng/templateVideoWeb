var build = "build";
var d = new Date().getTime().toString();
var env = process.argv.splice(2)[0];
var writeFileSync = require("fs").writeFileSync;
var execSync = require("child_process").execSync;
var log = execSync('git log -n 1 | grep -E "commit|Date"');
// 获取当前分支
// var branch = execSync('git branch').toString().split('\n').filter(v => v.indexOf('*') > -1)[0].split(' ')[1];

if (env == "production") {
  // build = 'dev';
} else if (env == "preproduction") {
  // build = 'fabu';
} else {
}
execSync("react-app-rewired build");
// 需要全局安装cross-env (npm i cross-env -g)
// execSync('cross-env node_modules/uglify-js/bin/uglifyjs src/libs/header.js -m -o ' + dist + '/header/index.js');
console.log(d);
writeFileSync(build + "/ver.txt", log + d);
