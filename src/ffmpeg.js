import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
export const ffmpeg = createFFmpeg({
  corePath: "/ffmpeg/ffmpeg-core.js"
})
// console.log(fetchFile)
// ffmpeg.run('-h').then((e) => {
//   console.log('eeeee', e)
// })


// await ffmpeg.FS('writeFile', id, await fetchFile(file));
// export ffmpeg
