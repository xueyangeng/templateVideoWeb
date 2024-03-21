import React from "react";
import "./index.scss";
import { getFileType, getDate, getSecond  } from "@/utils/handy";
import audio from "@/assets/images/audio.png";

export default class Thumb extends React.Component {
  constructor(props){
    super(props);
    this.state={
    }
  }
  checkthis () {
    this.props.checkitem()
  }
  onRetry (file) {
    React.$worker.postMessage({type: 'retry', value: file.uuid});
  }
  render() {
    const {
      item,
      preveiw
    } = this.props
    return (
      <div className={`thumb ${item.check? 'checkthumb' : ''} ${item.isprogress? 'isprogress' :''}`}>
        <div className={`checkbox ${item.check? 'ischeck' : ''}`} onClick={() => this.checkthis()}>
          <svg t="1624460754735" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8570" width="200" height="200"><path d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z" fill="#FFFFFF" p-id="8571"></path><path d="M896 0a128 128 0 0 1 128 128v768a128 128 0 0 1-128 128H128a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128h768z m0 64H128a64 64 0 0 0-63.552 56.512L64 128v768a64 64 0 0 0 56.512 63.552L128 960h768a64 64 0 0 0 63.552-56.512L960 896V128a64 64 0 0 0-56.512-63.552L896 64z" fill="#D6D6D6" p-id="8572"></path></svg>
          <svg t="1624460814341" className="checksvg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8698" width="200" height="200"><path d="M0 0m128 0l768 0q128 0 128 128l0 768q0 128-128 128l-768 0q-128 0-128-128l0-768q0-128 128-128Z" fill="#1890FF" p-id="8699"></path><path d="M800.832 347.52a48 48 0 0 1 67.392 67.968l-5.056 4.992-406.08 347.072-232.768-204.8A48 48 0 0 1 282.048 486.4l5.632 4.288 170.304 149.696 342.848-292.864z" fill="#FFFFFF" p-id="8700"></path></svg>
        </div>
        <div className="imgbox" onClick={() => preveiw()}>
          <img src={item.compressImg || audio} className={item.compressImg? '': 'nobg'}/>
          {item.duration && (<div className="video"><div className="duration">{getSecond(item.duration)}</div><div className="play"><svg t="1624459678583" viewBox="0 0 1066 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8749" width="200" height="200"><path d="M267.093333 220.032v583.936a42.666667 42.666667 0 0 0 65.28 36.181333l467.2-291.968a42.581333 42.581333 0 0 0 0.170667-72.234666L332.288 183.808a42.666667 42.666667 0 0 0-65.194667 36.224z" fill="#ffffff" p-id="8750"></path></svg></div></div>)}
          {!item.uperror && item.isprogress && (<div className="progressbox">
            上传 {(item.progress * 100).toFixed(2)}%
            <div className="progress" >
              <div className="progressinlin" style={{width: (item.progress * 100).toFixed(2) + '%'}}></div>
            </div>
          </div>)}
          {item.uperror && (<div className="progressbox uperror">
            上传失败
            <div className="onRetry" onClick={() => {this.onRetry(item)}}>重试</div>
          </div>)}
        </div>
        <h1>{item.name}</h1>
        <div className="time" >
          {getDate(item.insertDt, 'MM月dd日 hh:mm')}
          <div className={'iconsvg ' + getFileType(item.fileExt)}></div>
        </div>
      </div>
    )
  }
}
