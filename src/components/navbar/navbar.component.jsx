import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
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
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className={`navbar ${navbar ? "active navbar__link navbar" : ""}`}>
        <div className="menu-icon" onClick={handleClick}>
          {click ? (
            <IoCloseSharp className="fa-close" />
          ) : (
            <GiHamburgerMenu className="fa-bar" />
          )}
        </div>
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          EPIC
        </Link>
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

          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavHashLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              smooth
              onClick={closeMobileMenu}
              to="/#project1"
            >
              Projects
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              smooth
              to="/#myservice"
            >
              Services
            </NavHashLink>
          </li>
          <li className="nav-item">
            <NavHashLink
              activeClassName="navbar__link--active"
              className="navbar__link"
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
