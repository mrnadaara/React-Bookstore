import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './assets/index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import rootReducers from './reducers';

const getRandomInt = () => {
  const min = Math.ceil(0);
  const max = Math.floor(100);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const state = {
  books: [
    {
      id: getRandomInt(),
      title: 'To Kill a Mocking Bird',
      category: 'History',
    },
    {
      id: getRandomInt(),
      title: 'Rich Dad, Poor Dad',
      category: 'Learning',
    },
    {
      id: getRandomInt(),
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
