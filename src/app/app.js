import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Test = () => <h1>App</h1>;
const About = () => <h1>About</h1>;

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Test} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);

export default hot(App);
