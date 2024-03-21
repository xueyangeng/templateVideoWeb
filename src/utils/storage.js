/**
 * 封装本地存储
 */
let store = {
  storage: window.localStorage,
  session: {
    storage: window.sessionStorage,
  },
};

const api = {
  /**
   * 存储数据
   * @param {string} key [键]
   * @param {string} val [值]
   * @returns {string} val
   */
  set(key, val) {
    if (this.disabled) {
      return;
    }
    if (val === undefined) {
      return this.remove(key);
    }
    this.storage.setItem(key, serialize(val));
    return val;
  },

  /**
   * 获取数据
   * @param {string} key [键]
   * @param {string} def [默认值]
   * @returns {string} def or val
   */
  get(key, def) {
    if (this.disabled) {
      return def;
    }
    let val = deserialize(this.storage.getItem(key));
    return val === undefined ? def : val;
  },

  /**
   * 判断是否存在该数据
   * @param {string} key [键]
   * @returns {boolean} true or false
   */
  has(key) {
    return this.get(key) !== undefined;
  },

  /**
   * 删除数据
   * @param {string} key [键]
   */
  remove(key) {
    if (this.disabled) {
      return;
    }
    this.storage.removeItem(key);
  },

  /**
   * 清空数据
   */
  clear() {
    if (this.disabled) {
      return;
    }
    this.storage.clear();
  },

  /**
   * 获取全部数据
   * @returns {string}
   */
  getAll() {
    if (this.disabled) {
      return null;
    }
    let ret = {};
    this.forEach((key, val) => {
      ret[key] = val;
    });
    return ret;
  },

  forEach(callback) {
    if (this.disabled) {
      return;
    }
    for (let i = 0; i < this.storage.length; i++) {
      let key = this.storage.key(i);
      callback(key, this.get(key));
    }
  },
};

Object.assign(store, api);

Object.assign(store.session, api);

function serialize(val) {
  return JSON.stringify(val);
}

function deserialize(val) {
  if (typeof val !== "string") {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}

export default store;
