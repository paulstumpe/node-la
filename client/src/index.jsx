import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

// main color scheme for the app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00796b',
    },
    secondary: {
      main: '#43a047',
    },
  },
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}> <App /> </MuiThemeProvider>, document.getElementById('app')
);