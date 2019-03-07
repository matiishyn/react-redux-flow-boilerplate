import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from '../nav';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;

export const App = () => {
  // const {  } = props;
  return (
    <div>
      <Nav />

      <div className="container">
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </div>
    </div>
  );
};
