import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import ProjectImage1 from "../../assets/Bikes2000 screenshot.png";

import "./works.styles.scss";

const Works = () => (
  <div className="works-container">
    <span>featured projects.</span>
    <span className="horizontal-line"></span>
    <div className="works">
      <img src={ProjectImage1} alt="projectimage-1" />
      <div className="">
        <span>Ecommerce Bikes2000.</span>
        <p>
          A simple Ecommerce website showcasing some functionalities of a
          shopping website.
        </p>
        <p>Here are some technologies i used in project.</p>
      </div>
      <div>
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faReact} />
      </div>
    </div>
  </div>
);

export default Works;
