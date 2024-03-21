import SparkMD5 from "spark-md5";
import storage from "@/utils/storage";

export const FILE_TYPE = {
  video: [
    ".3gp",
    ".avi",
    ".mp4",
    ".wmv",
    ".mkv",
    ".mov",
    ".flv",
    ".asf",
    ".f4v",
    ".mpeg",
    ".mpg",
    ".ts",
    ".mts",
    ".wmv",
    ".rm",
    ".rmvb",
    ".webm",
    ".m4v",
  ],
  img: [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".heic",
    ".eps",
    ".bmp",
    ".raw",
    ".tif",
    ".dng",
    ".cr3",
    ".nef",
    ".cr2",
    ".crw",
  ],
  audio: [".mp3", ".wma", ".wav", ".m4a"],
  xls: [".xls", ".xlsx"],
  doc: [".doc", ".docx"],
  ppt: [".ppt", ".pptx"],
  zip: [".zip", ".rar"],
  txt: [".txt"],
  pdf: [".pdf"],
  apk: [".apk"],
};
export const SOURCE_TYPE = {
  img: 1,
  video: 2,
  audio: 5,
  xls: 6,
  doc: 6,
  ppt: 6,
  pdf: 6,
  txt: 6,
  file: 8,
};

/**
 * 传入后缀返回文件类型
 * @param  {String} ext
 * @return {String}
 */
export function getFileType(ext) {
  let typeStr = "file";
  if (ext) {
    Object.keys(FILE_TYPE).forEach((key) => {
      FILE_TYPE[key].map((k) => {
        if (k.includes(ext.toLowerCase())) {
          typeStr = key;
        }
      });
      // if (FILE_TYPE[key].includes(ext.toLowerCase())) {
      //     typeStr = key;
      // }
    });
  }

  return typeStr;
}
export const getDate = function (dates, fmt) {
  if (!!!fmt) {
    fmt = "yyyy-MM-dd hh:mm";
  }
  let date = new Date(dates);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : ("00" + str).substr(str.length)
      );
    }
  }
  return fmt;
};

export function atob64(array) {
  array = new Uint8Array(array);
  var length = array.byteLength;
  var table = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "/",
  ];
  var base64Str = "";
  for (var i = 0; length - i >= 3; i += 3) {
    var num1 = array[i];
    var num2 = array[i + 1];
    var num3 = array[i + 2];
    base64Str +=
      table[num1 >>> 2] +
      table[((num1 & 0b11) << 4) | (num2 >>> 4)] +
      table[((num2 & 0b1111) << 2) | (num3 >>> 6)] +
      table[num3 & 0b111111];
  }
  var lastByte = length - i;
  if (lastByte === 1) {
    var lastNum1 = array[i];
    base64Str += table[lastNum1 >>> 2] + table[(lastNum1 & 0b11) << 4] + "==";
  } else if (lastByte === 2) {
    var lastNum1 = array[i];
    var lastNum2 = array[i + 1];
    base64Str +=
      table[lastNum1 >>> 2] +
      table[((lastNum1 & 0b11) << 4) | (lastNum2 >>> 4)] +
      table[(lastNum2 & 0b1111) << 2] +
      "=";
  }
  return base64Str;
}

export function get() {
  // console.info('handy get')
}

export function set() {
  // console.info('handy set')
}

/**
 * 下划线转换驼峰
 * @param  {String} name
 * @return {String}
 */
export function toHump(name) {
  return name.replace(/\_(\w)/g, function (all, letter) {
    return letter.toUpperCase();
  });
}

export function timetosecond(time) {
  const arr = time.split(":");
  return Number(arr[0]) * 60 * 60 + Number(arr[1]) * 60 + Number(arr[2]);
}

export function fileMd5(file) {
  return new Promise((resolve) => {
    let currentChunk = 0;
    const chunkSize = 2097152;
    const fileReader = new FileReader();
    const spark = new SparkMD5.ArrayBuffer();
    const chunks = Math.ceil(file.size / chunkSize);
    const blobSlice =
      File.prototype.slice ||
      File.prototype.mozSlice ||
      File.prototype.webkitSlice;

    fileReader.onload = (e) => {
      spark.append(e.target.result);
      currentChunk++;
      if (currentChunk < chunks) {
        loadNext();
      } else {
        const hash = spark.end();
        spark.destroy();
        resolve(hash);
      }
    };
    fileReader.onerror = () => {
      resolve();
    };

    const loadNext = () => {
      const start = currentChunk * chunkSize;
      const end =
        start + chunkSize >= file.size ? file.size : start + chunkSize;
      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));
    };

    loadNext();
  });
}

