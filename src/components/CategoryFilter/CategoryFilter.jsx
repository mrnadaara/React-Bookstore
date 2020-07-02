import React from 'react';
import PropTypes from 'prop-types';

import './CategoryFilter.scss';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
    };
  }

  handleFilterChange = event => {
    const { handleFilterChange } = this.props;
    handleFilterChange(event.target.value);
  }

  render() {
    const { category } = this.state;
    return (
      <div className="filter-container">
        <h1>Filter</h1>
        <select name="category" onChange={this.handleFilterChange}>
          {category.map(category => (
            <option key={category}>{ category }</option>
          ))}
        </select>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
