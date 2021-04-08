import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import "./header.styles.scss";

const Header = () => {
  const [navbarcontainer, setNavbar] = useState(false);

  const changeBackground = () => {
    // console.log(window.scrollY);
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={`navbarcontainer  
        ${navbarcontainer ? "active navbar__link navbar " : ""}`}
    >
      <div className="nav">
        <span className="logo">Logo</span>

        <nav className="navbar">
          <NavHashLink
            exact
            activeClassName="navbar__link--active"
            className="navbar__link"
            smooth
            to="/#"
          >
            Home
          </NavHashLink>

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
            to="/#myservice"
          >
            My Services
          </NavHashLink>

          <NavHashLink
            activeClassName="navbar__link--active"
            className="navbar__link"
            smooth
            to="/#contacts"
          >
            Contact
          </NavHashLink>
        </nav>
      </div>
    </nav>
  );
};
export default Header;
