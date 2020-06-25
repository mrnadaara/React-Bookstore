import React from 'react';
import PropTypes from 'prop-types'

const Book = ({ book }) => (
  <tr>{ book }</tr>
)

Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.string)
}

Book.defaultProps = {
  book: {

  }
}

export default Book
