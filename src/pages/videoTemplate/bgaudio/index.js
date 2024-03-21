import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Button, Spin, Slider, Switch, TimePicker } from "antd";
const RangePicker = TimePicker.RangePicker;
import Item from "./item";
import "./index.scss";
import noData from "@/assets/images/noData.png";
import { get_mediaList, del_media } from "@/channel";
import ConciseModal from "@/components/Modal";
import moment from "moment";
import { getSecond, timetosecond } from "@/utils/handy";
import VideoModal from "../VideoModal";

import MaterialModal from "../MaterialModal";
export default class bgaudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      current: 1,
      size: 20,
      list: [],
      loading: false,
      pageloading: false,
      hasMore: true,
      delvisible: false,
      delitem: {},
      setvisible: false,
      setitem: {},
      cutmusicvisible: false,
    };
  }
  use = async (item) => {
    const { list } = this.state;
    await this.setState({ showModal: false, list: [...item, ...list] });
    // 埋点
    window.sensors &&
      window.sensors.track("cut_add/music", {
        musicName: item && item.map((i) => i.name),
      });
  };
  getmusiclist = async () => {
    const { current, size, list } = this.state;
    if (current == 1) {
      await this.setState({ loading: true, list: [] });
    } else {
      await this.setState({ pageloading: true });
    }
    get_mediaList({ current, size, type: "music" }).then((res) => {
      let hasMore = true;
      if (current * size >= res.total) {
        hasMore = false;
      }
      this.setState({
        hasMore,
        list: [...list, ...res.list],
        current: current + 1,
        loading: false,
        pageloading: false,
      });
    });
  };
  setmusic = (item) => {
    const { config, setConfig } = this.props;
    const { id } = item;
    if (item.id == config.track.backgroundMusic.musicId) {
      config.track.backgroundMusic.asset = {};
      config.track.backgroundMusic.musicId = "";
    } else {
      config.track.backgroundMusic.asset = item;
      config.track.backgroundMusic.musicId = id;
      config.track.backgroundMusic.startRange = item.startRange || 0;
      config.track.backgroundMusic.endRange = item.endRange || item.duration;
      // 埋点
      window.sensors &&
        window.sensors.track("cut_use/music", {
          musicName: item.name,
        });
    }
    setConfig(config);
  };
  setmedia = (setitem) => {
    const { config } = this.props;
    setitem.startRange = config.track.backgroundMusic.startRange;
    setitem.endRange = config.track.backgroundMusic.endRange;
    this.setState({ setvisible: true, setitem });
  };
  delmedia = () => {
    const { list, delitem } = this.state;
    const { config } = this.props;
    del_media({ id: delitem.id, type: "music" }).then((res) => {
      const nl = list.filter((v) => v.id != delitem.id);
      if (delitem.id == config.track.backgroundMusic.musicId) {
        this.setmusic(delitem);
      }
      this.setState({ list: nl });
      this.closedelvisible();
    });
  };
  setdelmedia = (item) => {
    this.setState({ delvisible: true, delitem: item });
  };
  closedelvisible = () => {
    this.setState({ delvisible: false, delitem: {} });
  };
  handloop = (loop) => {
    const { config, setConfig } = this.props;
    config.track.backgroundMusic.loop = loop;
    // config.track.backgroundMusic.durationRange = 0
    if (loop) {
      // 埋点
      window.sensors && window.sensors.track("cut_open_interval_loop");
    }
    setConfig(config);
  };
  setfadeIn = (fadeIn) => {
    const { config, setConfig } = this.props;
    config.track.backgroundMusic.fadeIn = fadeIn;
    // 埋点
    window.sensors && window.sensors.track("cut_modify_the_fade-in_time");
    setConfig(config);
  };
  setfadeOut = (fadeOut) => {
    const { config, setConfig } = this.props;
    config.track.backgroundMusic.fadeOut = fadeOut;
    // 埋点
    window.sensors && window.sensors.track("cut_modify_the_fade-out_time");
    setConfig(config);
  };
  setvolume = (volume) => {
    const { config, setConfig } = this.props;
    config.track.backgroundMusic.volume = volume;
    // 埋点
    window.sensors && window.sensors.track("cut_modify_music_volume");
    setConfig(config);
  };
  setstarttime = (time, timeString) => {
    const { config, setConfig } = this.props;
    config.track.backgroundMusic.startTime = timetosecond(timeString);
    setConfig(config);
  };
  setendtime = (time, timeString) => {
    const { config, setConfig } = this.props;
    config.track.backgroundMusic.endTime = timetosecond(timeString);
    config.track.backgroundMusic.durationRange =
      timetosecond(timeString) - config.track.backgroundMusic.startTime;
    // 埋点
    window.sensors && window.sensors.track("cut_modify_music_interval");
    setConfig(config);
  };
  opentimechange = (a, h) => {};
  disabledHoursstart = () => {
    const { config } = this.props;
    const { duration } = config;
    const hours = [];
    const h = Math.floor(duration / 60 / 60);
    for (let index = 0; index < 24; index++) {
      if (h < index) {
        hours.push(index);
      }
    }
    return hours;
  };
  disabledMinutesstart = (selectedHour) => {
    const { config } = this.props;
    const { duration } = config;
    const minutes = [];
    const h = Math.floor(duration / 60 / 60);
    const m = Math.floor(duration / 60) % 60;
    if (h > selectedHour) {
      return [];
    }
    for (let index = 0; index < 60; index++) {
      if (m < index) {
        minutes.push(index);
      }
    }
    return minutes;
  };
  disabledSecondsstart = (selectedHour, selectedMinute) => {
    const { config } = this.props;
    const { duration } = config;
    const second = [];
    const h = Math.floor(duration / 60 / 60);
    const m = Math.floor(duration / 60) % 60;
    const s = Math.floor(duration) % 60;
    if (h > selectedHour) {
      return [];
    }
    if (m > selectedMinute) {
      return [];
    }
    for (let index = 0; index < 60; index++) {
      if (s < index) {
        second.push(index);
      }
    }
    return second;
  };
  disabledHours = () => {
    const { config } = this.props;
    const { duration } = config;
    const { endRange, startRange, loop, startTime } =
      config.track.backgroundMusic;
    let disableduration = duration;

    if (!loop) {
      if (duration > endRange - startRange) {
        disableduration = endRange - startRange;
      }
    }
    const hours = [];
    const h = Math.floor(disableduration / 60 / 60);
    const starth = Math.floor(startTime / 60 / 60);
    for (let index = 0; index < 24; index++) {
      if (h < index || index < starth) {
        hours.push(index);
      }
    }
    return hours;
  };
  disabledMinutes = (selectedHour) => {
    const { config } = this.props;
    const { duration } = config;
    const { endRange, startRange, loop, startTime } =
      config.track.backgroundMusic;
    let disableduration = duration;
    if (!loop) {
      if (duration > endRange - startRange) {
        disableduration = endRange - startRange;
      }
    }
    const minutes = [];
    const h = Math.floor(disableduration / 60 / 60);
    const m = Math.floor(disableduration / 60) % 60;
    const startm = Math.floor(startTime / 60) % 60;

    if (h > selectedHour) {
      return [];
    }
    for (let index = 0; index < 60; index++) {
      if (m < index || index < startm) {
        minutes.push(index);
      }
    }
    return minutes;
  };
  disabledSeconds = (selectedHour, selectedMinute) => {
    const { config } = this.props;
    const { duration } = config;
    const { endRange, startRange, loop, startTime } =
      config.track.backgroundMusic;
    let disableduration = duration;

    if (!loop) {
      if (duration > startTime + endRange - startRange) {
        disableduration = startTime + endRange - startRange;
      }
    }
    const second = [];
    const h = Math.floor(disableduration / 60 / 60);
    const m = Math.floor(disableduration / 60) % 60;
    const s = Math.floor(disableduration) % 60;
    const starts = Math.floor(startTime) % 60;
    if (h > selectedHour) {
      return [];
    }
    if (m > selectedMinute) {
      return [];
    }
    for (let index = 0; index < 60; index++) {
      if (s < index || index < starts) {
        second.push(index);
      }
    }
    return second;
  };
  cut = (startTime, endTime) => {
    const { config, setConfig } = this.props;
    config.track.backgroundMusic.startRange = startTime;
    config.track.backgroundMusic.endRange = endTime;
    config.track.backgroundMusic.durationRange = endTime - startTime || 0;
    // 埋点
    window.sensors &&
      window.sensors.track("cut_crop_music", {
        musicName:
          config.track &&
          config.track.backgroundMusic &&
          config.track.backgroundMusic.asset.name,
      });
    setConfig(config);
    this.setState({ cutmusicvisible: false });
  };
  get rangetime() {
    const { config } = this.props;
    const { duration } = config;
    const { startTime, durationRange } = (config.track &&
      config.track.backgroundMusic) || { startTime: null, durationRange: 0 };
    let start = getSecond(startTime);
    let end = getSecond(startTime + durationRange);
    return [moment(start, "HH:mm:ss"), moment(end, "HH:mm:ss")];
  }
  get starttime() {
    const { config } = this.props;
    const startTime =
      (config.track &&
        config.track.backgroundMusic &&
        config.track.backgroundMusic.startTime) ||
      0;
    return moment(getSecond(startTime), "HH:mm:ss");
  }
  get endtime() {
    const { config } = this.props;
    const { startTime, durationRange } = (config.track &&
      config.track.backgroundMusic) || { startTime: 0, durationRange: 0 };
    return moment(getSecond(startTime + durationRange), "HH:mm:ss");
  }

  render() {
    const {
      showModal,
      list,
      pageloading,
      loading,
      hasMore,
      delvisible,
      setvisible,
      setitem,
      cutmusicvisible,
    } = this.state;
    const { config } = this.props;
    const { fadeIn, fadeOut, loop, volume } = (config.track &&
      config.track.backgroundMusic) || {
      fadeIn: null,
      fadeOut: null,
      loop: null,
      volume: null,
    };
    return (
      <div className="audiobox">
        <Spin spinning={loading}>
          <div className="box">
            {list.length > 0 && (
              <div className="audiohead">
                背景音乐设置
                <Button
                  className="whitbottom"
                  onClick={() => {
                    this.setState({ showModal: true });
                  }}
                >
                  从资源库中添加
                </Button>
              </div>
            )}
            <div className="audiolist">
              <InfiniteScroll
                initialLoad={true}
                pageStart={1}
                loadMore={this.getmusiclist}
                hasMore={!pageloading && hasMore && !loading}
                useWindow={false}
                className="InfiniteScroll"
              >
                {list.map((music) => {
                  return (
                    <Item
                      item={music}
                      key={music.id}
                      setmusic={() => {
                        this.setmusic(music);
                      }}
                      delmedia={() => {
                        this.setdelmedia(music);
                      }}
                      setmedia={() => {
                        this.setmedia(music);
                      }}
                      musicid={
                        config.track &&
                        config.track.backgroundMusic &&
                        config.track.backgroundMusic.musicId
                      }
                    ></Item>
                  );
                })}
                {list.length == 0 && !loading && (
                  <div className="noData">
                    <img src={noData} />
                    还没有背景音乐，快去增加一个吧
                    <Button
                      className="whitbottom"
                      onClick={() => {
                        this.setState({ showModal: true });
                      }}
                    >
                      增加背景音乐
                    </Button>
                  </div>
                )}
                {pageloading && hasMore && (
                  <div className="demo-loading-container">
                    <Spin />
                  </div>
                )}
              </InfiniteScroll>
            </div>
          </div>
          <MaterialModal
            visible={showModal}
            multiple
            showtype="5"
            dtype="5"
            usetype="music"
            accept=".mp3"
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
        </Spin>
        <ConciseModal
          width={350}
          visible={delvisible}
          closeIcon={<span />}
          title=""
          text={<span>您确认删除该背景音乐吗？此操作不可恢复</span>}
          buttons={[
            {
              name: "取消",
              callBack: this.closedelvisible,
            },
            {
              name: "删除",
              type: "primary",
              callBack: this.delmedia,
            },
          ]}
        />
        {setvisible && (
          <div className="setvisible">
            <div className="action">
              <div
                className="back"
                onClick={() => {
                  this.setState({ setvisible: false, setitem: {} });
                }}
              >
                <svg
                  t="1625662229320"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="8754"
                  width="200"
                  height="200"
                >
                  <path
                    d="M705.28 190.72a32 32 0 0 0-45.226667 0L338.773333 512l321.28 321.28a32 32 0 1 0 45.226667-45.226667L429.226667 512l276.053333-276.053333a32 32 0 0 0 0-45.226667z"
                    fill="#333333"
                    p-id="8755"
                  ></path>
                </svg>
                返回
              </div>
              <Button
                className="usemusic"
                type="primary"
                onClick={() => {
                  this.setmusic(setitem);
                }}
              >
                {config.track &&
                config.track.backgroundMusic &&
                config.track.backgroundMusic.musicId == setitem.id
                  ? "取消应用"
                  : "应用"}
              </Button>
            </div>
            <Item
              item={setitem}
              isset
              showcut={() => {
                this.setState({ cutmusicvisible: true });
              }}
              // setmusic={() => {this.setmusic(music)}}
              // delmedia={() => {this.setdelmedia(music)}}
              // setmedia={() => {this.setmedia(music)}}
              // musicid={config.track && config.track.backgroundMusic && config.track.backgroundMusic.musicId}
            ></Item>
            <div className="settitle">音乐播放位置</div>
            <div className="location">
              <div className="timer">
                <TimePicker
                  allowClear={false}
                  value={this.starttime}
                  onChange={this.setstarttime}
                  disabledHours={this.disabledHoursstart}
                  disabledMinutes={this.disabledMinutesstart}
                  disabledSeconds={this.disabledSecondsstart}
                  bordered={false}
                  suffixIcon=""
                  popupClassName="musictime"
                />
                <TimePicker
                  allowClear={false}
                  value={this.endtime}
                  onChange={this.setendtime}
                  disabledHours={this.disabledHours}
                  disabledMinutes={this.disabledMinutes}
                  disabledSeconds={this.disabledSeconds}
                  bordered={false}
                  suffixIcon=""
                  popupClassName="musictime"
                />
              </div>
              <div className="switch">
                区间内循环 <Switch checked={loop} onChange={this.handloop} />
              </div>
            </div>
            <div className="settitle">淡入时长</div>
            <div className="slideritem">
              <svg
                t="1625712762314"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8627"
                width="200"
                height="200"
              >
                <path
                  d="M253.312 190.272a64 64 0 0 1 64-64h513.536a64 64 0 0 1 64 64v640.896a64 64 0 0 1-64 64H317.376a64 64 0 0 1-64-64v-127.872a32 32 0 0 1 64 0v127.808h513.536V190.272H317.312v127.616a32 32 0 1 1-64 0V190.272zM474.88 542.72L385.536 632.064a32 32 0 1 0 45.248 45.248l121.408-121.344a64 64 0 0 0 0-90.56L430.72 344.064a32 32 0 0 0-45.248 45.248L474.88 478.72H91.648a32 32 0 0 0 0 64H474.88z"
                  fill="#000000"
                  p-id="8628"
                ></path>
              </svg>
              <Slider
                value={fadeIn}
                min={0}
                max={10}
                onChange={this.setfadeIn}
              />
              <div className="slidernum">
                {fadeIn}
                <span>s</span>
              </div>
            </div>
            <div className="settitle">淡出时长</div>
            <div className="slideritem">
              <svg
                t="1625663773048"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8881"
                width="200"
                height="200"
              >
                <path
                  d="M705.344 190.272a64 64 0 0 0-64-64H191.744a64 64 0 0 0-64 64v640.896a64 64 0 0 0 64 64h449.6a64 64 0 0 0 64-64v-127.872a32 32 0 0 0-64 0v127.808H191.744V190.272h449.6v127.616a32 32 0 0 0 64 0V190.272zM432.128 510.72a32 32 0 0 0 32 32h399.232l-89.344 89.344a32 32 0 1 0 45.248 45.248l121.344-121.344a64 64 0 0 0 0-90.56l-121.344-121.344a32 32 0 1 0-45.248 45.248L863.36 478.72H464.128a32 32 0 0 0-32 32z"
                  fill="#000000"
                  p-id="8882"
                ></path>
              </svg>
              <Slider
                value={fadeOut}
                min={0}
                max={10}
                onChange={this.setfadeOut}
              />
              <div className="slidernum">
                {fadeOut}
                <span>s</span>
              </div>
            </div>
            <div className="settitle">音量</div>
            <div className="slideritem">
              <svg
                t="1625712806415"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="8754"
                width="200"
                height="200"
              >
                <path
                  d="M564.736 187.52a64 64 0 0 1 99.84 53.056v542.72a64 64 0 0 1-99.904 52.992l-162.304-110.08a96 96 0 0 0-53.888-16.512H214.656c-41.856 0-78.464-32.704-78.464-76.288V390.144c0-43.52 36.608-76.224 78.464-76.224h133.952c19.2 0 37.888-5.76 53.76-16.512l162.368-109.824z m35.84 53.056L438.272 350.4a160 160 0 0 1-89.664 27.52H214.656c-9.472 0-14.464 6.912-14.464 12.16v243.328c0 5.312 4.992 12.224 14.464 12.224h133.824c32 0 63.36 9.6 89.856 27.648l162.24 110.08V240.576z"
                  fill="#000000"
                  p-id="8755"
                ></path>
                <path
                  d="M740.48 278.784c10.24-14.72 30.592-18.496 44.16-6.784a316.48 316.48 0 0 1 4.096 476.416c-13.44 11.904-33.792 8.512-44.288-6.016-10.432-14.528-7.04-34.688 6.08-46.912a251.456 251.456 0 0 0-3.2-369.92c-13.248-11.968-17.088-32.064-6.848-46.72z"
                  fill="#000000"
                  p-id="8756"
                ></path>
              </svg>
              <Slider value={volume} onChange={this.setvolume} />
              <div className="slidernum">{volume}</div>
            </div>
          </div>
        )}
        {cutmusicvisible && (
          <VideoModal
            item={config.track.backgroundMusic}
            cut={this.cut}
            visible={cutmusicvisible}
            ismusic
            closeVisible={() => {
              this.setState({ cutmusicvisible: false });
            }}
          ></VideoModal>
        )}
      </div>
    );
  }
}
