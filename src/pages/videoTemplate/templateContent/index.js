import React from "react";
import { Slider, Popover, Switch, Checkbox } from "antd";
import { getSecond2Minute } from "@/utils/handy";
import TemplateContentLeft from "../templateContentLeft";
import open from "@/assets/images/open.svg";
import close from "@/assets/images/close.svg";
import "./index.scss";

let imagTimeBa = "";
export default class templateContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0, // 当前素材播放的真实时间
      volume: 0,
      mute: false,
      isUseAll: false, // 音量是否应用到全部
      isPause: true, // 是否暂停
      width: 0, // 预览框的宽度
      height: 0, // 预览框的高度
    };
  }

  componentWillMount() {
    window.onresize = () => {
      this.changeHeight();
    };
  }

  componentDidMount() {
    document.onkeydown = (e) => {
      if (e.keyCode == 32) {
        this.play();
      }
    };
    setTimeout(() => {
      this.changeHeight();
      this.setImgStyle();
      this.setState({ volume: this.props.selectedItem.volume || 0 });
    });
  }

  shouldComponentUpdate(newProps, newState) {
    const { selectedItem } = this.props;
    const _selectedItem = newProps.selectedItem || {};
    if (JSON.stringify(_selectedItem) !== JSON.stringify(selectedItem)) {
      this.clearTimeBar();
      let _currentTime = _selectedItem.startRange;
      let _volume = _selectedItem.volume;
      if (_currentTime !== selectedItem.startRange) {
        this.setState({ currentTime: _currentTime }, () => {
          this.player && (this.player.currentTime = _currentTime);
        });
      }
      if (_volume !== selectedItem.volume) {
        this.setState({ volume: _volume });
      }
      setTimeout(() => {
        this.setImgStyle();
      });
    }
    return true;
  }

  componentWillUnmount() {
    window.onresize = () => {};
    this.clearTimeBar();
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }

  changeHeight() {
    let preview = document.getElementsByClassName("templateContent-preview")[0];
    let playBox = document.getElementsByClassName("templateContent-playBox")[0];
    if (!preview) return;
    preview.style.width = "100%";
    playBox.style.width = "100%";
    let width = preview.clientWidth;
    width = width.toFixed(2);
    let height = (width / 16) * 9;
    height = height.toFixed(2);
    let boxHeight = this.previewBox && this.previewBox.clientHeight - 20 - 66;
    if (height > boxHeight) {
      height = boxHeight;
      width = (height / 9) * 16;
      width = width.toFixed(2);
      preview.style.width = width + "px";
      playBox.style.width = width + "px";
    }
    preview.style.height = height + "px";
    this.setState({ width, height }, () => {
      this.setImgStyle();
    });
  }

  // 设置图片的宽高
  setImgStyle = () => {
    const { selectedItem } = this.props;
    const { width, height } = this.state;
    if (selectedItem.asset) {
      const { asset } = selectedItem;
      if (asset.type === "image") {
        var image = new Image();
        image.src = asset.previewUrl;
        image.onload = () => {
          let scale = image.width / image.height > width / height;
          let imageWidth = "auto";
          let imageHeight = "auto";
          if (scale) {
            imageWidth = width + "px";
            imageHeight = "auto";
          } else {
            imageWidth = "auto";
            imageHeight = height + "px";
          }
          this.img.style.width = imageWidth;
          this.img.style.height = imageHeight;
        };
      }
    }
    this.forceUpdate();
  };

  //全屏
  fullScreen = () => {
    let element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

  //退出全屏
  exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  // 设置音量
  setVolume = (value) => {
    const { isUseAll } = this.state;
    this.setState({ volume: value }, () => {
      let { selectedItem } = this.props;
      selectedItem = Object.assign({}, selectedItem);
      selectedItem.volume = value;
      this.props.setSelectedItem(selectedItem);
      this.player && (this.player.volume = value / 100);
      if (isUseAll) {
        this.useAll();
      }
    });
  };

  // 声音应用到全部
  useAll = () => {
    let { list, setList } = this.props;
    const { volume } = this.state;
    list = list.map((item) => {
      item.volume = volume;
      return item;
    });
    // 埋点
    window.sensors && window.sensors.track("cut_all_modify_volume");
    setList(list);
  };

  // 设置播放时间
  setCurrentTime = (value) => {
    const { selectedItem } = this.props;
    const asset = selectedItem.asset || {};
    const { startRange } = selectedItem;
    const _currentTime = value + startRange;
    if (asset.type === "video") {
      this.player.currentTime = _currentTime;
      this.player.pause();
    }
    this.setState({ currentTime: _currentTime });
  };

  // video播放中回调
  timeUpdate = () => {
    const { selectedItem } = this.props;
    const { endRange } = selectedItem;
    const _currentTime = this.player.currentTime;
    if (_currentTime >= endRange) {
      this.player.currentTime = endRange;
      this.end();
    } else {
      this.setState({
        currentTime: _currentTime,
      });
    }
  };

  // 视频播放结束
  end = () => {
    let { selectedItem } = this.props;
    const _startRange = selectedItem.startRange;
    this.setState(
      {
        currentTime: _startRange,
        isPause: true,
      },
      () => {
        this.player.pause();
        this.player.currentTime = _startRange;
      }
    );
  };

  clearTimeBar = () => {
    clearInterval(imagTimeBa);
    imagTimeBa = "";
    this.setState({ isPause: true });
  };

  // 点击播放按钮
  play = () => {
    const { volume, isPause } = this.state;
    const { selectedItem } = this.props;
    const asset = selectedItem.asset || {};
    const { endRange, startRange } = selectedItem;
    this.setState({ isPause: !isPause }, () => {
      // 埋点
      window.sensors &&
        window.sensors.track("cut_play", {
          fileName: asset.name,
        });
      const { isPause } = this.state;
      if (asset.type === "video") {
        if (this.player.paused) {
          this.player.volume = volume / 100;
          this.player.play();
        } else {
          this.player.pause();
        }
      }
      if (asset.type === "image") {
        if (isPause) {
          this.clearTimeBar();
        } else {
          if (!imagTimeBa) {
            imagTimeBa = setInterval(() => {
              const { currentTime } = this.state;
              if (currentTime >= endRange) {
                this.clearTimeBar();
                this.setState({ currentTime: startRange });
              } else {
                this.setState({ currentTime: currentTime + 1 / 60 });
              }
            }, 1000 / 60);
          }
        }
      }
    });
  };

  render() {
    const { currentTime, volume, mute, isPause } = this.state;
    const { selectedItem, menuId, config, setConfig } = this.props;
    const { asset, startRange, isConfig, durationRange } = selectedItem;
    // 是否全屏
    let isFullScreen = !!(
      document.fullscreen ||
      document.mozFullScreen ||
      document.webkitIsFullScreen ||
      document.webkitFullScreen ||
      document.msFullScreen
    );
    // 显示的当前播放时间不同于video的当前时间
    const showCurrentTime = currentTime - startRange;
    const content = (
      <div className="templateContent-volume">
        <div>
          <span>音量</span>
          <Slider
            min={0}
            max={100}
            step={1}
            value={volume}
            onChange={(value) => {
              if (mute) return;
              // 埋点
              window.sensors && window.sensors.track("cut_modify_volume");
              this.setVolume(value);
            }}
          />
        </div>
        <div>
          <div>
            <label>静音</label>
            <Switch
              onChange={(value) => {
                this.setState({ mute: value }, () => {
                  value && this.setVolume(0);
                });
              }}
            />
          </div>
          <Checkbox
            onChange={(e) => {
              this.setState({ isUseAll: e.target.checked });
              if (e.target.checked) {
                this.useAll();
              }
            }}
          >
            应用到全部素材
          </Checkbox>
        </div>
      </div>
    );
    return (
      <div className="templateContent-wrap">
        <div
          className="templateContent-left"
          style={{ width: 418 }}
          ref={(el) => (this.left = el)}
        >
          <TemplateContentLeft
            menuId={menuId}
            config={config}
            setConfig={setConfig}
          />
        </div>
        <div className="templateContent-right">
          <ul className="templateContent-top">
            {!isConfig ? (
              <React.Fragment>
                {asset && asset.type === "video" ? (
                  <Popover
                    placement="bottomLeft"
                    content={content}
                    trigger="click"
                  >
                    <li>
                      <span className="ico iconfont iconProperty1iconProperty216pxProperty3shengyin" />
                      <span>声音</span>
                    </li>
                  </Popover>
                ) : null}
                <li onClick={this.props.showDelModal}>
                  <span className="ico iconfont iconProperty1IconProperty216pxProperty3shanchu" />
                  <span>删除</span>
                </li>
              </React.Fragment>
            ) : null}
          </ul>
          <div className="templateContent-view">
            <div
              onClick={() => {
                if (this.left.style.width == "418px") {
                  this.left.style.width = "0";
                  this.props.setOpneLeft(false);
                } else {
                  this.left.style.width = "418px";
                  this.props.setOpneLeft(true);
                }
                setTimeout(() => {
                  this.changeHeight();
                }, 300);
              }}
            >
              <img
                src={
                  this.left && this.left.style.width == "418px" ? close : open
                }
              />
            </div>

            <div
              className="templateContent-main"
              ref={(el) => (this.previewBox = el)}
            >
              <div>
                <div className="templateContent-preview">
                  {asset && asset.type === "video" ? (
                    <video
                      ref={(el) => (this.player = el)}
                      src={asset.previewUrl}
                      onTimeUpdate={this.timeUpdate}
                      onEnded={this.end}
                    />
                  ) : null}
                  {asset && asset.type === "image" ? (
                    <img src={asset.previewUrl} ref={(el) => (this.img = el)} />
                  ) : null}
                  <Slider
                    value={showCurrentTime}
                    max={durationRange}
                    step={0.0001}
                    onChange={this.setCurrentTime}
                    tooltipVisible={false}
                  />
                </div>
                <div className="templateContent-playBox">
                  <span className="templateContent-tiem">
                    <span>{getSecond2Minute(showCurrentTime)}</span>/
                    {getSecond2Minute(durationRange || 0)}
                  </span>
                  <div className="templateContent-play" onClick={this.play}>
                    <span
                      className={`ico iconfont ${
                        isPause ? "icon24pxbofang" : "icon24pxbofangzhong"
                      }`}
                    />
                  </div>
                  {isFullScreen ? (
                    <span
                      className="ico iconfont icon16pxxiaochuang"
                      onClick={this.exitFullscreen}
                    />
                  ) : (
                    <span
                      className="ico iconfont icon16pxquanping"
                      onClick={this.fullScreen}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
