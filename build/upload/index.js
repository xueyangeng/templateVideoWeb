let md5Obj = {};
let fileObj = {};
let folderId = 0;
let fileList = [];
let errorObj = {};
// let bos_bucket = '';
const parent = window.parent;
const tokenKey = 'Creative-Brain-Token';
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "/cms/bucket", false); // false 同步
// xhr.setRequestHeader('Content-type', 'application/json');
// xhr.setRequestHeader('token', getCookie(tokenKey));
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var res = JSON.parse(xhr.response);
//         if (res.code == 0) {
//             bos_bucket = res.data || '';
//         }
//     }
// }
// xhr.send();
// const endpoint = 'https://' + bos_bucket + '.bj.bcebos.com';
const uploader = new baidubce.bos.Uploader({
    // multi_selection: true,
    // bos_endpoint: endpoint,
    // bos_bucket: bos_bucket,
    init: {
        // PostInit: () => {
        //     parent && parent.postMessage({ status: 'ready' }, '*');
        // },
        // Key: (_, file) => {
        //     const name = new Date().toLocaleDateString().replace(/\/|-/g, '') + '/' + md5Obj[file.uuid] + file.name.substr(file.name.lastIndexOf('.'));
        //     return new Promise((resolve) => {
        //         fetch('/cms/sts?resource=' + name, { method: 'GET', headers: { token: getCookie(tokenKey) } }).then(res => {
        //             if (res.status == 200) {
        //                 return res.json();
        //             } else {
        //                 return Promise.reject(new Error(res.statusText));
        //             }
        //         }).then(res => {
        //             const { code, data = {}, msg } = res;
        //             if (code == 0) {
        //                 uploader.setOptions({ bos_ak: data.accessKeyId, bos_sk: data.secretAccessKey, uptoken: data.sessionToken });
        //             } else if (code == 401) {
        //                 window.parent.location.reload();
        //             } else {
        //                 parent && parent.postMessage({ status: 'uploadError', data: { uuid: file.uuid, error: msg, } }, '*');
        //             }
        //             resolve(name);
        //         }).catch(() => {
        //             resolve(name);
        //         });
        //     });
        // },
        // FilesAdded: (_, files) => {
        //     // 当文件被加入到队列里面，调用这个函数
        //     const arr = [];
        //     files.forEach((file) => {
        //         arr.push({
        //             name: file.name,
        //             size: file.size,
        //             uuid: file.uuid
        //         });
        //         fileObj[file.uuid] = folderId;
        //     });
        //     parent && parent.postMessage({ status: 'append', data: arr }, '*');
        // },
        // BeforeUpload: (_, file) => {
        //     // 当某个文件开始上传的时候，调用这个函数
        //     // 如果想组织这个文件的上传，请返回 false (Promise)
        //     return new Promise((resolve) => {
        //         fileMd5(file).then((md5) => {
        //             md5Obj[file.uuid] = md5;
        //             getMd5Info(md5).then((data) => {
        //                 if (data) {
        //                     if (!queryString('notSave')) {
        //                         saveFileInfo(file, data.url);
        //                     } else {
        //                         parent && parent.postMessage({ status: 'finish', data: { uuid: file.uuid, data: data } }, '*');
        //                     }
        //                     resolve(false);
        //                 } else {
        //                     resolve(true);
        //                 }
        //             })
        //         })
        //     });
        // },
        // UploadProgress: (_, file, progress) => {
        //     // 某个文件的上传进度
        //     console.log(file.uuid, progress, 'uploading');
        //     parent && parent.postMessage({ status: 'uploading', data: { uuid: file.uuid, progress: progress } }, '*');
        // },
        // FileUploaded: (_, file, info) => {
        //     // 某个文件上传成功
        //     let url = endpoint + '/' + info.body.bucket + '/' + info.body.key.replace(bos_bucket + '/', '');
        //     console.log(file.uuid, url, info, 'finish');
        //     parent && parent.postMessage({ status: 'finish', data: { uuid: file.uuid, data: { url: url, id: (+new Date() + file.size) } } }, '*');
        //     if (!queryString('notSave')) {
        //         saveFileInfo(file, url);
        //     }
        // },
        // Error: (_, error, file) => {
        //     // 如果上传的过程中出错了，调用这个函数
        //     errorObj[file.uuid] = file;
        //     console.log(file.uuid, error, 'uploadError');
        //     parent && parent.postMessage({ status: 'uploadError', data: { uuid: file.uuid, error: error, ignore: true } }, '*');
        // },
        // UploadComplete: () => {
        //     // 队列里面的文件上传结束了，调用这个函数
        //     console.log('complete');
        //     parent && parent.postMessage({ status: 'complete' }, '*');
        // }
    }
});
// const fileEle = $("#file");
// fileEle.on('change', (e) => {
    // const files = e.target.files;
    // for (let i = 0; i < files.length; i++) {
        // if (files[i].size <= 0) {
            // parent && parent.postMessage({ status: 'fileError', message: '文件内容为空，请重新上传' }, '*');
            // pass = false;
            // break;
        // } else {
            // let size = 10737418240; // 10G
            // if (queryString('fileSize')) {
                // size = parseInt(queryString('fileSize'));
            // }
            // if (files[i].size > size) {
                // parent && parent.postMessage({ status: 'fileError', message: '文件大小不能超过' + getFileSize(size) }, '*');
                // pass = false;
                // break;
            // }
            // let arr = [];
            // if (queryString('accept')) {
                // arr = queryString('accept').split(',');
            // }
            // const ext = files[i].name.substr(files[i].name.lastIndexOf('.')).toLocaleLowerCase();
            // if (arr.length && !arr.includes(ext)) {
                // parent && parent.postMessage({ status: 'fileError', message: '文件格式错误，请重新上传' }, '*');
                // pass = false;
                // break;
            // }
        // }
    // }
