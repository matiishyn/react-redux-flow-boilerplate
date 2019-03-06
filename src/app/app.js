import React from "react";
// import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Test = () => <h1>App23</h1>;
const About = () => <h1>About</h1>;

export const App = () => (
  <Router>
    <div>
      <Route path="/" component={Test} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
