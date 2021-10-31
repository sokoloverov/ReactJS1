import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style/index.css';
import App from './App';


const myName = 'AlexMozg';

ReactDOM.render(
  <React.StrictMode>
    <App name={myName} />
  </React.StrictMode>,
  document.getElementById('root')
);

