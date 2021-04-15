import React from "react";
import "./form-btn.styles.scss";
import { Link } from "react-router-dom";

function FormBtn() {
  return (
    <Link to="sign-up">
      <button className="btn">Get in Touch</button>
    </Link>
  );
}
export default FormBtn;
