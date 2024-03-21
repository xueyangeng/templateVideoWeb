import React, { useRef, useState } from 'react'
import './index.scss'
import { Button } from "antd";
import TimeLine from '../timeline';
import { getSecond2Minute } from "@/utils/handy";
import audiocover from "@/assets/images/audio.png";
function Item(props) {
  const { item, setmusic, musicid, delmedia, setmedia, isset, showcut } = props
  const audioRef= useRef()
  const [audiostate, setaudiostate] = useState('stop')
  const [audioshow, setaudioshow] = useState(false)
  const [currentTime, setcurrentTime] = useState(item.startRange || 0)
  const allpause = () => {
    return new Promise( (resolve) => {
      const allaudio = document.querySelectorAll('audio')
      for (const audio of allaudio) {
        audio.pause()
      }
      resolve()
    })
  }
  const setaudiocurrent = async (time) => {
    if (audioRef.current) {
      await allpause()
      audioRef.current.currentTime = time
    }
  }
  const controlAudio = async (type) => {
    switch(type){
      case 'onloadedmetadata':
        audioRef.current.currentTime = item.startRange || 0
      break
      case 'allTime':
        audioRef.current.play()
      break
      case 'getCurrentTime':
        setcurrentTime(audioRef.current.currentTime)
        if (item.endRange && audioRef.current.currentTime >= item.endRange) {
          audioRef.current.currentTime = item.startRange || 0
          audioRef.current.pause()
        }
      break
      case 'play':
        setaudiostate('running')
      break
      case 'pause':
        setaudiostate('pause')
      break
      case 'changestatus':
        await allpause()
        if (audiostate == 'pause') {
          audioRef.current.play()
        }
      break
      case 'onended':
        setaudioshow(false)
        setaudiostate('stop')
      break
    }
  }
  const handshowaudio = async () => {
    await allpause()
    setaudioshow(true)
  }
  return (
    <div className={`music ${isset ? 'setitem': ''}`}>
      <div className={'musicthumb ' + audiostate}>
          <img src={audiocover} />
          <div className="playbutton" onClick={() => {controlAudio('changestatus')}}>
            <div className="musicplay">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
              <span className="line line4"></span>
            </div>
            <div className="runpause">
              <svg t="1625581348457" viewBox="0 0 1066 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8627" width="200" height="200"><path d="M320.426667 221.952a39.210667 39.210667 0 0 0-39.210667 39.210667v504.533333a39.210667 39.210667 0 0 0 78.421333 0V261.162667a39.210667 39.210667 0 0 0-39.210666-39.210667z m387.456 0a39.210667 39.210667 0 0 0-39.210667 39.210667v504.533333a39.210667 39.210667 0 1 0 78.421333 0V261.162667a39.210667 39.210667 0 0 0-39.210666-39.210667z" fill="#fff" p-id="8628"></path></svg>
            </div>
            <div className="runplay">
              <svg t="1625464988768"  viewBox="0 0 1066 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9040" width="200" height="200"><path d="M267.093333 220.032v583.936a42.666667 42.666667 0 0 0 65.28 36.181333l467.2-291.968a42.581333 42.581333 0 0 0 0.170667-72.234666L332.288 183.808a42.666667 42.666667 0 0 0-65.194667 36.224z" fill="#fff" p-id="9041"></path></svg>
            </div>
          </div>
          {!audioshow && (
          <div onClick={() => {handshowaudio()}} className="playbutton playceng"></div>
          ) }
      </div>
      <div className={'musicinfo ' + audiostate}>
        <div className="title">
          {item.name} {musicid == item.id && (
          <div className="select"><svg t="1625637765764" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8627" width="200" height="200"><path d="M864.512 241.728a32 32 0 0 1 1.472 45.184l-408.512 436.416a32 32 0 0 1-45.888 0.896L192.256 507.072a32 32 0 0 1 44.992-45.504l195.968 193.984L819.264 243.2a32 32 0 0 1 45.248-1.472z" fill="#1890FF" p-id="8628"></path></svg></div>
          )}
          {isset && (<div className="musicplay">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
              <span className="line line4"></span>
            </div>)}
        </div>
        <div className="timer">
          <div className="timing">{getSecond2Minute(currentTime)}</div>
          <div className="timeline">
            <TimeLine
              currentTime={currentTime}
              startRange={item.startRange || 0}
              endRange={item.endRange || item.duration}
              duration={item.duration}
              setaudiocurrent={setaudiocurrent}
              isset={isset}
            />
            {audioshow && (<audio
              ref={audioRef}
              src={item.previewUrl}
              onCanPlay={() => controlAudio('allTime')}
              onTimeUpdate={(e) => controlAudio('getCurrentTime')}
              onLoadedMetadata={() => controlAudio('onloadedmetadata')}
              onPause={() => controlAudio('pause')}
              onPlay={() => controlAudio('play')}
              onEnded={() => controlAudio('onended')}
            ></audio>)}
          </div>
          <div className="totaltime">{getSecond2Minute(item.duration)}</div>
        </div>
        <div className="setinfo">
          <div className="settime">
            <div className="timing">{getSecond2Minute(currentTime)}</div> / <div className="totaltime">{getSecond2Minute(item.duration)}</div>
          </div>
          <Button onClick={() => {
            allpause()
            showcut()
          }}>选段</Button>
        </div>
      </div>
      <div className="cardaction">
        <Button className="delmusic" onClick={() => {
          delmedia()
        }}>
          <span className="ico iconfont iconProperty1IconProperty216pxProperty3shanchu" />
        </Button>
        <div className="cardtoolright">
          <Button className="setmusic" disabled={musicid == item.id ? false : true} onClick={() => {
            setmedia()
          }}>
            设置
          </Button>
          <Button className="usemusic" type="primary" onClick={() => {
            setmusic()
          }}>
            {musicid == item.id?'取消应用':'应用'}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default Item
