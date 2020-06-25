import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state;
    default:
      return state;
  }
}

export default booksReducer;
