import axios from "axios";
import { Modal, message } from "antd";
import storage from "@/utils/storage";
import { gotoOrigin } from "@/utils/handy";

let auto = "";
const service = axios.create({
  baseURL: storage.get("scope"),
  timeout: 60 * 1000,
});

service.interceptors.request.use(
  (config) => {
    const token = storage.get("signature");
    if (token) {
      config.headers["token"] = token;
    }
    auto = config.auto;
    if (config.method.toLowerCase() == "get") {
      config.params = {
        ...config.params,
        _t: +new Date(),
      };
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 0) {
      if (res.code == 401) {
        gotoOrigin();
      } else {
        if (auto === "infoMessage") {
          message.warning(res.msg || "获取失败");
        }
      }
      return Promise.reject(res.msg || "Error");
    } else {
      return res.data ? res.data : res;
    }
  },
  (error) => {
    if (auto === "infoMessage") {
      Modal.warning({
        title: "错误信息",
        content: error,
        style: {
          top: 200,
        },
        cancelText: "",
      });
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default service;