/**
 * 下划线转换驼峰 处理对象中的属性名
 * @param  {Object} config
 * @return {Object}
 */
export function toHumpS(config) {
  let obj;
  if (config instanceof Array) {
    obj = [];
    for (let i = 0; i < config.length; i++) {
      if (typeof config[i] === "object") {
        obj[i] = toHumpS(config[i]);
      } else {
        obj[i] = config[i];
      }
    }
  } else if (config instanceof Object) {
    obj = {};
    for (let i in config) {
      if (typeof config[i] === "object") {
        obj[toHump(i)] = toHumpS(config[i]);
      } else {
        obj[toHump(i)] = config[i];
      }
    }
  }
  return obj;
}

/**
 * 驼峰转换下划线
 * @param  {String} name
 * @return {String}
 */
export function toLine(name) {
  return name.replace(/([A-Z])/g, "_$1").toLowerCase();
}

/**
 * 驼峰转换下划线 处理对象中的属性名
 * @param  {Object} config
 * @return {Object}
 */
export function toLineS(config) {
  let obj;
  if (config instanceof Array) {
    obj = [];
    for (let i = 0; i < config.length; i++) {
      if (typeof config[i] === "object") {
        obj[i] = toLineS(config[i]);
      } else {
        obj[i] = config[i];
      }
    }
  } else if (config instanceof Object) {
    obj = {};
    for (let i in config) {
      if (typeof config[i] === "object") {
        obj[toLine(i)] = toLineS(config[i]);
      } else {
        obj[toLine(i)] = config[i];
      }
    }
  }
  return obj;
}

/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {Promise}
 */
function getBlob(url) {
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      }
    };
    xhr.send();
  });
}

/**
 * 下载 blob文件
 * @param {Blob} blob 文件
 * @param {String} filename 想要保存的文件名称
 */
function saveAs(blob, filename) {
  if (window.navigator.msSaveOrOpenBlob) {
    navigator.msSaveBlob(blob, filename);
  } else {
    const link = document.createElement("a");
    const body = document.querySelector("body");
    link.href = window.URL.createObjectURL(blob);
    link.download = filename;

    // fix Firefox
    link.style.display = "none";
    body.appendChild(link);

    link.click();
    body.removeChild(link);
    // 释放之前已经存在的、通过调用 URL.createObjectURL() 创建的 URL 对象
    window.URL.revokeObjectURL(link.href);
  }
}

/**
 * 下载 （文件地址转化为blob对象后下载到本地）
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
export function download(url, filename) {
  let _url = url.replace(/http:/, "https:");
  if (window.location.protocol === "http:") {
    _url = url;
  }
  getBlob(_url).then((blob) => {
    saveAs(blob, filename);
  });
}

/**
 * 获取地址内的参数
 * @param {String} href 地址 exp:地址栏路径
 * @param {String} param 要取到参数的key
 */
export function getParam(href, param) {
  if (!href) {
    return;
  }
  let result = "";
  href = href.split("?");
  href = href[1] || "";
  let url = href.toLowerCase();
  param = param.toLowerCase();
  let one = url.indexOf(param + "=");
  let two = url.indexOf(param + "#");
  if (one >= 0) {
    let preStr = href.substr(one + param.length + 1);
    preStr = preStr.split("?")[0];
    preStr = preStr.split("&")[0];
    preStr = preStr.split("#")[0];
    result = preStr;
  } else if (two >= 0) {
    let preStr = href.substr(two + param.length + 1);
    preStr = preStr.split("?")[0];
    preStr = preStr.split("&")[0];
    preStr = preStr.split("#")[0];
    result = preStr;
  }
  return result;
}

/**
 * 获取cookies
 * @param  {String} cookie_name 要取到cookie的key
 * @return {String} 对应cookie key的value
 */
export function getCookie(cookie_name) {
  var allcookies = document.cookie;
  //索引长度，开始索引的位置
  var cookie_pos = allcookies.indexOf(cookie_name);
  // 如果找到了索引，就代表cookie存在,否则不存在
  if (cookie_pos != -1) {
    // 把cookie_pos放在值的开始，只要给值加1即可
    // 计算取cookie值得开始索引，加的1为“=”
    cookie_pos = cookie_pos + cookie_name.length + 1;
    // 计算取cookie值得结束索引
    var cookie_end = allcookies.indexOf(";", cookie_pos);
    if (cookie_end == -1) {
      cookie_end = allcookies.length;
    }
    //得到想要的cookie的值
    var cookie_value = unescape(allcookies.substring(cookie_pos, cookie_end));
  }
  return cookie_value;
}

