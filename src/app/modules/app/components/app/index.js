import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Nav } from '../nav';

const Home = () => <h1>Home23</h1>;
const About = () => <h1>About</h1>;

export class App extends Component {
  componentDidMount = () => {
    const { getProfile } = this.props;
    getProfile();
  };

  render() {
    const { profileData } = this.props;
    return (
      <>
        <Nav profileData={profileData} />

        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </>
    );
  }
}
