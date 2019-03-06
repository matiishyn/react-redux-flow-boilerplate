import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { App } from './app';
import configureAppStore from './store';

const store = configureAppStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default hot(Root);
