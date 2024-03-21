import React from "react";
import "./index.scss";

export default class LoadingIco extends React.PureComponent {
  render() {
    const { size } = this.props;
    return (
      <div className={`${size} loadingIco`}>
        <div className={`${size} loadingIco-inner`} />
      </div>
    );
  }
}
