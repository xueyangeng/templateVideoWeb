import React from "react";
import { Modal } from "antd";
import PreviewCanvas from "@/components/PreviewCanvas";
import "./index.scss";

export default class PreviewModal extends React.Component {
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
    const {
      closeVisible,
      name,
      watermark,
      backgroundMusic,
      materialList,
      buttons,
    } = this.props;
    return (
      <React.Fragment>
        <Modal
          wrapClassName="previewModal"
          visible={true}
          closable={false}
          destroyOnClose
          width={"auto"}
          centered={true}
          title=""
          footer={null}
        >
          <PreviewCanvas
            materialList={materialList}
            closeVisible={closeVisible}
            name={name}
            watermark={watermark}
            backgroundMusic={backgroundMusic}
            buttons={buttons}
          />
        </Modal>
      </React.Fragment>
    );
  }
}
