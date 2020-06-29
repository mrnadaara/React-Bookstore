import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Book from '../../components/Book/Book';
import { removeBook } from '../../actions';

const BooksList = ({ books, handleRemoveBook }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          books.map(book => (
            <Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(book)} />
          ))
        }
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  handleRemoveBook: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  handleRemoveBook: () => {},
};

const mapStateToProps = ({ books }) => ({
  books,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleRemoveBook: removeBook,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
