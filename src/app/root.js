import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import configureAppStore from "./store";

const store = configureAppStore();

const App = () => <h1>App</h1>;
const About = () => <h1>About</h1>;

export const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/about" component={About} />
      </div>
    </Router>
  </Provider>
);
