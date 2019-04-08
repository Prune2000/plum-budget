import { combineReducers } from 'redux'
import income from './income'
import expense from './expense'

export default combineReducers({
  income,
  expense
})