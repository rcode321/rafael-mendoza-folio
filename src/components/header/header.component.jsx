import React from "react";

import "./header.styles.scss";

const Header = () => (
  <nav className="navbar-container">
    <div className="nav">
      <span className="logo">Logo</span>
      <ul className="navbar-link">
        <li>Home</li>
        <li>About</li>
        <li>Works</li>
        <li>Contacts</li>
      </ul>
    </div>
  </nav>
);

export default Header;
