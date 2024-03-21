import React from "react";
import { Modal } from "antd";
import TimeAxis from "@/components/TimeAxis";
import "./index.scss";

export default class VideoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { item } = this.props;
    this.setState({ value: item.durationRange });
  }

  componentDidMount() {
    this.forceUpdate();
  }
  componentWillUnmount() {}

  play() {
    if (this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  render() {
    const { visible, closeVisible, item, cut, ismusic } = this.props;
    const { asset } = item;
    return (
      <Modal
        wrapClassName="preveiwModal"
        title="素材选段"
        visible={visible}
        onCancel={closeVisible}
        centered
        width={720}
        footer={null}
      >
        <div className="videoModal-wrap">
          <div className={ismusic ? "ismusic" : ""}>
            <video
              ref={(el) => (this.player = el)}
              src={asset && asset.previewUrl}
              controls
              controlsList="nodownload"
            />
          </div>
          {this.player ? <TimeAxis player={this.player} cut={cut} /> : null}
        </div>
      </Modal>
    );
  }
}
