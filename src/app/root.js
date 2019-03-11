import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Router } from 'app/router';
import configureAppStore from 'app/store';

const store = configureAppStore();

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default hot(Root);