/**
 * 检测字体是否支持
 * @param  {String} fontFamily 要检测的字体的名字
 * @return {Boole} 是否支持此字体
 */
export function isSupportFontFamily(fontFamily) {
  // f是要检测的字体
  if (typeof fontFamily !== "string") {
    return false;
  }
  // Arial是基础字体
  let Arial = "Arial";
  if (fontFamily.toLowerCase() === Arial.toLowerCase()) {
    return true;
  }
  // 设置一个检测的字符A,看他是否支持f字体
  let a = "a";
  let width = 100,
    height = 100;
  let c = document.createElement("canvas");
  let ctx = c.getContext("2d");
  c.width = width;
  c.height = height;
  ctx.textAlign = "center";
  ctx.fillStyle = "black";
  ctx.textBaseline = "middle";
  let g = function (j) {
    ctx.clearRect(0, 0, width, height);
    // 字体是传入的j,或者是默认的h
    ctx.font = "100px " + j + ", " + Arial;
    ctx.fillText(a, width / 2, height / 2);
    // 获取canvas图片信息
    let imageData = ctx.getImageData(0, 0, width, height).data;
    // imageData调用数组的 filter方法,筛选符合条件的。改变原数组。
    return [].slice.call(imageData).filter(function (item) {
      return item !== 0;
    });
  };
  // 返回结果,如果Arial默认字体和输入待检测字体fontFamily.通过g函数检测得到的字符串不一致,说明字体支持
  return g(Arial).join("") !== g(fontFamily).join("");
}

/**
 * RGB颜色转换为16进制
 * @param  {String} color RGB颜色
 * @return {String} 16进制颜色
 */
export function colorHex(color) {
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let that = color;
  if (/^(rgb|RGB)/.test(that)) {
    let aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(",");
    let strHex = "#";
    for (let i = 0; i < aColor.length; i++) {
      let hex = Number(aColor[i]).toString(16);
      if (hex === "0") {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = that;
    }
    return strHex;
  } else if (reg.test(that)) {
    let aNum = that.replace(/#/, "").split("");
    if (aNum.length === 6) {
      return that;
    } else if (aNum.length === 3) {
      let numHex = "#";
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  } else {
    return that;
  }
}

/**
 * 16进制颜色转为RGB格式
 * @param  {String} color 16进制颜色
 * @return {String} RGB颜色
 */
export function colorRgba(hex, alpha) {
  // 十六进制颜色值的正则表达式
  let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  let sColor = hex.toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = "#";
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    let sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
    }
    if (alpha || alpha === 0) {
      sColorChange.push(alpha);
    }
    return "RGBA(" + sColorChange.join(",") + ")";
  } else {
    return sColor;
  }
}

/**
 * url转为blob对象
 * @param  {String} url 目标地址
 * @return {String} Blob对象
 */
export function dataURLtoBlob(dataurl) {
  if (dataurl.indexOf("blob:") === 0) {
    return "";
  } else {
    return new Promise((resolve, reject) => {
      let arr = dataurl.split(","),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      resolve(new Blob([u8arr], { type: mime }));
    });
  }
}
/**
 * 文件转url
 * @param  {String} file 文件
 * @return {String} File对象
 */
export function readimg(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(file);
  });
}

/**
 * url转为File对象
 * @param  {String} url 目标地址
 * @return {String} File对象
 */
export function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

/**
 * 密码加密
 * @param  {String} pwd 密码
 * @return {String} 加密后密码
 */
export function encrypt(pwd) {
  let arr = [];
  for (let i = 0; i < pwd.length; i++) {
    arr[i] = i;
  }
  arr.sort(function () {
    return 0.5 - Math.random();
  });

  let tmp = [];
  for (let j = 0; j < arr.length; j++) {
    tmp[j * 2] = pwd[arr[j]];
    if (arr[j] > 9) {
      tmp[j * 2 + 1] = String.fromCharCode(arr[j] + 55);
    } else {
      tmp[j * 2 + 1] = arr[j];
    }
  }
  return tmp.join("");
}

