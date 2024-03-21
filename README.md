### 生产环境和预生产环境分支

npm install // 安装项目依赖
npm start // 运行项目

###### 启动项目

`npm start` 或者 `npm run dev`

###### 打包项目 生产环境

`npm run build`

###### 打包项目 生产环境 （使用 cdn 加速）

`npm run build:cdn`

###### 打包项目 预生产环境

`npm run build:pre`

###### 打包项目 预生产环境 （使用 cdn 加速）

`npm run build:precdn`

###### 打包项目并查看分析项目大小

`npm run analyz`

### 提交代码格式

- feat: 新增 feature
- fix: 修复 bug
- docs: 仅仅修改了文档，比如 README, CHANGELOG, CONTRIBUTE 等等
- style: 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
- refactor: 代码重构，没有加新功能或者修复 bug
- perf: 优化相关，比如提升性能、体验
- test: 测试用例，包括单元测试、集成测试等
- chore: 改变构建流程、或者增加依赖库、工具等
- revert: 回滚到上一个版本

### 目录结构

```
├── README.md                    // 项目描述
├── build                        // 部署环境包
├── node_modules                 // 环境依赖包
├── public                       // 开发环境入口
│   └── index.html               // 主页
├── src                          // 生产目录
│   ├── assets                   // 项目所需资源
│   │   ├── css                  // 全局css
│   │   ├── images               // 项目所需图片资源
│   │   └── uplaod               // 创作大脑上传组件 目前没有用到
│   ├── channel                  // 发送请求
│   ├── components               // 各种组件
│   ├── libs                     // 打包代码时执行的脚本
│   ├── pages                    // 具体模块代码实现
│   │   ├── enter                // 中转模块
│   │   ├── login                // 登陆模块
│   │   └── videoTemolate        // 主逻辑模块
│   ├── routes                   // 二级路由配置 目前没有用到
│   ├── store                    // redux 文件
│   ├── utils                    // 公共方法
│   ├── index.js                 // 编译入口
│   ├── setupProxy.js            // 接口代理
│   └── route.js                 // 路由配置
├── .babelrc                     // babel配置文件
├── .env.                        // 打包区分环境
├── .gitignore                   // git忽略文件配置
├── config-overrides.js          // webpack配置覆盖
├── jsconfig.json                // vscode路径配置
└── package.json                 // 项目配置文件
```
