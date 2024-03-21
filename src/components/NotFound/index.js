import React, { Component } from "react";
import img from "@/assets/images/404.png";

class NotFound extends Component {
  backHome = () => {
    this.props.history.replace("/");
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          height: "100%",
          background: "#ececec",
          overflow: "hidden",
        }}
      >
        <img style={{ width: 450, marginTop: 100 }} src={img} alt="404" />
      </div>
    );
  }
}

export default NotFound;
