import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { GrStripe } from "react-icons/gr";

import ProjectImage1 from "../../assets/laptop-with-project-image2.png";

import "./works.styles.scss";

const Works = () => (
  <div className="project1-container">
    <div className="featured-projects">
      featured projects.
      <hr className="rounded" />
    </div>

    <div className="projects-content" id="project1">
      <img
        className="projectimage-1"
        src={ProjectImage1}
        alt="projectimage-1"
      />
      <div className="content-1">
        <div className="Ecommerce-title">e-commerce platform</div>
        <p className="Ecommerce-subtitle-1">
          A simple Ecommerce website showcasing some functionalities and feature
          of a shopping/ecommerce website.
        </p>

        <p className="Ecommerce-subtitle-2">
          Here are a few technologies I've been working with this project:
        </p>
        <div className="content-2-icons">
          <span>
            <FaReact className="react" style={{ color: "#5ED3F3" }} /> React
          </span>
          <span>
            <SiRedux style={{ color: "#7248B6" }} /> Redux
          </span>
          <span>
            <SiFirebase style={{ color: "#FFCA2A" }} /> Firebase
          </span>
          <span className="sass">
            <FaSass style={{ color: "#C76494" }} /> Sass
          </span>
          <span className="stripe">
            <GrStripe style={{ color: "#6772E5" }} /> Stripe
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default Works;
