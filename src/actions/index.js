import { v4 as uuid } from 'uuid';
import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './types';

const getRandomId = () => uuid();

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    ...book,
    id: getRandomId(),
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});
