import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, CircularProgress } from '@mui/material'
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

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
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<CircularProgress />}>
          <App name={myName} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

