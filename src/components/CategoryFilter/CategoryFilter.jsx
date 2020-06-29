import React from 'react';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'],
    };
  }

  render() {
    const { category } = this.state;
    return (
      <select name="category" onChange={this.handleChange} value={category}>
        {category.map(category => (
          <option key={category}>{ category }</option>
        ))}
      </select>
    );
  }
}

export default CategoryFilter;
