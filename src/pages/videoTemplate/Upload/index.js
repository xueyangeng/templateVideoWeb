import React, { Component } from "react";
import { message } from "antd";
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { UPLOAD_ADD, UPLOAD_SUCCESS, UPLOAD_UPLOADING, UPLOAD_UPERROR } from '@/store/action/upload'
import { getSize, dataURLtoBlob, guid2, readimg, fileMd5, SOURCE_TYPE, getFileType, atob64 } from "@/utils/handy";
import { bosbucket, getMd5Info, directUpload, getUploadKey } from "@/channel";
// import jsmediatags from 'jsmediatags'
import "./index.scss";
import baidubce from "@/utils/uploader"
import { fetchFile } from '@ffmpeg/ffmpeg'
class UploadFile extends Component{
  constructor(props) {
    super(props);
    this.state = {
      accept: '.mp4,.flv,.png,.jpg,,jpeg',
      multiple: true,
      bos_bucket: '',
      uploader: null,
      folderId: '',
      md5Obj: {},
      fileObj: {},
      errorObj: {},
      notSave: false,
      logs: []
    }
    React.$worker.onmessage = (m) => {
      console.log('%c onmessage', 'color: #793cda', m.data)
      const {type, value} = m.data
      const { uploader, errorObj, logs } = this.state
      if (type == 'start') {
        const { folderId, multiple, accept } = value
        const filedom = document.getElementById('materfile');
        console.log(logs)
        this.setState({ folderId, accept, multiple}, () => {
          filedom.click()
        })
      }
      if (type == 'retry') {
        uploader.retry(errorObj[value])
      }
    };
    this.initbucket()
  }
  initbucket = () => {
    this.$ffmpeg.load()
    bosbucket().then((bos_bucket) => {
      this.setState({bos_bucket}, () => {
        this.newuploader()
      })
    })
  }
  newuploader = () => {
    const { bos_bucket, md5Obj, notSave, folderId, errorObj } = this.state
    const { add, uploading, uperror } = this.props
    const endpoint = 'https://' + bos_bucket + '.bj.bcebos.com';
    const uploader = new baidubce.bos.Uploader({
      multi_selection: true,
      bos_endpoint: endpoint,
      bos_bucket: bos_bucket,
      init: {
        PostInit: () => {
          React.$worker.postMessage({type: 'ready'})
         },
         FilesAdded: (_, files) => {
          const { fileObj } = this.state
          console.log('FilesAdded', _, files)
          // 当文件被加入到队列里面，调用这个函数
          files.forEach((file) => {
            fileObj[file.uuid] = folderId;
            const { compressImg, id, lastModified, name, size, type, uuid } = file
            const fileExt = name.split('.').slice(-1)[0]
            add({ compressImg, id, lastModified, name, size, type, uuid, isprogress: true, progress: 0, insertDt: new Date(), fileExt })
          });
          this.setState({ fileObj })
        },
        BeforeUpload: (_, file) => {
          console.log('BeforeUpload', _, file)
          // 当某个文件开始上传的时候，调用这个函数
          // 如果想组织这个文件的上传，请返回 false (Promise)
          uploading({ uuid: file.uuid })
          return new Promise((resolve) => {
              fileMd5(file).then((md5) => {
                  md5Obj[file.uuid] = md5;
                  this.setState({ md5Obj })
                  getMd5Info(md5).then((data) => {
                    if (data.name) {
                        if (!notSave) {
                          this.saveFileInfo(file, data.url);
                        } else {
                          React.$worker.postMessage({type: 'finish', value: { uuid: file.uuid, data: data }})
                        }
                        resolve(false);
                    } else {
                        resolve(true);
                    }
                  })
              })
          });
        },
        Key: (_, file) => {
          console.log('key', _, file)
          const name = new Date().toLocaleDateString().replace(/\/|-/g, '') + '/' + md5Obj[file.uuid] + file.name.substr(file.name.lastIndexOf('.'));
          return new Promise((resolve) => {
            getUploadKey(name).then(res => {
              const { code, msg } = res;
              if (code && msg) {
                if (code == 401) {
                  window.location.reload();
                }
              } else {
                uploader.setOptions({ bos_ak: res.accessKeyId, bos_sk: res.secretAccessKey, uptoken: res.sessionToken });
              }
              resolve(name);
            })
          });
        },
        UploadProgress: (_, file, progress) => {
          console.log('UploadProgress', _, file, progress)
          // 某个文件的上传进度
          uploading({ uuid: file.uuid, progress: progress })
        },
        FileUploaded: (_, file, info) => {
          console.log('FileUploaded', _, file, info)
          // 某个文件上传成功
          let url = endpoint + '/' + info.body.bucket + '/' + info.body.key.replace(bos_bucket + '/', '');
          React.$worker.postMessage({type: 'finish', value: { uuid: file.uuid, data: { url: url, id: (+new Date() + file.size) } }})
          if (!notSave) {
              this.saveFileInfo(file, url)
          }
        },
        Error: (_, error, file) => {
          console.log('Error', _, error, file)
          uperror({uuid: file.uuid})
          errorObj[file.uuid] = file;
        },
        UploadComplete: () => {
          console.log('UploadComplete')
          // 队列里面的文件上传结束了，调用这个函数
        }
      }
    })
    this.setState({ uploader })
  }
  saveFileInfo = (file, url) => {
    const { success, uploading } = this.props
    const { fileObj, md5Obj, errorObj } = this.state
    const ext = file.name.substr(file.name.lastIndexOf('.'));
    const params = { id: fileObj[file.uuid], md5: md5Obj[file.uuid], name: file.name, url: url, fileSize: file.size, sourceType: SOURCE_TYPE[getFileType(ext)] || SOURCE_TYPE.file }
    directUpload(params).then(res => {
        console.log(res)
        const { code, msg } = res;
        if (code && msg) {
          if (code == 401) {
            window.location.reload();
          }
          errorObj[file.uuid] = file;
          this.setState({ errorObj })
          React.$worker.postMessage({type: 'saveError', value: { uuid: file.uuid, error: msg }})
        } else {
          success({...res, uuid: file.uuid})
        }
    }).catch((error) => {
        errorObj[file.uuid] = file;
        this.setState({ errorObj })
        React.$worker.postMessage({type: 'saveError', value: { uuid: file.uuid, error: error, ignore: true }})
    });
  }
  beforeUpload = async (event) => {
    const { accept, bos_bucket, uploader, logs } = this.state
    const {  } = this
    let pass = true;
    event.persist()
    const files = event.target.files;
    for (const file of files) {
      const { type, name, size } = file
      const id = guid2()
      if (size <= 0) {
        pass = false;
        message.warning('文件内容为空，请重新上传');
        break;
      } else {
        let bigsize = 2147483648; // 10G 10737418240
        if (size > bigsize) {
          message.warning('文件大小不能超过' + getSize(bigsize));
          pass = false;
          break;
        }
        const arr = accept.split(',')
        const ext = file.name.substr(file.name.lastIndexOf('.')).toLocaleLowerCase();
        if (arr.length && !arr.includes(ext)) {
          message.warning('文件格式错误，请重新上传');
          pass = false;
          break;
        }
      }
      let compressImg = ''
      if (type.includes('image')) {
        const base64 = await readimg(file)
        const bolb = await dataURLtoBlob(base64)
        compressImg = window.URL.createObjectURL(bolb)
      }
      if (type.includes('video') || type.includes('audio')) {
        this.$ffmpeg.setLogger(( {type, message} ) => {
          console.log(`%c ${type}`, 'color:#ff4d4f', message)
        })
        this.$ffmpeg.setProgress(({ ratio }) => {
          console.log('%c ratio', 'color: #52c41a', ratio);
        });
        this.$ffmpeg.FS('writeFile', id, await fetchFile(file));
        await this.$ffmpeg.run('-i', id, '-y', '-f', 'image2', '-ss', '0', '-vframes', '1', id+'.jpg' );
        // const videocompress = this.$ffmpeg.FS('readFile', id+'.jpg')
        let videocompress = ''
        try {
          videocompress = this.$ffmpeg.FS('readFile', id+'.jpg')
        } catch (error) {
          console.log(error)
        }
        if(videocompress) {
          const base64 = atob64(videocompress)
          console.log('base64', base64)
          const bolb = await dataURLtoBlob('data:image/jpg;base64,'+base64)
          this.$ffmpeg.FS('unlink', id)
          compressImg = window.URL.createObjectURL(bolb)
        }
      }
      // if (type.includes('audio')) {
        
      // }
      file.compressImg = compressImg
      file.id = id
      if (pass) {
        uploader.addFile(file);
      }
    }
    uploader.start();
    event.target.value = ''; // 不设置不能选择相同文件
    return false
    return new Promise(resolve => {
      //   img.onload = () => {
      //     const canvas = document.createElement('canvas');
      //     canvas.width = img.naturalWidth;
      //     canvas.height = img.naturalHeight;
      //     const ctx = canvas.getContext('2d');
      //     ctx.drawImage(img, 0, 0);
      //     ctx.fillStyle = 'red';
      //     ctx.textBaseline = 'middle';
      //     ctx.font = '33px Arial';
      //     ctx.fillText('Ant Design', 20, 20);
      //     canvas.toBlob(resolve);
      //   };
      // };
    });
  }
  render() {
    const { accept, multiple } = this.state
    return (
      <input id="materfile" type="file" accept={accept} multiple={multiple}
          style={{ display:"none" }}
          onChange={this.beforeUpload}
      />
    )
  }
}
UploadFile.propTypes={
  upload: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired,
  success: PropTypes.func.isRequired,
  uploading: PropTypes.func.isRequired,
  uperror: PropTypes.func.isRequired,
}
const mapStateToProps = ({ upload }) => ({
  upload
})
const mapDispatchToProps = (dispatch) => ({
  add: (file) => dispatch(UPLOAD_ADD(file)),
  success: (file) => dispatch(UPLOAD_SUCCESS(file)),
  uploading: (file) => dispatch(UPLOAD_UPLOADING(file)),
  uperror: (file) => dispatch(UPLOAD_UPERROR(file)),
  // sub: () => dispatch(SUB_NUMBER)
})
export default connect(mapStateToProps, mapDispatchToProps)(UploadFile)
