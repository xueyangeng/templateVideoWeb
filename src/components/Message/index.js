import React from "react";
import { message } from "antd";
const Message = { ...message };
Message.success = (config) => {
  let obj = config;
  if (typeof config === "string") {
    obj = { content: config };
  }
  message.success({
    ...obj,
    icon: (
      <svg
        className="icon svg-icon"
        aria-hidden="true"
        style={{
          height: 16,
          width: 16,
          marginRight: 4,
          position: "relative",
          top: 3,
        }}
      >
        <use xlinkHref="#icon125chenggong"></use>
      </svg>
    ),
  });
};
Message.warn = (config) => {
  let obj = config;
  if (typeof config === "string") {
    obj = { content: config };
  }
  message.warn({
    ...obj,
    icon: (
      <svg
        className="icon svg-icon"
        aria-hidden="true"
        style={{
          height: 16,
          width: 17,
          marginRight: 4,
          position: "relative",
          top: 3,
        }}
      >
        <use xlinkHref="#icon126jinggao"></use>
      </svg>
    ),
  });
};

export default Message;
