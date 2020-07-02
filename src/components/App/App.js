import React from 'react';
import BooksForm from '../../containers/BooksForm/BooksForm';
import BooksList from '../../containers/BooksList/BooksList';
import Header from '../Header/Header';

import './App.scss';

const App = () => (
  <div>
    <Header />
    <div className="app-container">
      <div className="books-list-overflow">
        <BooksList />
      </div>
      <div className="books-form-container">
        <BooksForm />
      </div>
    </div>
  </div>
);

export default App;
