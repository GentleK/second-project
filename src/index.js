import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
//import ReactDOM from 'react-dom';
//import AppClass from './AppClass';

import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/*
ReactDOM.render(
  <React.StrictMode>
      <AppClass />
  </React.StrictMode>,
  document.getElementById('root')
)
*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
