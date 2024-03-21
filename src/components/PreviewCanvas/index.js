import React from "react";
import { Button, Slider } from "antd";
import { getSecond2Minute, requestAnimationFrame } from "@/utils/handy";
import "./index.scss";

let hideHandleBar = ""; // 用于处理播放器handle隐藏的定时器
let videoStateBar = ""; // 用于检测视频是否可播放的定时器
let animationFrameBar = ""; // 用于素材播放的定时器
export default class PreviewCanvas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      materialList: [],
      currentUseItem: {}, // 当前正在播放的素材
      currentTime: 0, // 当前播放的时间
      allduration: 0, // 视频总时长
      isPause: true, // 是否为暂停
    };
  }

  componentWillMount() {
    let _materialList = this.props.materialList;
    if (!_materialList || _materialList.length < 1) return;
    _materialList = _materialList.filter((item) => item && item.asset);
    _materialList = _materialList.map((item, index) => {
      let lastIndex = index - 1;
      let startTime =
        (_materialList[lastIndex] && _materialList[lastIndex].endTime) || 0;
      item["startTime"] = startTime;
      item["endTime"] = startTime + item.durationRange || 0;
      return item;
    });
    let allduration =
      _materialList && _materialList.map((item) => item.durationRange);
    allduration = allduration.reduce((a, b) => a + b);
    this.setState({ materialList: _materialList, allduration });
  }

  componentDidMount() {
    this.canvas.width = 1920;
    this.canvas.height = 1080;
    this.setCurrentTime(0);
    this.hideHandle();
    setTimeout(() => {
      this.play();
    }, 1000);
  }

  componentWillUnmount() {
    videoStateBar && clearTimeout(videoStateBar);
    hideHandleBar && clearTimeout(hideHandleBar);
    this.pauseMedia();
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }
  // 隐藏视频进度条
  hideHandle = () => {
    hideHandleBar = setTimeout(() => {
      this.title && (this.title.style.display = "none");
      this.slider && (this.slider.style.display = "none");
    }, 3000);
  };

  // 播放素材
  play = () => {
    const { isPause, currentUseItem } = this.state;
    const { asset } = currentUseItem;
    if (!asset) return;
    let newIsPause = !isPause;
    this.setState({ isPause: newIsPause });
    if (!newIsPause) {
      asset.type === "video" && this.player.play();
      this.playMedia();
    } else {
      this.pauseMedia();
    }
  };

  // 播放素材
  playMedia = () => {
    animationFrameBar = requestAnimationFrame(async () => {
      const { currentTime, currentUseItem } = this.state;
      const { asset } = currentUseItem;
      if (!asset) return;
      if (asset.type !== "video") {
        await this.setCurrentTime(currentTime + 1 / 60);
      } else {
        if (this.player && this.player.readyState > 2) {
          await this.setCurrentTime(
            this.player.currentTime -
              currentUseItem.startRange +
              currentUseItem.startTime
          );
        }
      }
      this.playMedia();
    });
  };

  // 暂停播放素材
  pauseMedia = () => {
    const { currentUseItem } = this.state;
    const { asset } = currentUseItem;
    if (!asset) return;
    asset.type === "video" && this.player.pause();
    this.audio && this.audio.pause();
    setTimeout(() => {
      cancelAnimationFrame(animationFrameBar);
    });
  };

  // 获取素材在画布上的宽高
  getMediacanvasWH = (
    meidaW,
    mediaH,
    canvasW = this.canvas.width,
    canvasH = this.canvas.height
  ) => {
    let width = meidaW;
    let height = mediaH;
    if (meidaW / mediaH >= canvasW / canvasH) {
      width = canvasW;
      height = (width / meidaW) * mediaH;
    } else {
      height = canvasH;
      width = (height / mediaH) * meidaW;
    }
    return { width, height };
  };

  // 渲染主素材
  renderMedia = async (meidaW, mediaH) => {
    let ctx = (this.canvas && this.canvas.getContext("2d")) || {};
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    let { width, height } = this.getMediacanvasWH(meidaW, mediaH);
    let x = (this.canvas.width - width) / 2;
    let y = (this.canvas.height - height) / 2;
    ctx.drawImage(this.player, x, y, width, height);
    const { watermark } = this.props;
    let watermarkAsset = watermark && watermark.asset;
    // 渲染水印
    if (watermarkAsset) {
      let img = new Image();
      img.src = watermarkAsset.previewUrl;
      // img.onload = () => {
      let x = 0;
      let y = 0;
      let { width, height } = await this.getMediacanvasWH(
        img.width,
        img.height,
        378,
        168
      );
      switch (watermark.pos) {
        case "left_top":
          x = 64;
          y = 64;
          break;
        case "right_top":
          x = this.canvas.width - width - 64;
          y = 64;
          break;
        case "left_bottom":
          x = 64;
          y = this.canvas.height - height - 64;
          break;
        case "right_bottom":
          x = this.canvas.width - width - 64;
          y = this.canvas.height - height - 64;
          break;
        default:
          x = 64;
          y = 64;
      }
      ctx.drawImage(img, x, y, width, height);
      // };
    }
  };

  // 渲染video 判断是否可以播放
  renderVideo = () => {
    if (this.player && this.player.readyState > 2) {
      videoStateBar && clearTimeout(videoStateBar);
      let videoWidth = this.player.videoWidth;
      let videoHeight = this.player.videoHeight;
      this.renderMedia(videoWidth, videoHeight);
    } else {
      videoStateBar = setTimeout(() => {
        this.renderVideo();
      }, 1000);
    }
  };

  // 渲染图片
  renderImg = (url) => {
    let img = new Image();
    img.src = url;
    this.renderMedia(img.width, img.height);
  };

  // 渲染audio
  renderAudio = (value, isProgress) => {
    const { isPause } = this.state;
    const { backgroundMusic } = this.props;
    if (!backgroundMusic) return;
    const { audio } = this;
    const {
      startTime,
      endTime,
      startRange,
      endRange,
      volume,
      fadeIn,
      fadeOut,
    } = backgroundMusic;
    if (!audio) return;
    if (value > endTime && !audio.paused) {
      audio.pause();
      return;
    }
    if (value >= startTime && value <= endTime) {
      isProgress && (audio.currentTime = value - startTime + startRange);
      if (!isPause) {
        // 设置背景音乐的开始时间
        const audioCurrentTime = audio.currentTime;
        if (audioCurrentTime < startRange || audioCurrentTime > endRange) {
          audio.currentTime = startRange;
        }

        // 计算音量淡入淡出
        if (value < startTime + fadeIn) {
          const volumePart = volume / 100 / fadeIn;
          const num = value - startTime;
          audio.volume = Math.min(num * volumePart, volume);
        } else if (value > endTime - fadeOut) {
          const volumePart = volume / 100 / fadeOut;
          const num = endTime - value;
          audio.volume = Math.max(num * volumePart, 0);
        } else {
          audio.volume = (volume || 0) / 100;
        }

        audio.paused && audio.play();
      } else {
        audio.pause();
      }
    }
  };

  // 渲染canvas
  renderCanvas = () => {
    if (!this.canvas) return;
    const { currentUseItem } = this.state;
    let { asset } = currentUseItem;
    if (!asset) return;
    // 渲染视频素材
    if (asset.type === "video") {
      this.renderVideo();
    }
    // 渲染图片素材
    if (asset.type === "image") {
      this.renderImg(asset.previewUrl);
    }
  };

  // 设置当前播放时间
  setCurrentTime = async (value, isProgress) => {
    const { materialList, allduration, currentUseItem } = this.state;
    if (value >= allduration) {
      value = 0;
      await this.play();
    }
    let currentUseItemA =
      materialList &&
      materialList.filter(
        (item) => item.startTime <= value && item.endTime >= value
      );
    let newCurrentUseItem = currentUseItemA[currentUseItemA.length - 1] || {};
    isProgress &&
      this.player &&
      (this.player.currentTime =
        value - newCurrentUseItem.startTime + newCurrentUseItem.startRange);
    await this.setState({
      currentTime: value,
      currentUseItem: newCurrentUseItem,
    });
    const { isPause } = this.state;
    if (currentUseItem.id !== newCurrentUseItem.id) {
      const { player } = this;
      const { asset, volume, startRange } = newCurrentUseItem;
      if (!asset) return;
      if (player && asset.type === "video") {
        player.volume = volume / 100;
        player.currentTime = startRange;
        if (isPause) {
          await this.pauseMedia();
        } else {
          await player.play();
        }
      }
    }
    this.renderCanvas();
    // 播放背景音乐
    this.renderAudio(value, isProgress);
  };

  render() {
    const { closeVisible, name, backgroundMusic, buttons, hideTitle } =
      this.props;
    const { currentUseItem, currentTime, isPause, allduration } = this.state;
    let { asset } = currentUseItem;
    return (
      <React.Fragment>
        <div
          className="previewCanvas-main"
          onMouseEnter={() => {
            hideHandleBar && clearTimeout(hideHandleBar);
            this.title && (this.title.style.display = "flex");
            this.slider.style.display = "flex";
          }}
          onMouseLeave={() => {
            this.hideHandle();
          }}
        >
          {!hideTitle ? (
            <div
              className="previewCanvas-title"
              ref={(el) => (this.title = el)}
            >
              <span>{name || ""}</span>
              <span
                className="ico iconfont icon003guanbi"
                onClick={() => {
                  closeVisible();
                }}
              />
            </div>
          ) : null}
          <canvas
            ref={(el) => {
              this.canvas = el;
            }}
          ></canvas>
          <div className="slider-wrap" ref={(el) => (this.slider = el)}>
            <span
              className={`ico iconfont ${
                isPause ? "icon24pxbofang" : "icon24pxbofangzhong"
              }`}
              onClick={this.play}
            />
            <Slider
              tooltipVisible={false}
              value={currentTime}
              max={allduration}
              min={0}
              step={0.0001}
              onChange={async (value) => {
                // await this.setState({ isPause: true });
                // await this.pauseMedia();
                this.setCurrentTime(value, true);
              }}
            />
            <span>
              {getSecond2Minute(currentTime || 0)} /
              {getSecond2Minute(allduration || 0)}
            </span>
            <div className="previewCanvas-buttons">
              {buttons &&
                buttons.map((item, index) => {
                  return (
                    <Button
                      type={item.type}
                      key={index}
                      onClick={item.callBack}
                    >
                      {item.name}
                    </Button>
                  );
                })}
            </div>
          </div>
        </div>
        {asset && asset.type === "video" ? (
          <video
            className="previewCanvas-palyer"
            src={asset && asset.previewUrl}
            preload="auto"
            ref={(el) => (this.player = el)}
          />
        ) : null}
        {asset && asset.type === "image" ? (
          <img
            className="previewCanvas-palyer"
            src={asset && asset.previewUrl}
            ref={(el) => (this.player = el)}
          />
        ) : null}
        {backgroundMusic && backgroundMusic.asset ? (
          <audio
            className="previewCanvas-palyer"
            src={backgroundMusic.asset.previewUrl}
            ref={(el) => (this.audio = el)}
          />
        ) : null}
      </React.Fragment>
    );
  }
}
