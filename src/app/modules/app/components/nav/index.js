import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = props => {
  // const {  } = props;
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <nav className="nav">
          <NavLink className="nav-link" activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active" to="./about">
            About
          </NavLink>
        </nav>
      </div>
    </nav>
  );
};
