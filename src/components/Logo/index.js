import React from "react";
import Img from "@/assets/images/logo.png";
import "./index.scss";

export default class Logo extends React.PureComponent {
  render() {
    return (
      <div
        className="Logo"
        onClick={() => {
          this.props.history.push("/");
        }}
      >
        <img src={Img} alt="" />
      </div>
    );
  }
}
