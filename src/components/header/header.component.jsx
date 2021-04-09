import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import "./header.styles.scss";

const Header = () => {
  const [navbarcontainer, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 500) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav
      className={`navbarcontainer  
        ${navbarcontainer ? "active navbar__link navbar " : ""}`}
    >
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? <GrClose /> : <GiHamburgerMenu />} />
      </div>
      <div className={click ? "nav-active" : "nav"}>
        <span className="logo">Logo</span>

        <nav className="navbar">
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
