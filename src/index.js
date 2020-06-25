import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import './assets/index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import rootReducers from './reducers'

const state = {
  books: [{
    id: Math.random(),
    title: 'To Kill a Mocking Bird',
    category: 'History'
  },{
    id: Math.random(),
    title: 'Rich Dad, Poor Dad',
    category: 'Learning'
  },{
    id: Math.random(),
    title: 'To Kill a Mocking Bird',
    category: 'History'
  }]
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducers)}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
