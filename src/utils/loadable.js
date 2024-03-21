import React from "react";
import Loadable from "react-loadable";

// 通用的加载组件
const loadingComponent = ({ error, pastDelay }) => {
  if (error) {
    return <div>Error!</div>;
  } else if (pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

/**
 * 使用react-loadable处理组件
 * @param  {Object}  LoadableObj Loadable所需要的参数对象{loader: 组件, loading: loading组件, delay: 加载时间默认200, ...}
 * @return  包装后的组件
 */
export default (LoadableObj) => {
  return Loadable({
    loading: loadingComponent,
    ...LoadableObj,
  });
};
