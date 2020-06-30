import React from 'react';
import PropTypes from 'prop-types';

import './Book.scss';

const Book = ({ book, handleRemoveBook }) => (
  <tr className="book-container">
    <td>
      <h3>{ book.category }</h3>
      <h1>{ book.title }</h1>
    </td>
    <td className="button-container"><button type="button" onClick={handleRemoveBook}>Delete</button></td>
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
