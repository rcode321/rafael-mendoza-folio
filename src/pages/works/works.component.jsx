import React from "react";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { FaSass } from "react-icons/fa";
import { GrStripe } from "react-icons/gr";

import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiSocketDotIo } from "react-icons/si";

import ProjectImage2 from "../../assets/laptop-with-project-image3.png";
import ProjectImage1 from "../../assets/laptop-with-project-image2.png";
import Button from "../../components/button/button.component";

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
        <div className="Ecommerce-title">E-commerce platform</div>
        <p className="Ecommerce-subtitle-1">
          A simple Ecommerce website showcasing some functionalities and feature
          of ecommerce website.
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
        <Button />
      </div>
    </div>

    {/* project 2 */}
    <hr className="rounded" />
    <div className="projects-content" id="project1">
      <img
        className="projectimage-1"
        src={ProjectImage2}
        alt="projectimage-1"
      />
      <div className="content-1">
        <div className="Ecommerce-title">Social Media App</div>
        <p className="Ecommerce-subtitle-1">
          Social media app that you can create you’re own post, follow a user,
          and message each other who already using the app.
        </p>

        <p className="Ecommerce-subtitle-2">
          Here are a few technologies I've been working with this project:
        </p>
        <div className="content-2-icons">
          <span>
            <AiFillHtml5 className="html" style={{ color: "#DD4B25" }} /> HTML5
          </span>
          <span>
            <DiCss3 style={{ color: "#3658DE" }} /> Css
          </span>
          <span>
            <IoLogoJavascript style={{ color: "#F5DE19" }} /> Javascript
          </span>
          <span className="sass">
            <FaNodeJs style={{ color: "#87BF00" }} /> Nodejs
          </span>
          <span className="stripe">
            <DiMongodb style={{ color: "#13A44D" }} /> MongoDB
          </span>
          <span className="stripe">
            <SiSocketDotIo style={{ color: "#010101" }} /> Socket.io
          </span>
        </div>
        <Button />
      </div>
    </div>
  </div>
);

export default Works;
