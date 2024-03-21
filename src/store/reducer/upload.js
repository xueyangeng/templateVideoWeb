const reducer = (state = [], action) => {
  console.log('%c action', 'color: #b91f81', action)
  switch (action.type) {
    case 'ADD':
      return [action.file, ...state]
    case 'SUCCESS':
      const ns = []
      state.map((item) => {
        if (item.uuid == action.file.uuid) {
          ns.push(action.file)
        } else {
          ns.push(item)
        }
      })
      return ns
    case 'UPLOADING':
      const us = []
      state.map((item) => {
        if (item.uuid == action.file.uuid) {
          const nf = {...item, isprogress: true, progress: action.file.progress || item.progress, uperror: false}
          us.push(nf)
        } else {
          us.push(item)
        }
      })
      return us
    case 'UPERROR':
      const el = []
      state.map((item) => {
        if (item.uuid == action.file.uuid) {
          const ef = {...item, uperror: true}
          el.push(ef)
        } else {
          el.push(item)
        }
      })
      return el
    default:
      return state
  }
}

export default reducer