/**
 * 处理存储大小加单位 100 -> 100B
 * @param  {Number} num 存储大小
 * @return {String} 存储大小(带单位B,KB,MB...)
 */
export function getSize(num) {
  if (num >= 1024 * 1024 * 1024 * 1024 * 1024) {
    return (num / (1024 * 1024 * 1024 * 1024 * 1024)).toFixed(2) * 1 + "PB";
  } else if (num >= 1024 * 1024 * 1024 * 1024) {
    return (num / (1024 * 1024 * 1024 * 1024)).toFixed(2) * 1 + "TB";
  } else if (num >= 1024 * 1024 * 1024) {
    return (num / (1024 * 1024 * 1024)).toFixed(2) * 1 + "GB";
  } else if (num >= 1024 * 1024) {
    return (num / (1024 * 1024)).toFixed(2) * 1 + "MB";
  } else if (num >= 1024) {
    return (num / 1024).toFixed(2) * 1 + "KB";
  } else {
    return num + "B";
  }
}

/*
 * 获取浏览器信息
 * @return {String} 浏览器信息
 */
export function BrowserType() {
  let userAgent = navigator.userAgent; // 取得浏览器的userAgent字符串
  let isOpera = userAgent.indexOf("Opera") > -1; // 判断是否Opera浏览器
  let isIE =
    userAgent.indexOf("compatible") > -1 &&
    userAgent.indexOf("MSIE") > -1 &&
    !isOpera; // 判断是否IE浏览器
  let isEdge = userAgent.indexOf("Edge") > -1; // 判断是否IE的Edge浏览器
  let isFF = userAgent.indexOf("Firefox") > -1; // 判断是否Firefox浏览器
  let isSafari =
    userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; // 判断是否Safari浏览器
  let isChrome =
    userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; // 判断Chrome浏览器

  if (isIE) {
    let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
    reIE.test(userAgent);
    let fIEVersion = parseFloat(RegExp["$1"]);
    if (fIEVersion === 7) {
      return "IE7";
    } else if (fIEVersion === 8) {
      return "IE8";
    } else if (fIEVersion === 9) {
      return "IE9";
    } else if (fIEVersion === 10) {
      return "IE10";
    } else if (fIEVersion === 11) {
      return "IE11";
    } else {
      return "0";
    } // IE版本过低
  }
  if (isFF) {
    return "FF";
  }
  if (isOpera) {
    return "Opera";
  }
  if (isSafari) {
    return "Safari";
  }
  if (isChrome) {
    return "Chrome";
  }
  if (isEdge) {
    return "Edge";
  }
}

/**
 * 获取时间，精确到毫秒；
 * @param  {Number} t 时间(单位秒)
 * @return {String} duration  时长（00:00:00:00）
 */
export function getMillisecond(t) {
  if (isNaN(t) || !t) {
    return "00:00:00:00";
  }
  let d = Math.round(t * 25) / 25;
  let duration = "",
    h = Math.floor(d / 60 / 60) % 24,
    m = Math.floor(d / 60) % 60,
    s = Math.floor(d) % 60,
    f = Math.floor(d.toFixed(2).split(".")[1]);
  h > 9 ? (duration += h) : (duration += "0" + h);
  duration += ":";
  m > 9 ? (duration += m) : (duration += "0" + m);
  duration += ":";
  s > 9 ? (duration += s) : (duration += "0" + s);
  duration += ":";
  f > 9 ? (duration += f) : (duration += "0" + f);
  return duration;
}
/**
 * 获取时间，精确到毫秒；
 * @param  {string}} t 时间字符串毫秒（00:00:00:00）
 * @return {Number} duration  时长毫秒
 */
export function getMillisecondToTimes(t) {
  if (!t) {
    return 0;
  }
  let tArr = t.split(":");
  let duration = 0;
  duration += tArr[3] * 10 * 1;
  duration += tArr[2] * 1000 * 1;
  duration += tArr[1] * 1000 * 60 * 1;
  duration += tArr[0] * 1000 * 60 * 60 * 1;
  return duration;
}

/**
 * 获取时间，精确到帧（1/25秒）；
 * @param  {Number} t 时间(单位秒)
 * @return {String} duration  时长（00:00:00:00）
 */
