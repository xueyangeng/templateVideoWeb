import React, { Component } from "react";
import { Modal, Button, Input, DatePicker, message, Spin } from "antd";
import InfiniteScroll from "react-infinite-scroller";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./index.scss";
import { imedia, mediaupload, get_userInfo } from "@/channel";
const { RangePicker } = DatePicker;
import Thumb from "./thumb";
import listnull from "@/assets/images/null.png";
import listnulls from "@/assets/images/nulls.png";
import { SOURCE_TYPE, getFileType, guid2 } from "@/utils/handy";
import storage from "@/utils/storage";
import VideoModal from "../VideoModal";
import ImageModal from "../ImageModal";

let userName = "";
let tenantName = "";
class MaterialModal extends Component {
  static defaultProps = {
    multiple: false, // 是否多多选
    accept: ".mp4,.flv,.png,.jpg,.jpeg,.mp3", // 允许上传类型
    modeltitle: "添加素材", // 弹窗标题
    showtype: "5,2,1", // 弹窗素材分类 '5,2,1' 5:音频, 2:视频, 1:图片
    dtype: 1, // 默认选中素材分类 1 2 5
    usetype: "material", // 上传到素材列表类型 watermark=水印、head=片头、end=片尾、music=背景音乐; material=素材
  };
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      locallist: [],
      total: 0,
      size: 15,
      current: 1,
      userGroup: 0,
      orderBy: 2,
      infiniteId: 1,
      startTime: "",
      endTime: "",
      search: "",
      sourceType: props.dtype,
      type: [
        {
          title: "图片",
          sourceType: 1,
        },
        {
          title: "视频",
          sourceType: 2,
        },
        {
          title: "音频",
          sourceType: 5,
        },
      ],
      loading: false,
      pageloading: false,
      hasMore: true,
      checklist: [],
      preveiwitem: {},
      preveiwvisable: false,
    };
  }
  componentWillMount() {
    get_userInfo({}).then((re) => {
      userName = re.username;
      tenantName = re.tenantName;
    });
  }
  get materiallist() {
    const { checklist, sourceType } = this.state;
    const { upload } = this.props;
    const { list } = this.state;
    const showupload = [];

    upload.map((item) => {
      let c = true;
      for (const l of list) {
        if (l.id == item.id) {
          c = false;
          break;
        }
      }
      if (c) {
        if (SOURCE_TYPE[getFileType(item.fileExt)] == sourceType) {
          showupload.push(item);
        }
      }
    });
    const materiallist = [...showupload, ...list];
    materiallist.map((t) => {
      let check = false;
      for (const tc of checklist) {
        if (tc.id === t.id) {
          check = true;
          break;
        }
      }
      t.check = check;
    });
    return materiallist;
  }
  uploadFileFilter = () => {
    let str = "";
    switch (1) {
      case 1:
        str = "&fileSize=" + 5 * 1024 * 1024 + "&accept=.jpg,.jpeg,.png";
        break;
      case 2:
        str = "&fileSize=" + 1024 * 1024 * 1024 + "&accept=.mp4";
        break;
      case 5:
        str = "&fileSize=" + 30 * 1024 * 1024 + "&accept=.mp3";
        break;
      case 6:
        str = "&fileSize=" + 10 * 1024 * 1024 + "&accept=.doc,.docx,.txt";
        break;
    }
    return str;
  };
  getFilds = () => {
    const { accept, multiple } = this.props;
    React.$worker.postMessage({
      type: "start",
      value: { folderId: "*", multiple, accept },
    });
  };
  pickChange = async (value, dateString) => {
    await this.setState({
      startTime: dateString[0],
      endTime: dateString[1],
      current: 1,
      list: [],
      hasMore: true,
    });
  };
  settype = async (sourceType) => {
    await this.setState({ sourceType, current: 1, list: [], hasMore: true });
  };
  changeKey = async (e) => {
    const { value } = e.target;
    await this.setState({ search: value });
    if (!this.state.search) {
      this.onSearch();
    }
  };
  onSearch = async () => {
    await this.setState({ current: 1, list: [], hasMore: true });
    // 埋点
    window.sensors &&
      window.sensors.track("cut_search", {
        userName: userName,
      });
  };
  getimedia = async () => {
    const { size, current, endTime, startTime, search, sourceType, list } =
      this.state;
    if (current == 1) {
      // await this.setState({loading: true, checklist: []})
      await this.setState({ loading: true });
    } else {
      await this.setState({ pageloading: true });
    }
    imedia({ size, current, sourceType, startTime, endTime, search }).then(
      (re) => {
        let hasMore = true;
        if (current * size >= re.total) {
          hasMore = false;
        }
        // const hasMore = !!re.records.length
        this.setState({
          hasMore,
          current: current + 1,
          list: [...list, ...re.records],
          loading: false,
          pageloading: false,
        });
      }
    );
  };
  checkitem = (item) => {
    const { checklist } = this.state;
    const { multiple } = this.props;
    console.log("checkitem", item);
    console.log("checklist", checklist);
    if (!multiple && checklist.length > 0) {
      return false;
    }
    let index = -1;
    checklist.map((cl, i) => {
      if (cl.id == item.id) {
        index = i;
      }
    });
    // const index = checklist.indexOf(item)
    console.log("index", index);
    if (index > -1) {
      checklist.splice(index, 1);
    } else {
      checklist.push(item);
    }
    console.log("checklist", checklist);
    this.setState({ checklist });
  };
  setpreveiw = (item) => {
    const preveiwitem = {};
    preveiwitem.asset = item;
    preveiwitem.asset.previewUrl = item.videoCodeUrl;

    preveiwitem.durationRange = item.duration;
    console.log(preveiwitem);
    this.setState({ preveiwitem, preveiwvisable: true });
    // 埋点
    window.sensors &&
      window.sensors.track("cut_crop", {
        cropSource: "material",
        fileName: preveiwitem.asset && preveiwitem.asset.name,
        fileType: preveiwitem.asset && preveiwitem.asset.type,
      });
  };
  cut = (startTime, endTime) => {
    const { preveiwitem } = this.state;
    const { buttons } = this.props;
    preveiwitem.startRange = startTime;
    preveiwitem.endRange = endTime;
    preveiwitem.durationRange = endTime - startTime || 0;
    buttons.map((button) => {
      if (button.type == "primary") {
        this.transferData(button, preveiwitem);
      }
    });
  };
  transferData = (button, preveiwitem) => {
    const { usetype } = this.props;
    const { checklist } = this.state;
    const projectId = storage.get("projectId");
    const items = [];
    if (button.type != "primary") {
      button.callBack();
      this.setState({ checklist: [] });
      return false;
    }
    if (preveiwitem && Object.keys(preveiwitem).length) {
      const { durationRange, startRange, endRange } = preveiwitem;
      const {
        compressImg,
        height,
        name,
        sourceType,
        width,
        cover,
        duration,
        sourceUrl,
        videoCodeUrl,
      } = preveiwitem.asset;
      items.push({
        cover: cover || compressImg,
        duration: duration || 0,
        height,
        name,
        previewUrl: videoCodeUrl,
        sourceType,
        sourceUrl,
        type: usetype,
        width,
        startRange: startRange || 0,
        endRange: endRange || duration || 0,
      });
    } else {
      checklist.map((item) => {
        const {
          compressImg,
          height,
          name,
          sourceType,
          width,
          cover,
          duration,
          sourceUrl,
          videoCodeUrl,
          startRange,
          endRange,
        } = item;
        items.push({
          cover: cover || compressImg,
          duration: duration || 0,
          height,
          name,
          previewUrl: videoCodeUrl,
          sourceType,
          sourceUrl,
          type: usetype,
          width,
          startRange: startRange || 0,
          endRange: endRange || duration || 0,
        });
      });
    }
    return mediaupload({
      items,
      projectId,
    }).then((res) => {
      const backlist = [];
      res.map((item) => {
        const {
          id,
          previewUrl,
          sourceUrl,
          cover,
          name,
          type,
          size,
          duration,
          width,
          height,
          startRange,
          endRange,
        } = item;
        item.id = guid2();
        item.asset = {
          id,
          previewUrl,
          sourceUrl,
          cover,
          name,
          type,
          size,
          duration,
          width,
          height,
        };
        item.startTime = 0;
        item.durationRange = (endRange || duration) - (startRange || 0);
        item.hasAudio = true;
        item.volume = 100;
        backlist.push(item);
      });
      this.setState({ preveiwitem: {}, preveiwvisable: false });
      this.setState({ checklist: [] });
      button.callBack(backlist);
      if (!res || res.length < 1) return;
      // 埋点
      window.sensors &&
        window.sensors.track("cut_upload", {
          userName: userName,
          tenantName: tenantName,
          fileNumber: (res && res.length) || 0,
          fileName: res.map((i) => i.asset && i.asset.name),
          fileType: res.map((i) => i.asset && i.asset.type),
        });
    });
  };
  render() {
    const {
      visible,
      buttons,
      closeIcon,
      className,
      maskClosable,
      cancel,
      multiple,
      upload,
      modeltitle,
      showtype,
    } = this.props;
    const {
      list,
      accept,
      locallist,
      startTime,
      endTime,
      type,
      sourceType,
      search,
      loading,
      pageloading,
      hasMore,
      current,
      checklist,
      preveiwvisable,
      preveiwitem,
    } = this.state;
    let PreveiwModal = VideoModal;
    if (preveiwitem.asset && preveiwitem.asset.sourceType == 1) {
      PreveiwModal = ImageModal;
    }
    return (
      <Modal
        title=""
        visible={visible}
        className={"materialbox " + className}
        footer={null}
        maskClosable={maskClosable || false}
        width={792}
        centered={true}
        onCancel={cancel}
        closeIcon={
          closeIcon || <span className="ico iconfont icon003guanbi"></span>
        }
      >
        <div className="materialtitle">{modeltitle}</div>
        <Spin spinning={loading}>
          <div className="materialtype">
            <div className="typename">资源库</div>
            {type.map((item) => {
              if (showtype.includes(item.sourceType)) {
                return (
                  <div
                    key={item.sourceType}
                    onClick={() => {
                      this.settype(item.sourceType);
                    }}
                    className={`typelist ${
                      item.sourceType == sourceType ? "typethis" : ""
                    }`}
                  >
                    {item.title}
                  </div>
                );
              }
            })}
            <div className="typetime">
              <RangePicker
                onChange={this.pickChange}
                className={
                  endTime && startTime ? "rangepicker select" : "rangepicker"
                }
                suffixIcon={""}
                bordered={false}
                placeholder={["上传时间", ""]}
              />
            </div>
            <div className="typesearch">
              <Input
                placeholder="输入关键词"
                onChange={this.changeKey}
                style={{ width: "160px", padding: "5px 11px" }}
              />
              <div
                className="searchicon"
                onClick={() => {
                  this.onSearch();
                }}
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.19114 2.19034C4.6864 -0.303681 8.72891 -0.303681 11.2225 2.19034C13.6195 4.58774 13.7129 8.41638 11.5025 10.9251L14.3203 13.7401L13.7407 14.3198L10.9229 11.5016C8.41455 13.7123 4.58816 13.6189 2.19114 11.2215C-0.302478 8.72752 -0.304115 4.68436 2.19114 2.19034ZM10.6436 10.6436C11.1757 10.113 11.5866 9.49237 11.8666 8.80295C12.1368 8.13646 12.2743 7.43067 12.2743 6.70686C12.2743 5.98306 12.1368 5.27726 11.8666 4.61077C11.5866 3.92135 11.1757 3.30235 10.6436 2.77014C10.1131 2.23793 9.49253 1.8269 8.80322 1.54688C8.1352 1.27668 7.43116 1.13912 6.70747 1.13912C5.98378 1.13912 5.2781 1.27668 4.61172 1.54688C3.92241 1.8269 3.30351 2.23957 2.77138 2.77014C2.23926 3.30071 1.82829 3.92135 1.54831 4.61077C1.27816 5.2789 1.14062 5.98306 1.14062 6.70686C1.14062 7.43067 1.27816 8.13646 1.54831 8.80295C1.82829 9.49237 2.2409 10.1114 2.77138 10.6436C3.30187 11.1758 3.92241 11.5868 4.61172 11.8668C5.27974 12.137 5.98378 12.2746 6.70747 12.2746C7.43116 12.2746 8.13684 12.137 8.80322 11.8668C9.49253 11.5868 10.1114 11.1758 10.6436 10.6436Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
            <Button
              onClick={this.getFilds}
              type="primary"
              style={{
                padding: "4px 24px",
                flexShrink: 0,
                borderRadius: "2px",
              }}
            >
              本地上传
            </Button>
          </div>

          <div className="materialbox">
            <InfiniteScroll
              initialLoad={true}
              pageStart={1}
              loadMore={this.getimedia}
              hasMore={!pageloading && hasMore && !loading}
              useWindow={false}
            >
              <div className="materiallist">
                {/* <div className="thumb addmater" onClick={this.getFilds}>
              <div className="imgbox">
                  <svg t="1624279007213" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9919" width="200" height="200"><path d="M832 487.04v49.92H536.96V832h-49.92V536.96H192v-49.92h295.04V192h49.92v295.04z" p-id="9920"></path></svg>
              </div>
              <h1>本地上传</h1>
            </div> */}
                {this.materiallist.map((item) => {
                  return (
                    <Thumb
                      preveiw={() => {
                        this.setpreveiw(item);
                      }}
                      checkitem={() => {
                        this.checkitem(item);
                      }}
                      item={item}
                      key={item.id}
                    />
                  );
                })}
              </div>
              {pageloading && hasMore && (
                <div className="demo-loading-container">
                  <Spin />
                </div>
              )}
              {this.materiallist.length == 0 && !loading && (
                <div className="nullbox">
                  <img
                    src={search || startTime || endTime ? listnulls : listnull}
                  />
                  {search || startTime || endTime
                    ? "未检索到相关信息"
                    : "暂无素材，请本地上传相关内容"}
                </div>
              )}
            </InfiniteScroll>
          </div>
        </Spin>
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
                    this.transferData(button);
                  }}
                >
                  {button.name}
                </Button>
              );
            })}
        </div>
        {preveiwvisable ? (
          <PreveiwModal
            item={preveiwitem}
            cut={this.cut}
            visible={preveiwvisable}
            ismusic={preveiwitem.asset.sourceType == 5}
            closeVisible={() => {
              this.setState({ preveiwvisable: false, preveiwitem: {} });
            }}
          />
        ) : null}
      </Modal>
    );
  }
}
Number.propTypes = {
  upload: PropTypes.array.isRequired,
};
const mapStateToProps = ({ upload }) => ({
  upload,
});
export default connect(mapStateToProps, null)(MaterialModal);
