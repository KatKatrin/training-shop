import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';






ReactDOM.render(
  <React.StrictMode>
    <div className='app' data-test-id="app">
      <App /> 
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


