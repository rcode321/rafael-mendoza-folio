import React from "react";
// import { AiFillGithub } from "react-icons/ai";

import "./button.styles.scss";

const Button = ({ children, icon, ...otherProps }) => (
  <button className={`${icon ? "github-code-btn" : ""} btn`} {...otherProps}>
    {children}
  </button>
);

export default Button;
