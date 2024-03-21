/* 全局方法 配置二级路由 */
let sbus = [
  {
    title: "互动视频管理",
    key: "/hub/videoConfig",
    component: "VideoConfig",
  },
  {
    title: "发布者信息配置",
    key: "/hub/publisher",
    component: "integral",
  },
  {
    title: "积分",
    key: "/hub/integral",
    component: "integral",
  },
];

const routerConfig = {
  // 一级 header 路由
  menus: [...sbus],
  // 非菜单相关路由
  others: [],
};

export default routerConfig;
