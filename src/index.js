import React from "react";
import ReactDOM from "react-dom";
import md5 from "js-md5";
import Worker from "worker-loader!./worker";
import { ffmpeg } from "@/ffmpeg.js";
import storage from "@/utils/storage";
import "./assets/css/iconfont/iconfont";
import "./utils/sensorsInit";
import Route from "./route";

React.Component.prototype.$md5 = md5;

let link = document.createElement("link");
link.rel = "icon";
link.href = `${storage.get("host")}/images/favicon.ico`;
document.head.appendChild(link);
let script = document.createElement("script");
script.type = "text/javascript";
script.src = `${storage.get("host")}/header/index.js`;
document.head.appendChild(script);
const videoworker = new Worker(Worker);
React.$worker = videoworker;
React.Component.prototype.$ffmpeg = ffmpeg;
// ffmpeg.load();
ReactDOM.render(<Route />, document.getElementById("root"));
