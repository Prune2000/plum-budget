import { combineReducers } from 'redux'
import income from './income'
import expense from './expense'
import user from './user'
import filter from './filter'

export default combineReducers({
  filter,
  user,
  income,
  expense
})