import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import '../css/app.css';
import App from './components/App';

const theme = createMuiTheme();

const renderApp = (Component) => {
  render(
    <MuiThemeProvider theme={theme}>
      <Component />
    </MuiThemeProvider>,
    document.getElementById('root'),
  );
};

renderApp(App);

// Hot Module Replacemen API
if (module.hot) {
  module.hot.accept();
}
