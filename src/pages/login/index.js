import React from "react";
import { message } from "antd";
import storage from "@/utils/storage";
import { login } from "@/channel";
import Logo from "@/assets/images/logo.png";
import "./index.scss";

export default class Login extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}
  loginHandle() {
    let name = this.username.value;
    let pass = this.password.value;
    if (!name) {
      message.warning("用户名不能为空！");
      return;
    }
    if (!pass) {
      message.warning("密码不能为空！");
      return;
    }
    login({ mobile: name, code: pass }).then((re) => {
      storage.set("signature", re.token);
      this.props.history.push("/");
    });
  }
  render() {
    return (
      <div className="login-warp">
        <div className="login-content">
          <div className="login-left"></div>
          <div className="login-right">
            <img src={Logo} height="50" width="303" />
            <ul>
              <li>
                <input
                  ref={(el) => (this.username = el)}
                  className="username"
                  placeholder="手机号/账号"
                  type="text"
                />
              </li>
              <li>
                <input
                  ref={(el) => (this.password = el)}
                  className="password"
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) {
                      this.loginHandle();
                    }
                  }}
                  onKeyUp={(e) => {
                    e.target.value = e.target.value.replace(
                      /[\u4e00-\u9fa5]/gi,
                      ""
                    );
                  }}
                  placeholder="密码"
                  type="password"
                />
              </li>
              <li>
                <span
                  className="btn"
                  onClick={() => {
                    this.loginHandle();
                  }}
                >
                  登录
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
