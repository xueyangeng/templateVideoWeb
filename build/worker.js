// import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
// const ffmpeg = createFFmpeg({
//   corePath: "/ffmpeg/ffmpeg-core.js",
//   // log: true,
//   logger: ({ message }) => console.log('logger', message),
//   progress: p => console.log('progress', p)
// })
// await ffmpeg.load();
// ffmpeg.run('-h').then((e) => {
//   console.log('eeeee', e)
// })


// await ffmpeg.FS('writeFile', id, await fetchFile(file));

const list = []
onmessage = function(e) {
  console.log('onmessage', e.data)
  const {type, value} = e.data
  if (!type) {
    return false
  }
  switch (type) {
    case 'add':
      list.push(value)
      break;
    case 'list':
      postMessage(list)
      break;
    default:
      break;
  }
}