//     if (pass) {
//         for (let i = 0; i < files.length; i++) {
//             fileList.push(files[i]);
//         }
//         sendFileList();
//     }
//     e.target.value = ''; // 不设置不能选择相同文件
// });
// const sendFileList = () => {
//     const arr = [];
//     fileList.forEach((file) => {
//         arr.push({
//             name: file.name,
//             size: file.size
//         });
//     });
    // parent && parent.postMessage({ status: 'fileList', data: arr }, '*');
// }
// const saveFileInfo = (file, url) => {
//     const ext = file.name.substr(file.name.lastIndexOf('.'));
//     const params = { id: fileObj[file.uuid], md5: md5Obj[file.uuid], name: file.name, url: url, fileSize: file.size, sourceType: SOURCE_TYPE[getFileType(ext)] || SOURCE_TYPE.file }
//     directUpload(params).then(res => {
//         const { code, data, msg } = res;
//         if (code == 0 && data) {
//             parent && parent.postMessage({ status: 'success', data: { uuid: file.uuid, data: data } }, '*');
//         } else if (code == 401) {
//             window.parent.location.reload();
//         } else {
//             errorObj[file.uuid] = file;
//             parent && parent.postMessage({ status: 'saveError', data: { uuid: file.uuid, error: msg } }, '*');
//         }
//     }).catch((error) => {
//         errorObj[file.uuid] = file;
//         parent && parent.postMessage({ status: 'saveError', data: { uuid: file.uuid, error: error, ignore: true } }, '*');
//     });
// }
// const getMd5Info = (md5) => {
//     return new Promise((resolve) => {
//         fetch('/cms/imedia/adapter/md5/check?md5=' + md5, {
//             method: 'GET',
//             headers: { token: getCookie(tokenKey) },
//         }).then(res => {
//             if (res.status == 200) {
//                 return res.json();
//             } else {
//                 return Promise.reject(new Error(res.statusText));
//             }
//         }).then((res) => {
//             resolve(res.data);
//         }).catch(() => {
//             resolve(null);
//         });
//     });
// }
// const directUpload = (params) => {
//     return fetch('/cms/imedia/adapter/directUpload', {
//         method: 'POST',
//         body: JSON.stringify(params),
//         headers: { token: getCookie(tokenKey), 'Content-Type': 'application/json' },
//     }).then(res => {
//         if (res.status == 200) {
//             return res.json();
//         } else {
//             return Promise.reject(new Error(res.statusText));
//         }
//     });
// }
// const fileMd5 = (file) => {
//     return new Promise((resolve) => {
//         let currentChunk = 0;
//         const chunkSize = 2097152;
//         const fileReader = new FileReader();
//         const spark = new SparkMD5.ArrayBuffer();
//         const chunks = Math.ceil(file.size / chunkSize);
//         const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;

//         fileReader.onload = (e) => {
//             spark.append(e.target.result);
//             currentChunk++;
//             if (currentChunk < chunks) {
//                 loadNext();
//             } else {
//                 const hash = spark.end();
//                 spark.destroy();
//                 resolve(hash);
//             }
//         };
//         fileReader.onerror = () => {
//             resolve();
//         };

//         const loadNext = () => {
//             const start = currentChunk * chunkSize;
//             const end = (start + chunkSize) >= file.size ? file.size : start + chunkSize;
//             fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
//         }

//         loadNext();
//     });
// }
const callback = e => {
    if (!e.data) return;
    const { evt, data } = e.data;
    switch (evt) {
        case 'click':
            fileEle.click();
            break;
        case 'del':
            if (data != undefined) {
                fileList.splice(data, 1);
            } else {
                fileList = [];
            }
            sendFileList();
            break;
        case 'start':
            folderId = data;
            fileList.forEach((file) => {
                uploader.addFile(file);
            });
            fileList = [];
            uploader.start();
            break;
        case 'remove':
            uploader.remove(data);
            break;
        case 'retry':
            uploader.retry(errorObj[data]);
            break;
        case 'save':
            const arr = [];
            data.forEach((file) => {
                const ext = file.name.substr(file.name.lastIndexOf('.'));
                const params = { md5: md5Obj[file.uuid], name: file.name, url: file.url, fileSize: file.size, sourceType: file.type };
                arr.push(directUpload(params));
            });
            Promise.all(arr).then(() => {
                parent && parent.postMessage({ status: 'saveSuccess' }, '*');
            }).catch(() => {
                parent && parent.postMessage({ status: 'saveFail' }, '*');
            });
            break;
        default:
            break;
    }
};
window.addEventListener('message', callback, false);