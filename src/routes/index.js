/* 全局方法 分发二级路由 */
import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import storage from "@/utils/storage";
import { gotoOrigin } from "@/utils/handy";
import routesConfig from "./config";
import AllComponents from "@/pages/videoPc/config";
import NotFound from "@/components/NotFound";
class CRouter extends Component {
  routeFilter = (component) => {
    const token = storage.get("signature");
    if (token) {
      return component;
    } else {
      gotoOrigin();
      return null;
    }
  };

  render() {
    return (
      <Switch>
        {Object.keys(routesConfig).map((key) =>
          routesConfig[key].map((r) => {
            const route = (r) => {
              let Component = AllComponents[r.component];
              if (!Component) {
                Component = NotFound;
              }
              return (
                <Route
                  key={r.route || r.key}
                  exact
                  path={r.route || r.key}
                  render={(props) => {
                    const wrappedComponent = <Component {...props} />;
                    return this.routeFilter(wrappedComponent);
                  }}
                />
              );
            };
            return r.component ? route(r) : r.subs.map((r) => route(r));
          })
        )}
        <Route path="/" render={() => <Redirect to="/hub/videoConfig" />} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}

export default CRouter;
