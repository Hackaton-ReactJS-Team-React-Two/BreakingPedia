import { combineReducers } from "redux"
import charactersReducer from './charactersReducer'
import quotesReducer from './quotesReducer'
import commentsReducer from './commentsReducer'

export default combineReducers({
  charactersReducer,
  quotesReducer,
  commentsReducer,
})