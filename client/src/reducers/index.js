import { combineReducers } from 'redux'
import income from './income'
import expense from './expense'
import user from './user'
import month from './month'

export default combineReducers({
  month,
  user,
  income,
  expense
})