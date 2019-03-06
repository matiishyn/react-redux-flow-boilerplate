import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Routes } from "./app/routes";
import configureAppStore from "./app/store";

const store = configureAppStore();

const el = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  el
);
