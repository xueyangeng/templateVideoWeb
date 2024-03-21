import React from "react";
import createReactClass from "create-react-class";
import { getCookie, getParam, gotoOrigin } from "@/utils/handy";
import storage from "@/utils/storage";
import { create } from "@/channel";

let Enter = createReactClass({
  componentWillMount() {
    let token = getCookie("Creative-Brain-Token");
    storage.set("signature", token);
    let url = window.location.href;
    let materialIds = getParam(url, "materialIds") || "";
    let projectId = getParam(url, "projectId") || "";
    if (token) {
      if (!projectId) {
        create(materialIds)
          .then((re) => {
            let projectId = re || "";
            this.props.history.push(`/videoTemplate#${projectId}`);
          })
          .catch((error) => {});
      } else {
        this.props.history.push(`/videoTemplate#${projectId}`);
      }
    } else {
      storage.set("localUrl", window.location.href);
      gotoOrigin();
    }
  },
  render() {
    return <div>正在进入视频模版工具……</div>;
  },
});

export default Enter;
