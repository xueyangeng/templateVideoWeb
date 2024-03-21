import React from "react";
import { DragDropContext } from "react-dnd";
import HTMLBackend from "react-dnd-html5-backend";
import { getSecond2Minute } from "@/utils/handy";
import VideoTemplateItem from "./Item";
import MaterialModal from "../MaterialModal";
import "./index.scss";

@DragDropContext(HTMLBackend)
class templateFooter extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      isAdd: false,
    };
  }

  use = (item) => {
    const { isAdd } = this.state;
    this.setState({ showModal: false }, () => {
      !isAdd && (item = item[0]);
      this.props.setSelectedItem(item, isAdd);
    });
  };

  // 拖拽结束
  endDrag = (sourceItem, targetItem) => {
    const { materialList } = this.props;
    let list = materialList.filter((item) => !item.isConfig);
    let sourceIndex = list.indexOf(sourceItem);
    list = list.filter((item) => item.id !== sourceItem.id);
    let index = list.indexOf(targetItem);
    if (index < 0) return;
    if (sourceIndex <= index) {
      index += 1;
    }
    if (index < 0) index = 0;
    list.splice(index, 0, sourceItem);
    // 埋点
    window.sensors && window.sensors.track("cut_modify_sorting");
    this.props.setList(list);
  };

  render() {
    const { selectedItem, setSelectedItem, duration, materialList } =
      this.props;
    const { showModal, isAdd } = this.state;
    let num = 0;
    return (
      <div className="templateFooter-wrap">
        <div
          className="templateFooter-play"
          onClick={this.props.showPreviewModal}
        >
          <div>
            <span className="ico iconfont icon24pxbofang" />
          </div>
          <span>{getSecond2Minute(duration || 0)}</span>
        </div>
        <div className="templateFooter-list">
          {materialList &&
            materialList.map((item) => {
              let selected = false;
              if (item.id === selectedItem.id) {
                selected = true;
              }
              if (!item.isConfig) {
                num = num + 1;
              }
              return (
                <VideoTemplateItem
                  key={item.id}
                  num={num}
                  item={item}
                  selected={selected}
                  setSelectedItem={setSelectedItem}
                  endDrag={this.endDrag}
                  showDelModal={this.props.showDelModal}
                  showModal={() => {
                    this.setState({ isAdd: false, showModal: true });
                  }}
                />
              );
            })}
          <div className="templateFooterList-item">
            <div
              className="templateFooterList-add"
              onClick={() => {
                this.setState({ isAdd: true, showModal: true }, () => {
                  // setSelectedItem({});
                });
              }}
            >
              <span className="ico iconfont icon24pxtianjia" />
            </div>
          </div>
        </div>
        {showModal ? (
          <MaterialModal
            visible={showModal}
            modeltitle={`${isAdd ? "添加" : "替换"}素材`}
            multiple={isAdd}
            showtype="1,2"
            dtype="1"
            accept=".mp4,.flv,.png,.jpg,.jpeg"
            usetype="material"
            cancel={() => {
              this.setState({ showModal: false });
            }}
            buttons={[
              {
                name: "取消",
                callBack: () => {
                  this.setState({ showModal: false });
                },
              },
              {
                name: "确认",
                type: "primary",
                callBack: this.use,
              },
            ]}
          />
        ) : null}
      </div>
    );
  }
}

export default templateFooter;
