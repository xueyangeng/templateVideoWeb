import React from "react";
import { Button, Slider, Popover } from "antd";
import { getSecond2Minute } from "@/utils/handy";
import "./index.scss";

export default class Split extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0, // 视频时长
      defaultWidth: 0, // 默认宽度
      fixedSizeWidth: 0, // 固定宽度，以此为基数
      currentTime: 0, // 视频进度 格式化之前
      LatticeNumber: 0,
      iWidth: 0,
      v2: 10, // 初始化结束时间
      selectedTime: 0, // 视频选择时长
      timeRules: [
        5400, 3600, 2400, 1200, 600, 300, 150, 120, 90, 60, 40, 30, 20, 15, 10,
        5, 3, 2, 1,
      ],
      timeRulesSurplus: [],
      max: 6, // 介入条默认最大值
      sliderValue: 0,
      startTime: 0,
      endTime: 10,
      previewState: false, // 是否预览
      videoWidth: 0,
    };
  }
  componentDidMount() {
    this.addEnvent();
    document.addEventListener("mousedown", (e) => {
      if (e.target.classList.contains("el-slider__button-wrapper")) {
        this.setState({ currentTime: this.props.player.currentTime() || 0 });
      }
    });
    this.setState({ tmpSliderValue: 0 }, () => {
      this.setState({ defaultWidth: this.$refs.split.clientWidth - 32 - 30 });
    });
  }

  componentWillUnmount() {
    this.removeEnvent();
    // 重写组件的setState方法，直接返回空 此方法处理setState异步
    this.setState = (state, callback) => {
      return;
    };
  }
  _time_posi() {
    const { defaultWidth, duration, v2 } = this.state;
    return (defaultWidth / duration) * v2;
  }
  _time_tran() {
    return (s) => {
      return Number.parseInt(s * 100) / 100;
    };
  }
  _time_version() {
    const { defaultWidth, duration } = this.state;
    return (w) => {
      return Number.parseInt((w / (defaultWidth / duration)) * 100) / 100;
    };
  }
  _time_o() {
    return (o) => {
      const { defaultWidth, duration } = this.state;
      return (defaultWidth / duration) * o;
    };
  }
  changeHandle(e) {
    const { tmpSliderValue } = this.state;
    if (e > tmpSliderValue) {
      this.speedHandel("+");
    } else {
      this.speedHandel("-");
    }
    this.setState({ tmpSliderValue: e });
  }
  changeFnHandel(o) {
    const _this = this;
    const e = window.event;
    let init = {
      mX: o.target.offsetLeft,
      lX: this.mea_l.offsetLeft,
      rX: this.mea_r.offsetLeft,
      dX: e.clientX,
    };
    document.onmousemove = function (e) {
      let dist = e.clientX - init.dX;
      let [len, l_x, r_x] = [init.mX + dist, init.lX + 15, init.rX];
      switch (o.target.id) {
        case "mea_l":
          l_x = init.lX + dist;
          move("l");
          break;
        case "mea_r":
          r_x = init.rX + dist;
          move();
          break;
        case "meaBox":
          l_x = init.lX + dist;
          r_x = init.rX + dist;
          move2();
          break;
        default:
          break;
      }
      function move(a) {
        let t = _this._time_version(r_x - l_x);
        let r = t > 1;
        if (r_x > l_x && len >= 0 && len <= _this.defaultWidth && r) {
          if (a) {
            len = len - 15;
          } else {
            _this.mea_l.style.left = l_x - 15 + "px";
          }
          o.target.style.left = len + "px";
          _this.meaBox.style.left = l_x + "px";
          _this.meaBox.style.width = r_x - l_x + "px";
          _this.setState({
            selectedTime: t,
            startTime: _this._time_version(l_x),
            endTime: _this._time_version(r_x),
          });
          if (a) {
            _this.setState({
              currentTime: _this.state.startTime,
            });
          } else {
            _this.setState({
              currentTime: _this.state.endTime,
            });
          }
        }
      }

      function move2() {
        if (l_x >= -15 && r_x <= _this.defaultWidth) {
          o.target.style.left = len + "px";
          _this.mea_l.style.left = l_x + "px";
          _this.mea_r.style.left = r_x + "px";
          let u = _this._time_version(len);
          _this.setState({
            startTime: _u,
            endTime: Number.parseInt((u + _this.selectedTime) * 100) / 100,
          });
          _this.props.player.currentTime(u);
        }
      }
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }

  handel() {
    const { timeRules, duration } = this.state;
    // 放置的格数 6
    // 每格的时长 arr
    let s = 1;
    const arr = timeRules;
    const e = duration / 6;
    if (e > arr[arr.length - 1]) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1]) {
          if (e > arr[i + 1] && e <= arr[i]) {
            s = arr[i];
          }
        }
      }
    }
    const timeRulesSurplus = arr.slice(arr.indexOf(s));
    const { remainder, iWidth } = this.cumHandel(null, s, true);
    this.setState({
      LatticeNumber: remainder,
      iWidth: iWidth,
      timeRulesSurplus: timeRulesSurplus,
      max: timeRulesSurplus.length - 1,
      _tmie_s: s,
      _time_val: s,
    });
  }
  cumHandel(sliderValue, _time, init, iiWidth = 0) {
    const { duration, timeRulesSurplus, fixedSizeWidth } = this.state;
    // 每10格的时间
    const time = _time ? _time : timeRulesSurplus[sliderValue];
    // 可以放多少10格
    const LatticeNumber = parseInt(duration / time);
    // 截取剩余小数
    const sy = duration - LatticeNumber * time;
    // 剩余占的小格数
    const syval = (duration / time - Number.parseInt(duration / time)) * 10;
    // 是否剩余 0
    const remainder = sy !== 0 ? LatticeNumber + 1 : LatticeNumber;
    // 计算宽度 每10格的宽度
    const iWidth = init
      ? (fixedSizeWidth / (LatticeNumber * 10 + syval)) * 10
      : 10 * iiWidth;

    // 总宽度
    const defaultWidth = LatticeNumber * iWidth + syval * iiWidth;

    return {
      remainder,
      defaultWidth,
      LatticeNumber,
      iWidth,
    };
  }
  speedHandel(e) {
    let {
      tmpSliderValue,
      selectedTime,
      startTime,
      timeRulesSurplus,
      fixedSizeWidth,
    } = this.state;
    let sliderValue = tmpSliderValue;
    if (e === "+") {
      if (sliderValue < timeRulesSurplus.length - 1) {
        sliderValue++;
        const { remainder, defaultWidth, iWidth } = this.cumHandel(
          sliderValue,
          null,
          null,
          13
        );
        this.setState(
          {
            sliderValue,
            LatticeNumber: remainder,
            defaultWidth: defaultWidth,
            iWidth: iWidth,
            _time_val: timeRulesSurplus[sliderValue],
          },
          () => {
            this.setting("meaBox", selectedTime, "width");
            this.setting("meaBox", startTime);
            this.setting("mea_l", startTime, "left", 15);
            this.setting("mea_r", startTime + selectedTime);
          }
        );
      }
    } else {
      if (sliderValue > 0) {
        sliderValue--;
        if (sliderValue == 0) {
          const { remainder, iWidth } = this.cumHandel(
            null,
            this._tmie_s,
            true
          );
          this.setState(
            {
              sliderValue,
              LatticeNumber: remainder,
              iWidth: iWidth,
              defaultWidth: fixedSizeWidth,
              _time_val: timeRulesSurplus[sliderValue],
            },
            () => {
              this.setting("meaBox", selectedTime, "width");
              this.setting("meaBox", startTime);
              this.setting("mea_l", startTime, "left", 15);
              this.setting("mea_r", startTime + selectedTime);
            }
          );
        } else {
          const { remainder, defaultWidth, iWidth } = this.cumHandel(
            this.sliderValue,
            null,
            null,
            13
          );
          this.setState(
            {
              sliderValue,
              LatticeNumber: remainder,
              iWidth: iWidth,
              defaultWidth: defaultWidth,
              _time_val: timeRulesSurplus[sliderValue],
            },
            () => {
              this.setting("meaBox", selectedTime, "width");
              this.setting("meaBox", startTime);
              this.setting("mea_l", startTime, "left", 15);
              this.setting("mea_r", startTime + selectedTime);
            }
          );
        }
      }
    }
  }
  preinHandel(arg) {
    this.props.player.pause();
    this.setState({ currentTime: this.props.player.currentTime() });
    const { currentTime, duration, endTime } = this.state;
    if (arg === 0) {
      let startTime = currentTime;
      if (startTime + 1 > duration) {
        startTime = duration - 1;
        this.setState({ endTime: this.duration });
      } else {
        this.setState({ endTime: Math.max(endTime, startTime + 1) });
      }
    } else {
      let endTime = currentTime;
      if (endTime < 1) {
        this.setState({ startTime: 0, endTime: 1 });
      } else {
        this.setState({
          startTime: Math.min(startTime, endTime - 1),
        });
      }
    }
    this.setState({
      selectedTime: this._time_tran(this.state.endTime - this.state.startTime),
    });
    this.setting("meaBox", this.state.endTime - this.state.startTime, "width");
    this.setting("meaBox", this.state.startTime);
    this.setting("mea_l", this.state.startTime, "left", 15);
    this.setting("mea_r", this.state.endTime);
  }
  previewBtn() {
    const { startTime } = this.state;
    this.props.player.currentTime(startTime);
    this.setState({ previewState: true });
    this.props.player.play();
  }
  timeUpdate(e) {
    const { duration, previewState, endTime } = this.state;
    let currentTime = this.props.player.currentTime();
    this.slider.$el.querySelector(".el-slider__bar").style.width =
      (currentTime / duration) * 100 + "%";
    this.slider.$el.querySelector(".el-slider__button-wrapper").style.left =
      (currentTime / duration) * 100 + "%";
    if (previewState && currentTime >= endTime) {
      this.props.player.pause();
      this.props.player.currentTime(endTime);
      this.setState({ previewState: false });
    }
  }
  // 播放回调
  playerPlay(e) {
    this.setState({ playStatus: "play" });
  }
  // 播放暂停回调
  playerPause(e) {
    this.setState({ playStatus: "pause" });
  }
  setting(c, c1, c2 = "left", num = 0) {
    return (this[c].style[c2] = this._time_o(c1) - num + "px");
  }
  input(e) {
    if (this.props.player) {
      this.props.player.play();
      this.props.player.currentTime(e);
      this.props.player.pause();
    }
  }
  submit() {}
  addEnvent() {
    const timeFun = (flag) => {
      this.timer = setTimeout(() => {
        if (this.keydown) {
          if (flag == "+") {
            this.setState({
              currentTime: this.props.player.currentTime() + 0.04,
            });
          } else {
            this.setState({
              currentTime: this.props.player.currentTime() - 0.04,
            });
          }
          timeFun(flag);
        } else {
          clearTimeout(this.timer);
        }
      }, 300);
    };
    document.onkeydown = (e) => {
      const { playStatus } = this.state;
      if (e.target.nodeName != "TEXTAREA" && e.target.nodeName != "INPUT") {
        switch (e.code) {
          case "Space":
            e.preventDefault();
            if (playStatus === "play") {
              this.props.player.pause();
            } else {
              this.props.player.play();
            }
            break;
          case "BracketLeft": // 左括号
            e.preventDefault();
            this.preinHandel(0);
            break;
          case "BracketRight": // 右括号
            e.preventDefault();
            this.preinHandel(1);
            break;
          case "ArrowLeft": // 后退
            e.preventDefault();
            this.keydown = true;
            this.setState({
              currentTime: this.props.player.currentTime() - 0.04,
            });
            timeFun("-");
            break;
          case "ArrowRight": // 前进
            e.preventDefault();
            this.keydown = true;
            this.setState({
              currentTime: this.props.player.currentTime() + 0.04,
            });
            timeFun("+");
            break;
          default:
            break;
        }
      }
    };
    document.onkeyup = (e) => {
      if (e.code == "ArrowLeft" || e.code == "ArrowRight") {
        e.preventDefault();
        this.keydown = false;
      }
    };
  }
  removeEnvent() {
    document.onkeydown = null;
    document.onkeyup = null;
  }

  render() {
    const {
      duration,
      _time_val,
      videoWidth,
      defaultWidth,
      currentTime,
      LatticeNumber,
      selectedTime,
      sliderValue,
    } = this.state;
    return (
      <div
        className="split"
        style={{ width: videoWidth + "px", maxWidth: "100%" }}
        ref={(el) => (this.split = el)}
      >
        <div className="common-wrapper">
          <div className="scale-pointer-box" style={`width:${defaultWidth}px`}>
            <Slider
              value={currentTime}
              max={duration}
              step={0.000001}
              tooltipVisible={false}
              ref={(el) => (this.slider = el)}
              onChange={this.input}
            ></Slider>
          </div>
          <div className="scale-box-wrapper" style={`width:${defaultWidth}px`}>
            {LatticeNumber &&
              LatticeNumber.map((item, index) => {
                let time = _time_val * (item - 1);
                let smallGridArr = new Array(11);
                for (let i = 0; i < smallGridArr.length; i++) {
                  smallGridArr[i] = i;
                }
                return (
                  <div className="item-wrapper" key={index}>
                    <span className="span">{getSecond2Minute(time)}</span>
                    <div
                      className="item-box-wrapper"
                      style={`width: ${iWidth}px`}
                    >
                      {smallGridArr &&
                        smallGridArr.map((i) => {
                          return <i key={i}></i>;
                        })}
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="range-box">
            <div
              id="range"
              ref={(el) => (this.range = el)}
              style={`width: ${defaultWidth}px`}
            >
              <div
                id="meaBox"
                ref={(el) => (this.meaBox = el)}
                onMouseDown={this.changeFnHandel}
                style={`width:${this._time_posi}px`}
              >
                {getSecond2Minute(selectedTime)}
              </div>
              <div
                id="mea_l"
                ref={(el) => (this.mea_l = el)}
                className="mea"
                onMouseDown={this.changeFnHandel}
              ></div>
              <div
                id="mea_r"
                ref={(el) => (this.mea_r = el)}
                className="mea"
                style={`left:${this._time_posi}px`}
                onMouseDown={this.changeFnHandel}
              ></div>
            </div>
          </div>
        </div>
        <div className="preinstall">
          <div className="r">
            <i
              className="iconfont icon055suoxiao hand"
              onClick={() => {
                this.speedHandel("-");
              }}
            ></i>
            <Slider
              className="der"
              value={sliderValue}
              min="0"
              tooltipVisible={false}
              onChange={(e) => {
                this.changeHandle(e);
              }}
            ></Slider>
            <i
              className="iconfont icon056fangda hand"
              onClick={() => {
                this.speedHandel("+");
              }}
            ></i>
          </div>
          <Popover placement="top" width="167">
            <div className="shortcut">
              <p>
                前进一帧
                <i className="iconfont icon061qianjinyizhen"></i>
              </p>
              <p>
                后退一帧
                <i className="iconfont icon062houtuiyizhen"></i>
              </p>
              <p>
                插入入点
                <i className="iconfont icon048charurudian"></i>
              </p>
              <p>
                插入出点
                <i className="iconfont icon049charuchudian"></i>
              </p>
              <p>
                播放/暂停
                <i>空格键</i>
              </p>
            </div>
            <span className="tip" slot="reference">
              <i
                className="iconfont icon067kuaijiejian"
                style="vertical-align: -2px"
              ></i>
              快捷键
            </span>
          </Popover>
          <Button
            size="mini"
            onClick={() => {
              this.preinHandel(0);
            }}
          >
            入点
          </Button>
          <Button
            size="mini"
            onClick={() => {
              this.preinHandel(1);
            }}
          >
            出点
          </Button>
          <Button size="mini" onClick={this.previewBtn}>
            预览
          </Button>
          <Button type="primary" size="mini" onClick={this.submit}>
            拆条
          </Button>
        </div>
      </div>
    );
  }
}
