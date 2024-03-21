import React from "react";
import { Button, message } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import { get_mediaList, del_media } from "@/channel";
import DelModal from "./DelModal";
import HeadendConfig from "./headendConfig";
import "./index.scss";

export default class headend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      showConfig: false, // 是否显示详情
      isAdd: true, // 是否为新增
      selectedItem: {},
      pageSize: 14, // 每页个数
      loading: false,
      hasMore: true,
      visible: false, //  删除 弹窗
    };
  }

  componentWillMount() {
    this.initData();
  }

  initData = (page = 1) => {
    const { pageSize, list } = this.state;
    this.setState({ loading: true }, () => {
      get_mediaList({
        current: page,
        size: pageSize,
        type: "headend",
      }).then((re) => {
        let hasMore = re.total > page * pageSize;
        this.setState(
          {
            hasMore,
            list: [...list, ...re.list],
            loading: false,
          },
          () => {
            const { list } = this.state;
            if (!list || list.length < 1) {
              this.setState({ showConfig: true, isAdd: true });
            }
          }
        );
      });
    });
  };

  componentDidMount() {}

  componentWillUnmount() {
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }

  // 设置选中的item
  setSelectedItem = (item) => {
    this.setState({ selectedItem: item });
  };

  // 设置list
  setList = (list) => {
    this.setState({ list: JSON.parse(JSON.stringify(list)) });
  };

  // 应用片头片尾
  use = (selectedItem, refresh) => {
    let { config, setConfig } = this.props;
    config = Object.assign({}, config);
    if (refresh) {
      this.setList([]);
      this.initData();
    }
    config["track"]["config"] = selectedItem;
    // 埋点
    window.sensors &&
      window.sensors.track("cut_apply_op/ed/logo", {
        creditsWatermarkName: selectedItem.name,
      });
    setConfig(config);
  };

  // 取消应用片头片尾
  noUse = (item) => {
    let { config, setConfig } = this.props;
    config = Object.assign({}, config);
    config["track"]["config"] = null;
    // 埋点
    window.sensors &&
      window.sensors.track("cut_cancel_op/ed/logo", {
        creditsWatermarkName: item.name,
      });
    setConfig(config);
  };

  // 删除片头片尾
  del = () => {
    let { selectedItem, list } = this.state;
    del_media({ id: selectedItem.id, type: "headend" }).then(() => {
      list = list.filter((item) => item.id !== selectedItem.id);
      // 埋点
      window.sensors &&
        window.sensors.track("cut_delete_op/ed/logo", {
          creditsWatermarkName: selectedItem.name,
        });
      this.setState({ visible: false }, () => {
        this.setList(list);
      });
    });
  };

  render() {
    const { list, showConfig, isAdd, selectedItem, hasMore, loading, visible } =
      this.state;
    const { config } = this.props;
    let { track } = config;
    return (
      <div className="headend-wrap">
        {showConfig ? (
          <HeadendConfig
            list={list}
            selectedItem={selectedItem}
            use={this.use}
            isAdd={isAdd}
            setShowConfig={(showConfig) => {
              this.setState({ showConfig });
            }}
          />
        ) : (
          <React.Fragment>
            <div className="headend-top">
              <span>全部</span>
              <Button
                onClick={async () => {
                  await this.setSelectedItem({});
                  this.setState({ showConfig: true, isAdd: true });
                }}
              >
                <span className="ico iconfont icon24pxshangchuanpiantou" />
                添加片头片尾/水印
              </Button>
            </div>
            <ul className="headend-list">
              <InfiniteScroll
                initialLoad={false}
                pageStart={1}
                loadMore={this.initData}
                hasMore={hasMore && !loading}
                useWindow={false}
              >
                {list &&
                  list.map((item, index) => {
                    let isUse =
                      track && track.config && track.config.id == item.id;
                    let src = "";
                    let isVideo = false;
                    let startTime = 0;
                    let endTime = 0;
                    const { head, end, watermark } = item;
                    if (head && head.asset) {
                      isVideo = head.asset.type === "video";
                      src = head.asset.previewUrl;
                      startTime = head.startRange;
                      endTime = head.endRange;
                    } else if (end && end.asset) {
                      isVideo = end.asset.type === "video";
                      src = end.asset.previewUrl;
                      startTime = end.startRange;
                      endTime = end.endRange;
                    } else {
                      isVideo = false;
                      src =
                        watermark && watermark.asset && watermark.asset.cover;
                    }
                    return (
                      <li className="headend-item" key={index}>
                        <React.Fragment>
                          <div className="headend-image">
                            {isVideo ? (
                              <video
                                src={src}
                                onMouseEnter={(e) => {
                                  e.target.currentTime = startTime;
                                  e.target.volume = 0;
                                  e.target.play().catch((error) => {});
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
                              <li
                                title="编辑"
                                onClick={async () => {
                                  await this.setSelectedItem(item);
                                  this.setState({
                                    showConfig: true,
                                    isAdd: false,
                                  });
                                }}
                              >
                                <span className="ico iconfont icon16pxbianji" />
                              </li>
                              <li
                                title="删除"
                                onClick={async () => {
                                  await this.setSelectedItem(item);
                                  if (isUse) {
                                    message.warning("取消应用后，才可以删除");
                                    return;
                                  }
                                  this.setState({ visible: true });
                                }}
                              >
                                <span className="ico iconfont iconProperty1IconProperty216pxProperty3shanchu" />
                              </li>
                            </ul>
                            {isUse ? (
                              <div
                                className="headend-button"
                                onClick={() => {
                                  this.noUse(item);
                                }}
                              >
                                <span>取消应用</span>
                              </div>
                            ) : (
                              <div
                                className="headend-button"
                                onClick={() => {
                                  this.use(item);
                                }}
                              >
                                <span>应用片头片尾</span>
                              </div>
                            )}
                          </div>
                          <div className="headend-handle">{item.name}</div>
                        </React.Fragment>
                      </li>
                    );
                  })}
              </InfiniteScroll>
            </ul>
          </React.Fragment>
        )}
        {visible ? (
          <DelModal
            selectedItem={selectedItem}
            del={this.del}
            visible={visible}
            closeVisible={() => {
              this.setState({ visible: false });
            }}
          />
        ) : null}
      </div>
    );
  }
}
