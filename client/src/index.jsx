import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#2e7d32',
    },
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>, 
  document.getElementById('app')
);