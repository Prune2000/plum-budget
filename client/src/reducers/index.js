import { combineReducers } from 'redux'
import income from './income'
import expense from './expense'
import user from './user'

export default combineReducers({
  user,
  income,
  expense
})