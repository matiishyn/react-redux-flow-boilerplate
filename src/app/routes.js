import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => <h1>App</h1>;
const About = () => <h1>About</h1>;

export const Routes = () => (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/about" component={About} />
    </div>
  </Router>
);
