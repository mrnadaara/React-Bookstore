import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import Book from '../../components/Book/Book';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import { removeBook, changeFilter } from '../../actions';

class BooksList extends React.Component {
  checkFilter = () => {
    const { filter, books, handleRemoveBook } = this.props;
    if (filter === 'All') {
      return books.map(book => (
        <Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(book)} />
      ));
    }
    return books.filter(book => book.category === filter).map(book => (
      <Book key={book.id} book={book} handleRemoveBook={() => handleRemoveBook(book)} />
    ));
  };

  render() {
    const { handleFilterChange } = this.props;
    return (
      <div>
        <CategoryFilter handleFilterChange={handleFilterChange} />
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
              this.checkFilter()
            }
          </tbody>
        </table>
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  filter: PropTypes.string,
  handleRemoveBook: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

BooksList.defaultProps = {
  books: [],
  filter: '',
};

const mapStateToProps = ({ books, filter }) => ({
  books, filter,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  handleRemoveBook: removeBook,
  handleFilterChange: changeFilter,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
