import booksReducer from './books'
import { combineReducers } from 'redux'

const rootReducers = combineReducers({
  books:booksReducer
})

export default rootReducers
