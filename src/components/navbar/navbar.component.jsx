import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";
import "./navbar.styles.scss";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [click, setClick] = useState(false);
  //   const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className={`navbar ${navbar ? "active navbar__link navbar" : ""}`}>
        <div>
          <NavHashLink
            to="/#"
            className="navbar-logo"
            onClick={closeMobileMenu}
            smooth
          >
            EPIC
          </NavHashLink>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <IoCloseSharp className="fa-close" />
          ) : (
            <GiHamburgerMenu className="fa-bar" />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavHashLink
              onClick={closeMobileMenu}
              exact
              activeClassName="navbar__link--active"
              className="navbar__link"
              smooth
              to="/#"
            >
              Home
            </NavHashLink>
          </li>

          <li className="nav-item">
            <NavHashLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              smooth
              onClick={closeMobileMenu}
              to="/#project"
            >
              Projects
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              onClick={closeMobileMenu}
              smooth
              to="/#services"
            >
              Services
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              onClick={closeMobileMenu}
              smooth
              to="/#contacts"
            >
              Contact
            </NavHashLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
