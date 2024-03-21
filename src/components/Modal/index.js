import { Modal, Button } from "antd";
import React from "react";
import "./index.scss";

export default class ConciseModal extends React.Component {
  render() {
    const {
      visible,
      title,
      text,
      buttons,
      width,
      closeIcon,
      className,
      maskClosable,
    } = this.props;
    return (
      <Modal
        title=""
        visible={visible}
        className={className}
        footer={null}
        maskClosable={maskClosable || false}
        width={width || 358}
        centered={true}
        onCancel={this.props.cancel}
        closeIcon={
          closeIcon || <span className="ico iconfont icon003guanbi"></span>
        }
      >
        <div className="conciseModal">
          <div className="conciseModal-title">{title}</div>
          <div className="conciseModal-text">{text}</div>
          <div className="conciseModal-buttons">
            {buttons &&
              buttons.map((button, index) => {
                return (
                  <Button
                    className={button.type}
                    icon={button.icon}
                    key={index}
                    type={button.type}
                    onClick={() => {
                      button.callBack();
                    }}
                  >
                    {button.name}
                  </Button>
                );
              })}
          </div>
        </div>
      </Modal>
    );
  }
}
