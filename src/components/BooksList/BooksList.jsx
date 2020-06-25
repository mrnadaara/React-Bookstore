import React from 'react';
import { connect } from 'react-redux'

class BooksList extends React.Component {
  render() {
    return (
      <div>
        <table>
          <td>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </td>

          <td>
            <tr></tr>
          </td>

        </table>
      </div>
    );
  }
}

export default connect(null)(BooksList)
