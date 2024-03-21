import React from "react";
import { Button, Input, Modal, Popover, Slider } from "antd";
import { save_headConfig } from "@/channel";
import PreviewModal from "@/components/PreviewModal";
import MaterialModal from "../../MaterialModal";
import "./index.scss";

const positionList = [
  { id: 0, ico: "icon16pxzuoshang", type: "left_top" },
  { id: 1, ico: "icon16pxyoushang", type: "right_top" },
  { id: 2, ico: "icon16pxzuoxia", type: "left_bottom" },
  { id: 3, ico: "icon16pxyouxia", type: "right_bottom" },
];
export default class headend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: {},
      type: "", // head end watermark
      visible: false, // 打开位置弹窗
      pos: "", // 水印位置
      showPreviewModal: false,
      showModal: false, // 是否显示素材弹窗
    };
  }

  componentWillMount() {
    const { selectedItem } = this.props;
    let currentItem = Object.assign({}, selectedItem);
    this.setState({ currentItem: currentItem });
  }

  componentDidMount() {}

  componentWillUnmount() {
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }

  // 替换和添加
  addReplace = (item) => {
    let { currentItem, type } = this.state;
    currentItem = Object.assign({}, currentItem);
    item = item[0] || {};
    let newItem = currentItem[type];
    newItem = { ...newItem, ...item };
    if (type === "watermark" && !newItem["pos"]) {
      newItem["pos"] = "left_top";
    }
    currentItem[type] = newItem;
    this.setState({ currentItem, showModal: false });
  };

  // 删除
  del = () => {
    let { currentItem, type } = this.state;
    currentItem = Object.assign({}, currentItem);
    currentItem[type] = null;
    this.setState({ currentItem });
  };

  // 保存
  save = () => {
    const { isAdd } = this.props;
    let { currentItem } = this.state;
    save_headConfig({ ...currentItem }).then((re) => {
      let key = "cut_add_op/ed/logo";
      if (isAdd) {
        key = "cut_add_op/ed/logo";
      } else {
        key = "cut_edit_op/ed/logo";
      }
      // 埋点
      window.sensors &&
        window.sensors.track(key, {
          creditsWatermarkName: currentItem.name,
          creditsInName:
            currentItem.head &&
            currentItem.head.asset &&
            currentItem.head.asset.name,
          creditsOutName:
            currentItem.end &&
            currentItem.end.asset &&
            currentItem.end.asset.name,
          watermarkName:
            currentItem.watermark &&
            currentItem.watermark.asset &&
            currentItem.watermark.asset.name,
        });
      this.props.setShowConfig(false);
      this.props.use(re, true);
    });
  };

  // 设置水印的位置
  setPos = () => {
    let { currentItem, pos } = this.state;
    currentItem = Object.assign({}, currentItem);
    currentItem["watermark"]["pos"] = pos;
    this.setState({ currentItem });
  };

  render() {
    const { list, setShowConfig } = this.props;
    const {
      type,
      currentItem,
      visible,
      pos,
      showPreviewModal,
      materialList,
      showModal,
    } = this.state;
    const { head, end, watermark } = currentItem;
    let previewUrl = "";
    let watermarkPreviewUrl = "";
    if (head && head.asset) {
      previewUrl = head.asset.cover;
      watermarkPreviewUrl = head.asset.cover;
    } else if (end && end.asset) {
      previewUrl = end.asset.cover;
      watermarkPreviewUrl = end.asset.cover;
    } else {
      previewUrl = watermark && watermark.asset.cover;
    }
    let nameStr = "";
    switch (type) {
      case "end":
        nameStr = "片尾";
        break;
      case "head":
        nameStr = "片头";
        break;
      case "watermark":
        nameStr = "水印";
        break;
    }
    return (
      <React.Fragment>
        <div className="headend-top">
          {list && list.length > 0 ? (
            <span
              style={{ fontSize: 14, color: "#161616", cursor: "pointer" }}
              onClick={() => {
                setShowConfig(false);
              }}
            >
              <span className="ico iconfont icon24pxfanhui" />
              返回
            </span>
          ) : (
            <span>添加片头片尾</span>
          )}

          <Button
            type="primary"
            onClick={this.save}
            disabled={!previewUrl || !currentItem.name}
          >
            保存并应用
          </Button>
        </div>
        <div className="headend-config">
          <div>
            <label>输入标题</label>
            <Input
              allowClear
              maxLength={50}
              placeholder="请输入标题（不得超出50个字）"
              value={currentItem.name}
              onChange={(e) => {
                currentItem["name"] = e.target.value;
                this.setState({ currentItem });
              }}
            ></Input>
          </div>
          <ul className="headend-list">
            {currentItem &&
              ["head", "end", "watermark"].map((name, index) => {
                let item = currentItem[name] || {};
                let ico = "";
                let nameStr = "";
                let src = item.asset && item.asset.previewUrl;
                let startTime = item.startRange;
                let endTime = item.endRange;
                let isVideo = item.asset && item.asset.type === "video";
                switch (name) {
                  case "end":
                    nameStr = "片尾";
                    ico = "icon24pxshangchuanpianwei";
                    break;
                  case "head":
                    nameStr = "片头";
                    ico = "icon24pxshangchuanpiantou";
                    break;
                  case "watermark":
                    nameStr = "水印";
                    ico = "icon24pxshangchuanshuiyin";
                    break;
                }
                const content = (
                  <div className="headendVolume-wrap">
                    <span>{nameStr}音量</span>
                    <Slider
                      value={item.volume}
                      max={100}
                      min={0}
                      onChange={(value) => {
                        let { currentItem } = this.state;
                        currentItem[name]["volume"] = value;
                        this.setState({ currentItem });
                      }}
                    />
                  </div>
                );
                return (
                  <li className="headend-item" key={index}>
                    {!item.asset ? (
                      <React.Fragment>
                        <div
                          className="headend-empty"
                          onClick={() => {
                            this.setState({ type: name, showModal: true });
                          }}
                        >
                          <svg className="icon svg-icon" aria-hidden="true">
                            <use xlinkHref={`#${ico}`}></use>
                          </svg>
                          <span>{`上传${nameStr}`}</span>
                        </div>
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <div className="headend-image">
                          {isVideo ? (
                            <video
                              src={src}
                              onMouseEnter={(e) => {
                                e.target.currentTime = startTime;
                                e.target.volume = 0;
                                e.target.play().catch(() => {});
                              }}
                              onTimeUpdate={(e) => {
                                if (e.target.currentTime > endTime) {
                                  e.target.currentTime = endTime;
                                  e.target.pause();
                                }
                              }}
                              onMouseLeave={(e) => {
                                !e.target.paused && e.target.pause();
                              }}
                            />
                          ) : (
                            <img src={src} />
                          )}
                          <ul>
                            {name !== "watermark" ? (
                              <Popover
                                placement="top"
                                title=""
                                content={content}
                                trigger="click"
                              >
                                <li title="音量">
                                  <span
                                    className={`ico iconfont ${
                                      item.volume > 0
                                        ? "iconProperty1iconProperty216pxProperty3shengyin"
                                        : "icona-16px"
                                    }`}
                                  />
                                </li>
                              </Popover>
                            ) : (
                              <span />
                            )}
                            <li
                              title="删除"
                              onClick={() => {
                                this.setState({ type: name }, () => {
                                  this.del();
                                });
                              }}
                            >
                              <span className="ico iconfont iconProperty1IconProperty216pxProperty3shanchu" />
                            </li>
                          </ul>
                          {name === "watermark" ? (
                            <div
                              className="headend-button"
                              onClick={() => {
                                let pos = watermark && watermark.pos;
                                this.setState({ pos, visible: true });
                              }}
                            >
                              <span>调整位置</span>
                            </div>
                          ) : null}
                        </div>
                        <div
                          className="headend-handle"
                          onClick={() => {
                            this.setState({ type: name, showModal: true });
                          }}
                        >{`替换${nameStr}`}</div>
                      </React.Fragment>
                    )}
                  </li>
                );
              })}
          </ul>
          {!previewUrl ? (
            <div className="headendConfig-preview empty">
              <div className="headendConfig-play">
                <span className="ico iconfont icon24pxbofang" />
              </div>
              <span>预览片头片尾/水印效果</span>
            </div>
          ) : (
            <div className="headendConfig-preview">
              <img src={previewUrl} />
              <div
                className="headendConfig-play"
                onClick={() => {
                  let { head, end } = currentItem;
                  let materialList = [
                    head,
                    {
                      startRange: 0,
                      endRange: 10,
                      durationRange: 10,
                      volume: 100,
                      asset: {
                        previewUrl:
                          "https://aipan-test.bj.bcebos.com/v1/2e15314bf2be42799b119ef1d4ab55ec.mp4",
                        sourceUrl:
                          "https://aipan-test.bj.bcebos.com/v1/2e15314bf2be42799b119ef1d4ab55ec.mp4",
                        cover: "",
                        name: "默认.mp4",
                        type: "video",
                        duration: 10,
                        width: 1920,
                        height: 1080,
                      },
                    },
                    end,
                  ];
                  // 埋点
                  window.sensors && window.sensors.track("cut_view_op/ed/logo");
                  this.setState({ materialList, showPreviewModal: true });
                }}
              >
                <span className="ico iconfont icon24pxbofang" />
              </div>
            </div>
          )}
        </div>
        <Modal
          title="视频预览"
          visible={visible}
          footer={null}
          width={556}
          onCancel={() => {
            this.setState({ visible: false });
          }}
        >
          <div className="headendConfig-position">
            <img
              className="headendConfig-background"
              src={watermarkPreviewUrl}
            />
            <div className={`headendConfig-watermark ${pos}`}>
              <img src={watermark && watermark.asset.previewUrl} />
            </div>
          </div>
          <div className="headendConfig-positionHandle">
            <div>
              {positionList &&
                positionList.map((item) => {
                  return (
                    <Button
                      key={item.id}
                      type={pos === item.type ? "primary" : "default"}
                      onClick={() => {
                        this.setState({ pos: item.type });
                      }}
                    >
                      <span className={`ico iconfont ${item.ico}`} />
                    </Button>
                  );
                })}
            </div>
            <Button
              type="primary"
              onClick={() => {
                this.setState({ visible: false }, () => {
                  this.setPos();
                });
              }}
            >
              确定
            </Button>
          </div>
        </Modal>
        {showPreviewModal ? (
          <PreviewModal
            visible={showPreviewModal}
            closeVisible={() => {
              this.setState({ showPreviewModal: false });
            }}
            name={currentItem.name}
            materialList={materialList}
            watermark={currentItem.watermark}
          />
        ) : null}
        {showModal ? (
          <MaterialModal
            modeltitle={`上传${nameStr}`}
            visible={showModal}
            showtype={type === "watermark" ? "1" : "1,2"}
            dtype="1"
            usetype={type}
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
                callBack: this.addReplace,
              },
            ]}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
