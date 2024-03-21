import React from "react";
import { Button, InputNumber, Modal } from "antd";
import "./index.scss";

export default class ImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
  }
  componentWillMount() {
    const { item } = this.props;
    this.setState({ value: item.durationRange });
  }
  render() {
    const { value } = this.state;
    const { visible, closeVisible, item, cut } = this.props;
    const { asset } = item;
    return (
      <Modal
        wrapClassName="preveiwModal"
        title="素材选段（图片）"
        visible={visible}
        onCancel={closeVisible}
        width={720}
        footer={null}
      >
        <div className="imageModal-wrap">
          <div>
            <img src={asset && asset.previewUrl} />
          </div>
          <div>
            <div>
              <label>图片时长</label>
              <InputNumber
                min={1}
                max={300}
                value={value}
                placeholder="请输入1-300的整数"
                onChange={(value) => {
                  this.setState({ value });
                }}
              />
              秒
            </div>
            <Button
              type="primary"
              onClick={() => {
                cut(0, this.state.value);
              }}
            >
              确定
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}
