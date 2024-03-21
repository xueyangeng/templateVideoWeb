import React from "react";
import { Button, Layout, Modal, Input, message } from "antd";
import { get_config, save_config, get_userInfo } from "@/channel";
import storage from "@/utils/storage";
import PreviewModal from "@/components/PreviewModal";
import CreateModal from "./CreateModal";
import DelModal from "./DelModal";
import TemplateContent from "./templateContent";
import TemplateFooter from "./templateFooter";
import Upload from "./Upload";
import title from "@/assets/images/title.svg";
import music from "@/assets/images/music.svg";
import "./index.scss";
const { Header, Footer, Sider, Content } = Layout;

const menuList = [
  { name: "片头片尾", src: title, ico: "icon24pxpiantoupianwei", id: 0 },
  { name: "背景音乐", src: music, ico: "icon24pxbeijingyinle", id: 1 },
];

export default class VideoTemplate extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menuId: 0,
      config: {},
      list: [],
      selectedItem: {},
      materialList: [],
      visible: false,
      reNameModal: false, // 重命名弹窗
      newName: "", // 新名字
      opneLeft: true, // 是否打开左侧区域
      showPreviewModal: false, // 是否显示整体预览弹窗
      localfile: [],
      showCreate: false, // 显示生成弹窗
    };
  }

  componentWillMount() {
    this.init();
  }

  use = async (item) => {
    await this.setState({ showModal: false });
  };

  init() {
    let url = window.location.href;
    let projectId = url.split("#");
    projectId = projectId[projectId.length - 1];
    get_config(projectId)
      .then((re) => {
        let config = re || {};
        config = this.handleConfig(config);
        let list = config && config.track.items;
        this.setState({ config, list, newName: config.name }, () => {
          this.setSelectedItem((list && list[0]) || {});
        });
      })
      .catch((error) => {});
  }

  // 设置选中的item
  setSelectedItem = (item, isAdd) => {
    const { selectedItem, config } = this.state;
    let { list } = this.state;
    let needSetList = false;
    if (JSON.stringify(item) === JSON.stringify(selectedItem)) return;
    // 修改和替换素材
    if (!isAdd) {
      let noHaveItem = JSON.stringify(config).indexOf(item.id) === -1;
      // 修改素材
      if (item.id === selectedItem.id) {
        needSetList = true;
        list = list.map((l) => {
          if (l.id === item.id) {
            l = { ...l, ...item };
          }
          return l;
        });
      } else if (noHaveItem) {
        // 埋点
        window.sensors &&
          window.sensors.track("cut_replacefile", {
            fileType: item.type,
            fileName: item.name,
          });
        // 替换素材
        needSetList = true;
        list = list.map((l) => {
          if (l.id === selectedItem.id) {
            l = item;
          }
          return l;
        });
      }
    }
    // 添加素材 item是一个数组
    if (isAdd) {
      if (item && item.length > 0) {
        needSetList = true;
        list = list.concat(item);
        // 埋点
        window.sensors &&
          window.sensors.track("cut_add_files", {
            fileNumber: item.length || 0,
            fileName: item.map((i) => i.asset && i.asset.name),
            fileType: item.map((i) => i.asset && i.asset.type),
          });
        item = list[list.length - 1];
      }
    }
    needSetList && this.setList(list);
    this.setState({ selectedItem: item });
  };

  setList = (list) => {
    let config = Object.assign({}, this.state.config);
    if (!config || !config.id) return;
    config["track"]["items"] = list;
    this.setState({ list });
    this.setConfig(config);
  };

  handleConfig = (config) => {
    config = Object.assign({}, config);
    const track = config.track || {};
    let trackConfig = track.config || {};
    let head = trackConfig.head;
    let end = trackConfig.end;
    head && (head["isConfig"] = true);
    end && (end["isConfig"] = true);
    let items = track.items || [];
    let _materialList = [head, ...items, end];
    _materialList = _materialList.filter((item) => item && item.asset);
    _materialList = _materialList.map((item, index) => {
      let lastIndex = index - 1;
      let startTime =
        (_materialList[lastIndex] && _materialList[lastIndex].endTime) || 0;
      item["startTime"] = startTime;
      item["endTime"] = startTime + item.durationRange || 0;
      if (head && head.id === item.id) {
        head = { ...head, ...item };
      }
      if (end && end.id === item.id) {
        end = { ...end, ...item };
      }
      return item;
    });
    if (items && items.length > 0) {
      items = items.map((item) => {
        let m = _materialList.filter((m) => m.id === item.id);
        m = m[0] || {};
        item = { ...item, ...m };
        return item;
      });
    }
    let allduration = 0;
    if (_materialList && _materialList.length > 0) {
      let arr = _materialList.map((item) => item.durationRange);
      allduration = arr.reduce((a, b) => a + b);
    }
    config.duration = allduration;
    config["track"]["items"] = items;
    head && (trackConfig["head"] = head);
    end && (trackConfig["end"] = end);
    config["track"]["config"] = trackConfig;
    this.setState({ materialList: _materialList });

    // 配置变化的时候，背景音乐播放位置根据是否开启循环以及 选段音乐长度和 项目总市场进行从小计算设置
    const { duration } = config;
    const { endRange, startRange, loop, startTime, durationRange, endTime } =
      config.track.backgroundMusic;
    let setstartTime = startTime;
    let setendTime = endTime;
    let setdurationRange = durationRange;
    if (startTime > duration) {
      setstartTime = 0;
    }
    if (!loop) {
      if (setdurationRange > endRange - startRange) {
        setdurationRange = endRange - startRange;
        setendTime = endRange - startRange;
      }
    }
    if (setstartTime + setdurationRange > duration) {
      setdurationRange = duration - setstartTime;
      setendTime = setstartTime + setdurationRange;
    }
    config.track.backgroundMusic.startTime = setstartTime;
    config.track.backgroundMusic.endTime = setendTime;
    config.track.backgroundMusic.durationRange = setdurationRange;
    return config;
  };

  // 设置config
  setConfig = (config) => {
    config = this.handleConfig(config);
    this.setState({ config: JSON.parse(JSON.stringify(config)) }, () => {
      this.saveConfig();
    });
  };

  saveConfig = (showMessage) => {
    const { config } = this.state;
    save_config({ ...config })
      .then((re) => {
        showMessage && message.success("保存成功");
      })
      .catch((error) => {});
    get_userInfo({}).then((re) => {
      // 埋点
      window.sensors &&
        window.sensors.track("cut_generate", {
          userName: re.username,
          tenantName: re.tenantName,
          projectName: config.name,
        });
    });
  };

  setlocallist = (type, data) => {
    const { localfile } = this.state;
    let nlocal = [];
    switch (type) {
      case "append":
        nlocal = [data, ...localfile];
        break;

      case "ready":
        break;
      case "start":
        postMessage({ type: "start", value });
        break;

      case "add":
        break;
      case "list":
        postMessage({ type: "list", value: list });
        break;

      case "finish":
        break;

      case "success":
        break;
      case "saveError":
        break;
      case "saveSuccess":
        // success
        break;
      case "uploadError":
        // success
        break;
      case "uploading":
        // success
        break;
      case "complete":
        // success
        break;

      default:
        break;
    }
    this.setState({ localfile: nlocal });
  };

  // 重命名
  reName = () => {
    let { config, newName } = this.state;
    config = Object.assign({}, config);
    config.name = newName;
    this.setState({ reNameModal: false });
    this.setConfig(config);
  };

  // 删除素材
  del = () => {
    const { selectedItem, list } = this.state;
    let newList = list;
    let index = 0;
    list &&
      list.map((item, i) => {
        if (selectedItem.id === item.id) {
          index = i;
        }
      });
    index += 1;
    if (index > list.length - 1) index = list.length - 2;
    newList = list && list.filter((item) => selectedItem.id !== item.id);
    this.setState({ visible: false }, () => {
      // 埋点
      window.sensors &&
        window.sensors.track("cut_remove", {
          fileName:
            selectedItem && selectedItem.asset && selectedItem.asset.name,
        });
      this.setSelectedItem(list[index] || {});
      this.setList(newList);
    });
  };

  // 设置是否显示整体预览弹窗
  setShowPreviewModal = (value) => {
    const { config } = this.state;
    if (config.duration <= 0) return;
    this.setState({ showPreviewModal: value });
  };

  // 设置是否显示生成弹窗
  setShowCreate = (value) => {
    const { config } = this.state;
    if (config.duration <= 0) return;
    this.setState({ showCreate: value });
  };

  render() {
    const {
      config,
      list,
      selectedItem,
      menuId,
      visible,
      reNameModal,
      newName,
      opneLeft,
      showPreviewModal,
      materialList,
      showCreate,
    } = this.state;
    const track = config.track || {};
    const headendConfig = track.config || {};
    return (
      <div className="videoTemplate-wrap">
        <Layout>
          <Sider>
            <div
              className="templateSider-top"
              onClick={() => {
                let host = storage.get("host");
                window.open(`${host}/index`);
                // window.location.href = `${localStorage.host}/index`;
              }}
            >
              <span className="ico iconfont icon16pxfanhui" />
              <span>视频模板剪辑</span>
            </div>
            <ul>
              {menuList &&
                menuList.map((item) => {
                  let selected = item.id === menuId && opneLeft;
                  return (
                    <li
                      key={item.id}
                      className={selected ? "selected" : ""}
                      onClick={() => {
                        this.setState({ menuId: item.id });
                      }}
                    >
                      {selected ? (
                        <img src={item.src} />
                      ) : (
                        <span className={`ico iconfont ${item.ico}`} />
                      )}
                      <span>{item.name}</span>
                    </li>
                  );
                })}
            </ul>
          </Sider>
          <Layout>
            <Header>
              <div className="videoTemplate-autoSave"></div>
              <div className="videoTemplate-name">
                <span>{config.name || ""}</span>
                <span
                  className="ico iconfont icon16pxbianji"
                  onClick={() => {
                    this.setState({ reNameModal: true });
                  }}
                />
              </div>
              <div className="videoTemplate-button">
                <Button
                  onClick={() => {
                    this.setShowPreviewModal(true);
                    // 埋点
                    window.sensors && window.sensors.track("cut_preview");
                  }}
                >
                  整体预览
                </Button>
                <Button
                  onClick={() => {
                    this.saveConfig(true);
                  }}
                >
                  保存草稿
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    this.setShowCreate(true);
                  }}
                >
                  <span className="ico iconfont icon16pxdaochu" />
                  生成视频
                </Button>
              </div>
            </Header>
            <Content>
              <TemplateContent
                menuId={menuId}
                setOpneLeft={(opneLeft) => {
                  this.setState({ opneLeft });
                }}
                selectedItem={selectedItem}
                setSelectedItem={this.setSelectedItem}
                list={list}
                setList={this.setList}
                config={config}
                setConfig={this.setConfig}
                showDelModal={() => {
                  this.setState({ visible: true });
                }}
              />
            </Content>
            <Footer>
              <TemplateFooter
                duration={config.duration}
                selectedItem={selectedItem}
                setSelectedItem={this.setSelectedItem}
                setList={this.setList}
                materialList={materialList}
                showDelModal={() => {
                  this.setState({ visible: true });
                }}
                showPreviewModal={() => {
                  this.setShowPreviewModal(true);
                }}
              />
            </Footer>
          </Layout>
        </Layout>
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
        <Modal
          wrapClassName="reNameModal"
          visible={reNameModal}
          title="重命名"
          onOk={this.reName}
          onCancel={() => {
            this.setState({ reNameModal: false });
          }}
        >
          <div>
            <span>名称</span>
            <Input
              value={newName}
              onChange={(e) => {
                this.setState({ newName: e.target.value });
              }}
            ></Input>
          </div>
        </Modal>
        <Upload setlocallist={this.setlocallist} />
        {showPreviewModal ? (
          <PreviewModal
            closeVisible={() => {
              this.setShowPreviewModal(false);
            }}
            name={config.name}
            materialList={materialList}
            watermark={headendConfig.watermark}
            backgroundMusic={track.backgroundMusic || null}
            buttons={[
              {
                name: "保存草稿",
                callBack: () => {
                  this.saveConfig(true);
                },
              },
              {
                name: "生成视频",
                type: "primary",
                callBack: () => {
                  this.setShowCreate(true);
                },
              },
            ]}
          />
        ) : null}
        {showCreate ? (
          <CreateModal
            closeVisible={() => {
              this.setShowCreate(false);
            }}
            config={config}
            materialList={materialList}
            watermark={headendConfig.watermark}
            backgroundMusic={track.backgroundMusic || null}
          />
        ) : null}
      </div>
    );
  }
}
