import React from 'react';

class BooksForm extends React.Component {
  render() {
    const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
    return (
      <div>
        <form>
          <input name="book-title"  value="book-title"/>
          <select name="category">
            { categories.map(category => (
              <option key={category} >{ category }</option>
            )) }
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default BooksForm
