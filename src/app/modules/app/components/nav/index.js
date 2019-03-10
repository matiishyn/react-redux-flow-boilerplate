import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.scss';

export const Nav = props => {
  const { profileData } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <nav className="nav">
          <NavLink className="nav-link" exact activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="/about">
            About
          </NavLink>
        </nav>

        <span className="navbar-text">Hello, {profileData.name}</span>
      </div>
    </nav>
  );
};
