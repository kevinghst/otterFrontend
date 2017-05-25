import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import {getData} from './actions/data_actions';

document.addEventListener('DOMContentLoaded', () => {

  window.store = configureStore();
  window.getData = getData;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
