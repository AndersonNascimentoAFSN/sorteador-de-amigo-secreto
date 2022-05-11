import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ThemeProvider, theme } from './theme/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
