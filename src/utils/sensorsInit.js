window.sensors = require("sa-sdk-javascript");
const isProduction =
  window.location.host.toLocaleLowerCase() == "jianyijian.pdnews.cn";
const server_url =
  "https://data.pdnews.cn/sa?project=" +
  (isProduction ? "production" : "default");
window.sensors.init({
  name: "sensors",
  server_url: server_url,
  heatmap: {
    clickmap: "default",
    scroll_notice_map: "default",
  },
  is_track_single_page: true,
  show_log: isProduction ? false : true,
});
// 设置公共属性
window.sensors.registerPage({
  platform_type: "pc",
});
window.sensors.quick("autoTrack"); // 用于采集 $pageview事件 注释掉，改为手动模式
