import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducers = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export default rootReducers;
