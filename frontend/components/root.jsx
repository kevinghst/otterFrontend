import React from 'react';
import ListContainer from './list/list_container.js';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';

export default function Root({store}){
  return (
    <Provider store={ store }>
      <Router>
        <Route path="/" component={ ListContainer }/>
      </Router>
    </Provider>
  );
}
