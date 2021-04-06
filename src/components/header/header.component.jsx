import React from "react";
// import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Scrollspy from "react-scrollspy";
import "./header.styles.scss";

const Header = () => {
  return (
    <nav className="navbar-container">
      <div className="nav">
        <span className="logo">Logo</span>
        <nav className="navbar">
          <NavHashLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            smooth
            to="/#home"
          >
            Home
          </NavHashLink>

          <Scrollspy items={["about"]} currentClassName="navbar__link--active">
            <NavHashLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              smooth
              to="/#about"
            >
              About
            </NavHashLink>
          </Scrollspy>
          <NavHashLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            smooth
            to="/#project1"
          >
            Works
          </NavHashLink>

          <NavHashLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            smooth
            to="/#contacts"
          >
            Contacts
          </NavHashLink>
        </nav>
      </div>
    </nav>
  );
};
export default Header;
