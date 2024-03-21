import React from "react";
import { DragSource, DropTarget } from "react-dnd";
import { getSecond2Minute } from "@/utils/handy";
import ImageModal from "../../ImageModal";
import VideoModal from "../../VideoModal";
import "./index.scss";

const itemSource = {
  beginDrag(props) {
    return {
      item: props.item,
    };
  },

  endDrag: (props, monitor) => {
    let sourceItem = monitor.getItem();
    sourceItem = (sourceItem && sourceItem.item) || {};
    let targetItem = monitor.getDropResult();
    targetItem = (targetItem && targetItem.item) || {};
    if (!targetItem.id) {
      return;
    }
    props.endDrag(sourceItem, targetItem);
  },
};

const itemTarget = {
  // 当有对应的 drag source 放在当前组件区域时，会返回一个对象，可以在 monitor.getDropResult() 中获取到
  drop: (monitor) => {
    return { item: monitor.item };
  },
};

@DragSource("videoTemplateItem", itemSource, (connect, monitor) => ({
  // 包裹住 DOM 节点，使其可以进行拖拽操作
  connectDragSource: connect.dragSource(),
  // 是否处于拖拽状态
  isDragging: monitor.isDragging(),
}))
@DropTarget("videoTemplateItem", itemTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
}))
class videoTemplateItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHover: false,
      visible: false,
    };
  }

  // 视频预览弹窗裁剪
  cut = (startTime, endTime) => {
    const { item } = this.props;
    let newSelectedItem = Object.assign({}, item);
    newSelectedItem["startRange"] = startTime;
    newSelectedItem["endRange"] = endTime;
    newSelectedItem["durationRange"] = endTime - startTime;
    this.setState({ visible: false }, () => {
      this.props.setSelectedItem(newSelectedItem);
    });
  };

  render() {
    const { isHover, visible } = this.state;
    const {
      isDragging,
      connectDragSource,
      connectDropTarget,
      item,
      num,
      selected,
    } = this.props;
    const opacity = isDragging ? 0 : 1;
    const { isConfig } = item;
    const asset = item.asset || {};
    let PreveiwModal = ImageModal;
    if (asset && asset.type === "video") {
      PreveiwModal = VideoModal;
    }
    let dom = (
      <div
        style={{ opacity }}
        className={`templateFooterList-item ${selected ? "selected" : ""}`}
        onMouseEnter={() => {
          this.setState({ isHover: true });
        }}
        onMouseLeave={() => {
          this.setState({ isHover: false });
        }}
        onClick={() => {
          this.props.setSelectedItem(item);
        }}
      >
        <div className="templateFooterList-img">
          <img src={asset.cover} />
          {!isConfig ? (
            <React.Fragment>
              <span>{num}</span>
              {isHover || selected ? (
                <span
                  className="templateFooterList-del"
                  onClick={this.props.showDelModal}
                >
                  <span className="ico iconfont iconProperty1IconProperty216pxProperty3shanchu" />
                </span>
              ) : null}
            </React.Fragment>
          ) : null}
        </div>
        <div className="templateFooterList-handle">
          {isHover && !isConfig ? (
            <React.Fragment>
              <span
                className="ico iconfont icon16pxtuodong"
                title="拖拽调整排序"
              />
              <ul>
                <li onClick={this.props.showModal}>
                  <span className="ico iconfont icon16pxtihuan" />
                  替换
                </li>
                <li
                  onClick={() => {
                    this.setState({ visible: true });
                    // 埋点
                    window.sensors &&
                      window.sensors.track("cut_crop", {
                        cropSource: "template",
                        fileName: asset.name,
                        fileType: asset.type,
                      });
                  }}
                >
                  <span className="ico iconfont icon16pxjiancai" />
                  裁剪
                </li>
              </ul>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className="templateFooterList-name" title={asset.name}>
                {asset.name}
              </span>
              <span className="templateFooterList-time">
                {getSecond2Minute(item.durationRange || 0)}
              </span>
            </React.Fragment>
          )}
        </div>
      </div>
    );

    return (
      <React.Fragment>
        {connectDragSource && !isConfig
          ? connectDragSource(connectDropTarget(dom))
          : dom}
        {visible ? (
          <PreveiwModal
            item={item}
            cut={this.cut}
            visible={visible}
            closeVisible={() => {
              this.setState({ visible: false });
            }}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
export default videoTemplateItem;
