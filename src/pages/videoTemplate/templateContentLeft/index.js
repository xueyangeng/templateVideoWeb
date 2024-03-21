import React from "react";
import Headend from "../headend";
import Bgaudio from "../bgaudio";
import "./index.scss";

export default class templateContentLeft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }

  render() {
    const { menuId, config, setConfig } = this.props;
    return (
      <React.Fragment>
        {menuId === 0 ? (
          <Headend config={config} setConfig={setConfig} />
        ) : null}
        {menuId === 1 ? <Bgaudio config={config} setConfig={setConfig}/> : null}
      </React.Fragment>
    );
  }
}