export function getFrame(t) {
  if (isNaN(t) || !t) {
    return "00:00:00:00";
  }
  let d = Math.round(t * 25) / 25;
  let duration = "",
    h = Math.floor(d / 60 / 60),
    m = Math.floor(d / 60) % 60,
    s = Math.floor(d) % 60,
    f = Math.floor(d.toFixed(2).split(".")[1] / 4);
  if (h > 0) {
    h > 9 ? (duration += h) : (duration += "0" + h);
    duration += ":";
  }
  m > 9 ? (duration += m) : (duration += "0" + m);
  duration += ":";
  s > 9 ? (duration += s) : (duration += "0" + s);
  duration += ":";
  f > 9 ? (duration += f) : (duration += "0" + f);
  return duration;
}

/**
 * 获取时间，精确到秒  100 -> 00:01:40
 * @param  {Number} t 时间(单位秒)
 * @return {String} duration  时长（00:00:00）
 */
export function getSecond(t) {
  if (isNaN(t) || !t) {
    return "00:00:00";
  }
  let d = Math.round(t % (60 * 60 * 24));
  let duration = "",
    h = Math.floor(d / 60 / 60),
    m = Math.floor(d / 60) % 60,
    s = Math.floor(d) % 60;
  h > 9 ? (duration += h) : (duration += "0" + h);
  duration += ":";
  m > 9 ? (duration += m) : (duration += "0" + m);
  duration += ":";
  s > 9 ? (duration += s) : (duration += "0" + s);
  return duration;
}

/**
 * 获取时长，精确到秒 处理到分 100 -> 01:40
 * @param  {Number} t 时间(单位秒)
 * @return {String} duration  时长（00:00）
 */
export function getSecond2Minute(t) {
  if (isNaN(t) || t < 0) {
    return "00:00";
  }
  let duration = "",
    m = Math.floor(t / 60),
    s = Math.floor(t % 60);
  m > 9 ? (duration += m) : (duration += "0" + m);
  duration += ":";
  s > 9 ? (duration += s) : (duration += "0" + s);
  return duration;
}
/**
 * 获取时长，精确到秒（00:00:00）-> 0秒 或者 0秒 ->（00:00:00）
 * @param    {String/Number} d 时长，（00:00:00)或者 0单位秒
 * @return   {String} duration  string->Number（00:00:00）-> 0秒 或者 Number->string 0秒 ->（00:00:00）
 */
export function getDuration(d) {
  let duration = "";
  if (!d) return "00:00:00";
  if (isNaN(d)) {
    let array = [];
    if (d.indexOf(":") >= 0) {
      array = d.split(":");
    } else {
      array = d.split("：");
    }
    if (array.length === 3) {
      duration = array[0] * 60 * 60 + array[1] * 60 + array[2] * 1;
    } else if (array.length === 4) {
      duration =
        array[0] * 60 * 60 + array[1] * 60 + array[2] * 1 + array[2] * 0.01;
    } else {
      duration = d;
    }
  } else {
    d = Math.ceil(Math.max(d, 0));
    let h = Math.floor(d / 60 / 60),
      m = Math.floor(d / 60) % 60,
      s = d % 60;
    h > 9 ? (duration += h) : (duration += "0" + h);
    duration += ":";
    m > 9 ? (duration += m) : (duration += "0" + m);
    duration += ":";
    s > 9 ? (duration += s) : (duration += "0" + s);
  }
  return duration;
}

/**
 * 获取时长，精确到秒  100 -> 1分40秒
 * @param  {Number} t 时间(单位秒)
 * @return {String} duration  时长（1h1分40秒）
 */
export function getSecondStr(t) {
  if (isNaN(t) || t === 0) {
    return "0秒";
  }
  if (t < 0) {
    t += 1 * 60 * 60 * 24;
  }
  let d = Math.round(t % (60 * 60 * 24));
  let duration = "",
    h = Math.floor(d / 60 / 60),
    m = Math.floor(d / 60) % 60,
    s = Math.floor(d) % 60;
  duration += `${h}时`;
  duration += `${m}分`;
  duration += `${s}秒`;
  return duration;
}

/**
 * 获取时长，精确到秒 加单位 100 -> 1m40s
 * @param  {Number} num 时间（s）
 * @return {String} 时间(带单位h,m,s)
 */
export function getSecondStrShort(num) {
  if (num >= 60 * 60) {
    return (
      Math.floor(num / (60 * 60)) +
      "h" +
      (Math.floor(num / 60) % 60 > 0
        ? Math.floor(num / 60) % 60 > 9
          ? (Math.floor(num / 60) % 60) + "m"
          : "0" + (Math.floor(num / 60) % 60) + "m"
        : "")
    );
  } else if (num >= 60) {
    return (
      Math.floor(num / 60) +
      "m" +
      (num % 60 > 0
        ? num % 60 > 9
          ? (num % 60) + "s"
          : "0" + (num % 60) + "s"
        : "")
    );
  } else {
    return num + "s";
  }
}

