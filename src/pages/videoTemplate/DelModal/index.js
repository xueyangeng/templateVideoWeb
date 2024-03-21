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
          title="确认删除该素材？"
          text={
            <span>
              点击删除将会将此素材从当前项目中移除，您确认删除此素材吗？
            </span>
          }
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
