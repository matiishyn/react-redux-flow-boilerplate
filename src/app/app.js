import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Test = () => <h1>App</h1>;
const About = () => <h1>About</h1>;

export const App = () => (
  <Router>
    <div>
      <Route path="/" component={Test} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
