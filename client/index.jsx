import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import 'font-awesome/scss/font-awesome.scss';
import Root from './containers/Root';
import './_index.scss';

const rootElement = document.getElementById('root');

function renderApp(App) {
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootElement,
  );
}

if (module.hot) {
  module.hot.accept(
    './containers/Root',
    () => {
      const root = require('./containers/Root');
      renderApp(root.default);
    });
}

renderApp(Root);
