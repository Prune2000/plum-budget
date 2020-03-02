import { combineReducers } from 'redux'
import income from './income'
import expense from './expense'
import user from './user'
import month from './month'
import year from './year'

export default combineReducers({
  month,
  year,
  user,
  income,
  expense
})