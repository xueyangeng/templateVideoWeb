import React from "react";
import { Slider, Popover, Button } from "antd";
import { getSecond2Minute } from "@/utils/handy";
import "./index.scss";
let onkeydownFn = () => {};
let onResize = () => {};
export default class TimeAxis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      duration: 0, // 视频总时长
      width: 0, // 时间轴的宽度
      offsetLeft: 0, // 时间轴相当于整个页面的偏移
      timeArr: [], // 每个大格中小格时间数组
      sliderValue: 0,
      sliderValueMax: 4, // 放大轨道默认最大值
      timeRules: [
        5400, 3600, 2400, 1200, 600, 300, 150, 120, 90, 60, 40, 30, 20, 15, 10,
        5, 3, 2, 1,
      ], // 基础的轨道刻度数组
      timeRulesSurplus: [], // 真实使用的轨道刻度数组
      startTime: 0, // 入点
      endTime: 10, // 出点
      accessPointWidth: 0, //  出入点宽度
      accessPointLeft: 0, //  出入点的左侧偏移
      isPreview: false, // 是否为预览
    };
  }

  componentDidMount() {
    onResize = window.onresize;
    onkeydownFn = document.onkeydown;
    window.onresize = () => {
      this.getPageOffsetLeft();
      onResize();
    };
    const { player } = this.props;
    this.setState({ player }, () => {
      const { player } = this.state;
      player.addEventListener("timeupdate", this.timeUpdate);
      player.addEventListener("progress", () => {
        const { timeArr } = this.state;
        if (timeArr && timeArr.length == 0) {
          this.initTimeAxis();
        }
      });
    });
  }

  componentWillUnmount() {
    document.onkeydown = onkeydownFn;
    window.onresize = onResize;
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }

  // 获取整体页面的偏移
  getPageOffsetLeft = () => {
    // let modalOffsetLeft =
    //   (document.getElementsByClassName("ant-modal")[0] &&
    //     document.getElementsByClassName("ant-modal")[0].offsetLeft) ||
    //   0;
    let modalOffsetLeft =
      this.timeAxis.offsetParent.offsetParent.offsetLeft || 0;
    let timeAxisOffsetLeft = (this.timeAxis && this.timeAxis.offsetLeft) || 0;
    let offsetLeft = modalOffsetLeft + timeAxisOffsetLeft + 16;
    this.setState({ offsetLeft });
  };

  // 初始化时间轴 在视频已经开始加载的时候
  initTimeAxis = () => {
    const { player } = this.state;
    document.onkeydown = (e) => {
      this.setState({ isPreview: false });
      if (e.target.nodeName != "TEXTAREA" && e.target.nodeName != "INPUT") {
        switch (e.code) {
          case "Space":
            e.preventDefault();
            if (player.paused) {
              player.play();
            } else {
              player.pause();
            }
            break;
          case "BracketLeft": // 左括号 入点
            e.preventDefault();
            this.pointHandel("in");
            break;
          case "BracketRight": // 右括号 出点
            e.preventDefault();
            this.pointHandel("out");
            break;
          case "ArrowLeft": // 后退 一帧
            e.preventDefault();
            this.frameHandel("-");
            break;
          case "ArrowRight": // 前进 一帧
            e.preventDefault();
            this.frameHandel("+");
            break;
          default:
            break;
        }
      }
    };
    let width = player.clientWidth - 16 * 2 || 0;
    let duration = player.duration || 0;
    this.getPageOffsetLeft();
    this.setState(
      {
        duration,
        width,
        startTime: 0,
        endTime: duration,
        accessPointWidth: width,
        accessPointLeft: 0,
      },
      () => {
        this.initRenderTimeAxis();
      }
    );
  };

  // 设置真实使用的轨道刻度数组
  setTimeRulesSurplus = (bigTimeDuration) => {
    const { timeRules } = this.state;
    let s = 1;
    if (bigTimeDuration > timeRules[timeRules.length - 1]) {
      for (let i = 0; i < timeRules.length; i++) {
        if (timeRules[i + 1]) {
          if (
            bigTimeDuration > timeRules[i + 1] &&
            bigTimeDuration <= timeRules[i]
          ) {
            s = timeRules[i];
          }
        }
      }
    }
    const timeRulesSurplus = timeRules.slice(timeRules.indexOf(s));
    this.setState({
      timeRulesSurplus,
      sliderValueMax: timeRulesSurplus.length - 1,
    });
  };

  // 初始化渲染时间轴
  initRenderTimeAxis = () => {
    const { duration } = this.state;
    let bigTimeDuration = duration / 5; // 每一个大格的时间
    this.setTimeRulesSurplus(bigTimeDuration);
    let timeArr = new Array(5);
    for (let i = 0; i < timeArr.length; i++) {
      timeArr[i] = getSecond2Minute(bigTimeDuration * i);
    }
    this.setState({ timeArr });
  };

  // 轨道放大缩小  渲染时间轴
  speedHandel() {
    const { sliderValue, timeRulesSurplus, duration } = this.state;
    if (sliderValue < 0) return;
    // 每1大格10小格的时间
    let bigTimeDuration = timeRulesSurplus[sliderValue] || 1;
    if (bigTimeDuration > duration / 5) bigTimeDuration = duration / 5;
    // 可以放多少10格
    const LatticeNumber = Math.ceil(duration / bigTimeDuration);
    let timeArr = new Array(LatticeNumber);
    for (let i = 0; i < timeArr.length; i++) {
      timeArr[i] = getSecond2Minute(bigTimeDuration * i);
    }
    // 每一个大格的宽度是136px
    let width = (duration / bigTimeDuration) * 136;
    this.setState({ timeArr, width }, () => {
      this.timeUpdate();
      this.pointHandel();
    });
  }

  // 绑定指针拖拽事件
  setDrag = () => {
    document.onmouseup = (ev) => {
      document.onmousemove = null;
      document.onmouseup = null;
      this.setDragHandle(ev);
    };
    document.onmousemove = (ev) => {
      let classStr = ev.target.classList.value;
      if (
        classStr.indexOf("timeAxis-line") !== -1 ||
        classStr.indexOf("icon066shipinzhizhenhuakuai") !== -1
      ) {
        this.setDragHandle(ev);
      }
    };
  };

  // 指针拖拽的处理
  setDragHandle = (ev) => {
    const { offsetLeft, duration, width } = this.state;
    let left = ev.clientX;
    left = left - offsetLeft + this.timeAxis.scrollLeft;
    this.setCurrentTime((duration / width) * left);
  };

  // video 时间变化 更新指针位置
  timeUpdate = () => {
    const { player, duration, width, isPreview, endTime } = this.state;
    if (isPreview && player.currentTime >= endTime) {
      player.currentTime = endTime;
      player.pause();
    }
    if (this.line) {
      this.line.style.left =
        (width / duration) * player.currentTime + 16 + "px";
    }
  };

  // 设置视频当前播放时间 秒
  setCurrentTime = (time) => {
    const { player, width, duration } = this.state;
    player.currentTime = time;
    player.pause();
    if (this.line) {
      this.line.style.left = (width / duration) * time + 16 + "px";
    }
    this.setState({ isPreview: false });
  };

  // 设置出点和入点
  pointHandel(type) {
    let {
      player,
      width,
      duration,
      startTime,
      endTime,
      accessPointWidth,
      accessPointLeft,
    } = this.state;
    let currentTime = player.currentTime;
    // 入点
    if (type === "in") {
      startTime = currentTime;
      if (startTime > endTime - 1) {
        endTime = startTime + 1;
        endTime = Math.min(endTime, duration);
      }
    }
    // 出点
    if (type === "out") {
      endTime = currentTime;
      if (endTime < startTime + 1) {
        startTime = endTime - 1;
        startTime = Math.max(startTime, 0);
      }
    }
    accessPointWidth = ((endTime - startTime) / duration) * width;
    accessPointLeft = (startTime / duration) * width;
    this.setState({ startTime, endTime, accessPointWidth, accessPointLeft });
  }

  // 预览
  preview = () => {
    const { player, startTime } = this.state;
    player.currentTime = startTime;
    player.play();
    this.setState({ isPreview: true });
  };

  // 前进后退帧
  frameHandel(type) {
    const { player } = this.state;
    let currentTime = player.currentTime;
    // 前进一帧
    if (type === "+") {
      currentTime += 1 / 25;
    }
    // 后退一帧
    if (type === "-") {
      currentTime -= 1 / 25;
    }
    this.setCurrentTime(currentTime);
  }

  // 绑定出入点拖拽事件
  setPointDrag = (type) => {
    document.onmouseup = (ev) => {
      document.onmousemove = null;
      document.onmouseup = null;
      this.setPointDragHandle(ev, type);
    };
    document.onmousemove = (ev) => {
      let classStr = ev.target.classList.value;
      if (
        classStr.indexOf("timeAxis-point") !== -1 ||
        classStr.indexOf("icon128chaitiaoxuankuang") !== -1
      ) {
        this.setPointDragHandle(ev, type);
      }
    };
  };

  // 出入点拖拽的处理
  setPointDragHandle(ev, type) {
    const { offsetLeft, duration, width } = this.state;
    let left = ev.clientX;
    left = left - offsetLeft + this.timeAxis.scrollLeft;
    this.setCurrentTime((duration / width) * left);
    setTimeout(() => {
      this.pointHandel(type);
    });
  }

  // 确定裁剪
  submit = () => {
    const { startTime, endTime } = this.state;
    this.props.cut(startTime, endTime);
  };

  render() {
    const {
      duration,
      width,
      offsetLeft,
      timeArr,
      sliderValue,
      sliderValueMax,
      startTime,
      endTime,
      accessPointWidth,
      accessPointLeft,
    } = this.state;
    return (
      <React.Fragment>
        <div
          className="timeAxis-warp"
          ref={(timeAxis) => (this.timeAxis = timeAxis)}
        >
          <div>
            <div className="timeAxis-main" style={{ width: width }}>
              <div
                className="timeAxis-line"
                id="line"
                ref={(line) => (this.line = line)}
                onMouseDown={() => {
                  this.setDrag();
                }}
              >
                <span className="ico iconfont icon066shipinzhizhenhuakuai"></span>
              </div>
              <div
                ref={(ruler) => (this.ruler = ruler)}
                onClick={(event) => {
                  let left =
                    event.pageX - offsetLeft + this.timeAxis.scrollLeft;
                  this.setCurrentTime((duration / width) * left);
                }}
              >
                {timeArr &&
                  timeArr.map((item, index) => {
                    let smallGridArr = new Array(10);
                    for (let i = 0; i < smallGridArr.length; i++) {
                      smallGridArr[i] = i;
                    }
                    return (
                      <div key={index} className="timeAxis-bigGrid">
                        <div> {item}</div>
                        {smallGridArr.map((s, i) => {
                          return <i key={i} className="timeAxis-smallGrid" />;
                        })}
                        <i />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="timeAxis-content">
              <div
                className="timeAxis-accessPoint"
                style={{ width: accessPointWidth, left: accessPointLeft + 16 }}
              >
                {getSecond2Minute(endTime - startTime)}
                <div
                  className="timeAxis-point in"
                  onMouseDown={() => {
                    this.setPointDrag("in");
                  }}
                >
                  <span className="ico iconfont icon128chaitiaoxuankuang" />
                </div>
                <div
                  className="timeAxis-point out"
                  onMouseDown={() => {
                    this.setPointDrag("out");
                  }}
                >
                  <span className="ico iconfont icon128chaitiaoxuankuang" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="timeAxis-handle">
          <div className="slider-wrap">
            <i
              className="ico iconfont icon055suoxiao"
              onClick={() => {
                let sliderValue = this.state.sliderValue - 1;
                if (sliderValue < 0) return;
                this.setState({ sliderValue }, () => {
                  this.speedHandel();
                });
              }}
            ></i>
            <Slider
              value={sliderValue}
              min={0}
              max={sliderValueMax}
              tooltipVisible={false}
              onChange={(value) => {
                this.setState({ sliderValue: value }, () => {
                  this.speedHandel();
                });
              }}
            ></Slider>
            <i
              className="ico iconfont icon056fangda"
              onClick={() => {
                let sliderValue = this.state.sliderValue + 1;
                if (sliderValue > sliderValueMax) return;
                if (sliderValue > sliderValueMax) sliderValue = sliderValueMax;
                this.setState({ sliderValue }, () => {
                  this.speedHandel();
                });
              }}
            ></i>
          </div>
          <Popover
            placement="top"
            content={
              <div className="shortcut">
                <p>
                  前进一帧
                  <i className="ico iconfont icon061qianjinyizhen"></i>
                </p>
                <p>
                  后退一帧
                  <i className="ico iconfont icon062houtuiyizhen"></i>
                </p>
                <p>
                  插入入点
                  <i className="ico iconfont icon048charurudian"></i>
                </p>
                <p>
                  插入出点
                  <i className="ico iconfont icon049charuchudian"></i>
                </p>
                <p>
                  播放/暂停
                  <i>空格键</i>
                </p>
              </div>
            }
          >
            <span className="shortcut-warp">
              <i className="ico iconfont icon067kuaijiejian"></i>
              快捷键
            </span>
          </Popover>
          <Button
            size="small"
            onClick={() => {
              this.pointHandel("in");
            }}
          >
            入点
          </Button>
          <Button
            size="small"
            onClick={() => {
              this.pointHandel("out");
            }}
          >
            出点
          </Button>
          <Button size="small" onClick={this.preview}>
            预览
          </Button>
          <Button type="primary" size="small" onClick={this.submit}>
            确定
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
