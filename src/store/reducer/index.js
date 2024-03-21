import { combineReducers } from 'redux'
import upload from './upload'
import other from './other'

export default combineReducers({
  upload,
  other
})