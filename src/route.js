import React from "react";
import { Route, Router, Redirect, Switch } from "react-router-dom";
import "antd/dist/antd.css";
import "./assets/css/style.scss";
import Loadable from "@/utils/loadable";
import { createBrowserHistory } from "history";
import { ConfigProvider, message } from "antd";
import zhCN from "antd/lib/locale-provider/zh_CN";
import "moment/locale/zh-cn";
import { Provider } from 'react-redux'
import store from './store'

message.config({
  maxCount: 1, // 最大显示数, 超过限制时，最早的消息会被自动关闭
});

const history = createBrowserHistory();
let re = "";
const Login = Loadable({ loader: () => import("./pages/login") });
const Enter = Loadable({ loader: () => import("./pages/enter") });
const VideoTemplate = Loadable({
  loader: () => import("./pages/videoTemplate"),
});
setTimeout(() => {
  VideoTemplate.preload();
}, 600);

export default class BasicExample extends React.Component {
  componentDidMount() {}
  render() {
    return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Router basename="/" history={history} re={re}>
          <Switch>
            <Redirect exact path="/" to="/videoTemplate" />
            <Route path="/login" component={Login} />
            {/*中间件*/}
            <Route path="/enter" component={Enter} />
            <Route path="/videoTemplate" component={VideoTemplate} />
            {/* <Route path="/hub" component={VideoTemplate} /> */}
          </Switch>
        </Router>
      </ConfigProvider>
      </Provider>
    );
  }
}
