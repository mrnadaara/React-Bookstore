import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import rootReducers from './reducers';

const getRandomId = () => uuid();

const state = {
  books: [
    {
      id: getRandomId(),
      title: 'To Kill a Mocking Bird',
      category: 'History',
    },
    {
      id: getRandomId(),
      title: 'Rich Dad, Poor Dad',
      category: 'Learning',
    },
    {
      id: getRandomId(),
      title: 'Hunger Games',
      category: 'Action',
    },
  ],
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducers, state)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
