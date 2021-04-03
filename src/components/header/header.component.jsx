import React from "react";
import { Link, Route, NavLink, Switch } from "react-router-dom";

import "./header.styles.scss";

const Header = () => {
  return (
    <nav className="navbar-container">
      <div className="nav">
        <span className="logo">Logo</span>
        <nav className="navbar">
          <NavLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/works"
          >
            Works
          </NavLink>
          <NavLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            to="/contacts"
          >
            Contacts
          </NavLink>
        </nav>
      </div>
    </nav>
  );
};
export default Header;
