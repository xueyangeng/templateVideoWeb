import React from "react";
import ConciseModal from "@/components/Modal";
import "./index.scss";

export default class DelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { visible, closeVisible } = this.props;
    return (
      <React.Fragment>
        <ConciseModal
          width={350}
          visible={visible}
          closeIcon={<span />}
          title=""
          text={<span>您确认删除片头片尾吗？此操作不可恢复</span>}
          buttons={[
            {
              name: "取消",
              callBack: () => {
                closeVisible();
              },
            },
            {
              name: "确认",
              type: "primary",
              callBack: this.props.del,
            },
          ]}
        />
      </React.Fragment>
    );
  }
}
