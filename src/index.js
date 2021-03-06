import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#659699'
    }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
