import React from "react";
import { Provider } from "react-redux";
import App from "./app";
import configureAppStore from "./store";

const store = configureAppStore();

export const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
