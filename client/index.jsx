import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import './index.scss';

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
    () => renderApp(require('./containers/Root').default)
  );
}

renderApp(Root);
