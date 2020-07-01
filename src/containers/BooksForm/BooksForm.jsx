import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createBook } from '../../actions';

import './BooksForm.scss';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: 'Action',
    };
  }

  handleSubmit = event => {
    const { createBook } = this.props;
    const { title, category } = this.state;
    event.preventDefault();
    if (title !== '') {
      createBook({ title, category });
      this.setState({
        title: '',
        category: 'Action',
      });
    }
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { title, category } = this.state;
    const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div className="form-container">
        <h2>Add new book</h2>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="title" placeholder="Type in a book" value={title} />
          <select name="category" onChange={this.handleChange} value={category}>
            {categories.map(category => (
              <option key={category}>{ category }</option>
            ))}
          </select>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators({
  createBook,
}, dispatch);

export default connect(null, mapDispatchToProps)(BooksForm);
