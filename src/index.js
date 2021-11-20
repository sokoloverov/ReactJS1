import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material'
import { Provider } from 'react-redux';
import { store } from './store';

import '../src/style/index.css';
import { App } from './App';

const myName = 'AlexMozg';
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgba(34, 150, 42, 1)'
    },
    secondary: {
      main: 'rgba(150, 113, 34, 1)'
    }
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}><App name={myName} /></Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

