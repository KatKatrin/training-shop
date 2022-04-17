import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';

import rootWatcher from './services/saga/rootWatcher';





const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

// const store = createStore(reducer, 
//                           compose(applyMiddleware(sagaMiddleware),
//                           window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//                         );

sagaMiddleware.run(rootWatcher);


ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <App /> 
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


