// import { createStore } from '../node_modules/redux/es/redux.js'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer, {upload: [], other: []})
export default store