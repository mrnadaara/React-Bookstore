import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string),
};

Book.defaultProps = {
  book: {},
};

export default Book;
