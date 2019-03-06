import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Provider } from 'react-redux';
import { Router } from './router';
import configureAppStore from './store';

const store = configureAppStore();

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default hot(App);
