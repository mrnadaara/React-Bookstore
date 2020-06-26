import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducers = combineReducers({
  books: booksReducer,
});

export default rootReducers;
