import { CREATE_BOOK, REMOVE_BOOK } from './types';

const getRandomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const createBook = book => ({
  type: CREATE_BOOK,
  payload: {
    ...book,
    id: getRandomInt(),
  },
});

export const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: book,
});
