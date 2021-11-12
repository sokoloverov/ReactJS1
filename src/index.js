import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material'

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
      <App name={myName} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

