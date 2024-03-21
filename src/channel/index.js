import request from "./request";
import storage from "@/utils/storage";
//服务
let host = "https://aibrain-test.pdnews.cn";
let scope = "";
// development 开发环境  production 生产环境
if (process.env.REACT_APP_ENV === "production") {
  host = "https://ai.pdnews.cn";
  scope = "/apiservice/";
} else if (process.env.REACT_APP_ENV === "preproduction") {
  host = "https://aibrain.pdnews.cn";
  scope = "/apiservice/";
} else {
  // scope = `https://interactive-video-test.tikrnews.com/apiservice/`;
  // scope = `https://interactive-video-test.tikrnews.com/apiservice/`;
  // scope = "https://jianyijian-test.pdnews.cn/apiservice/";
}
storage.set("host", host);
storage.set("scope", scope);

// 生成视频
export function build(data) {
  return request({
    url: "/api/media/build",
    method: "post",
    auto: "infoMessage",
    data,
  });
}

// 创建项目
export function create(ids) {
  return request({
    url: `/api/config/create?ids=${ids}`,
    // method: "GET",
    method: "post",
    auto: "infoMessage",
  });
}

// 素材上传
export function mediaupload(data) {
  return request({
    url: "/api/media/upload",
    method: "post",
    auto: "infoMessage",
    data,
  });
}

// 获取项目配置
export function get_config(id) {
  return request({
    url: `/api/config/get?id=${id}`,
    method: "GET",
    auto: "infoMessage",
  });
}

// 保存项目配置
export function save_config(data) {
  return request({
    url: "/api/config/save",
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 获取素材列表
export function get_mediaList(data) {
  return request({
    url: "/api/media/list",
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 获取创作大脑素材列表
export function imedia(data) {
  return request({
    url: `${host}/cms/imedia/adapter/cardSearch`,
    // url: "/cms/imedia/adapter/home",
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 上传boss
export function bosbucket() {
  return request({
    url: `${host}/cms/bucket`,
    method: "GET",
    auto: "infoMessage",
  });
}

// 获取md5信息， 上传使用
export function getMd5Info(md5) {
  return request({
    url: `${host}/cms/imedia/adapter/md5/check?md5=` + md5,
    method: "GET",
    auto: "infoMessage",
  });
}

// 获取上传key， 上传使用
export function getUploadKey(name) {
  return request({
    url: `${host}/cms/sts?resource=` + name,
    method: "GET",
    auto: "infoMessage",
  });
}

export function directUpload(data) {
  return request({
    url: `${host}/cms/imedia/adapter/directUpload`,
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 保存片头片尾
export function save_headConfig(data) {
  return request({
    url: "/api/media/save_head_config",
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 删除素材（片头片尾，背景音乐）
export function del_media(data) {
  return request({
    url: "/api/media/del_media",
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 登陆创作大脑
export function login(data) {
  return request({
    url: "https://aibrain-test.pdnews.cn/connect/sms/login",
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 获取文件夹list
export function get_dirList(data) {
  return request({
    url: `${host}/cms/imedia/adapter/dirList`,
    method: "post",
    data,
    auto: "infoMessage",
  });
}

// 获取用户信息
export function get_userInfo(data) {
  return request({
    url: `${host}/api/cloud/aibrain/front/userbase/info`,
    method: "post",
    data,
    auto: "infoMessage",
  });
}
