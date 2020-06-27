import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
    <td><button type="button" onClick={handleRemoveBook}>Delete</button></td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
  handleRemoveBook: PropTypes.func.isRequired,
};

Book.defaultProps = {
  book: {},
};

export default Book;
