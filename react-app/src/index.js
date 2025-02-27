import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './common.scss';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import * as serviceWorker from './serviceWorker';
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();