/**
 * requestAnimationFrame 无限循环的动画
 */
export const requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback, element) {
    window.setTimeout(function () {
      callback("goOn", +new Date(), element);
    }, 1000 / 60);
  };

/**
 * 深拷贝对象
 * @param  {Object} config 源对象
 * @return {Object}  拷贝完的对象
 */
export function cloneConfig(config) {
  let obj;
  if (config instanceof Array) {
    obj = [];
    for (let i = 0; i < config.length; i++) {
      if (typeof config[i] === "object") {
        obj[i] = cloneConfig(config[i]);
      } else {
        obj[i] = config[i];
      }
    }
  } else if (config instanceof Object) {
    obj = {};
    for (let i in config) {
      if (typeof config[i] === "object") {
        obj[i] = cloneConfig(config[i]);
      } else {
        obj[i] = config[i];
      }
    }
  }
  return obj;
}

/**
 * 格式化数字，三位加一个逗号
 * @param  {Number} num 数值(12345)
 * @return {String}（12,345）
 */
export function getThousands(num) {
  let str = num.toString();
  let reg =
    str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
  return str.replace(reg, "$1,");
}

/**
 * 函数节流方法
 * @param Function fn 调用函数
 * @param Number wait 多少秒内不允许重复点击
 */
var isLoading = false;
export function throttle(fn, wait = 200) {
  if (!isLoading) {
    isLoading = true;
    fn();
    setTimeout(() => {
      isLoading = false;
    }, wait);
  }
}
/**
 * 处理数字
 * @param num 需要处理的数字
 * @return number 返回的数字 查过万显示w
 */
export function getNumber(num) {
  let number = num;
  if (num > 100000) {
    number = 10 + "万+";
  } else if (num > 10000) {
    number = (num / 10000).toFixed(1) + "万";
  }

  return number;
}
/**
 * 检测手机浏览器版本
 * @return number 返回的数字 查过万显示w
 */

export function mobileBrowserType() {
  var u = navigator.userAgent;
  return {
    //移动终端浏览器版本信息
    trident: u.indexOf("Trident") > -1, // IE内核
    presto: u.indexOf("Presto") > -1, // opera内核
    webKit: u.indexOf("AppleWebKit") > -1, // 苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, // android终端或者uc浏览器
    iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf("iPad") > -1, // 是否iPad
    webApp: u.indexOf("Safari") == -1, // 是否web应该程序，没有头部与底部
    huawei: u.indexOf("HuaweiBrowser") > -1, // 是否华为浏览器
    weixin: u.indexOf("MicroMessenger") > -1, // 是否微信浏览器
  };
}

/**
 * 检测手机是否是全面屏
 * @return result true 或false ,返回true的话 则为全面屏
 */

export function judgeBigScreen() {
  let result = false;
  const rate = window.screen.height / window.screen.width;
  let limit = window.screen.height == window.screen.availHeight ? 1.8 : 1.65; // 临界判断值
  if (rate > limit) {
    result = true;
  }
  return result;
}

/**
 *  随机生成uuid
 *  @return   "748eea29-f842-4af9-a552-e1e1aa3ed979"
 * */
export function guid2() {
  function S4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

export function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}

/**
 * 数组根据父子关系处理成树结构 */
export function getTrees(list, parentId) {
  const parentObj = {};
  list.forEach((obj) => {
    if (!parentObj[obj.pid]) {
      parentObj[obj.pid] = [];
    }
    parentObj[obj.pid].push({ value: obj.id, title: obj.name });
  });
  return formatTree(parentObj, parentId);
}

function formatTree(parentObj, parentId) {
  if (!parentObj[parentId]) {
    return undefined;
  }
  let result = [];
  parentObj[parentId].forEach((obj) => {
    obj.children = formatTree(parentObj, obj.value);
    result.push(obj);
  });
  return result;
}

/**
 * 没有登陆时的跳转 */
export function gotoOrigin() {
  storage.set("signature");
  let host = storage.get("host");
  let url = storage.get("localUrl");
  window.open(`${host}/?redirect=${encodeURIComponent(url)}`, "_self");
}
