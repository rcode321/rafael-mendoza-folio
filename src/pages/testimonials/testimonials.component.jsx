import React from "react";
import OverlayLines from "../../assets/bg-stripes.svg";
import "./testimonials.styles.scss";
import ReferenceImage from "../../assets/unnamed.jpg";
const Testimonials = () => (
  <div>
    <div className="Testimonials-container">
      <img className="OverlayLines" src={OverlayLines} alt="OverlayLines" />
      <div className="quote">
        <div className="testimonials-content">
          <span className="testimonials">Testimonials</span>
          <p className="testimonials-subtitle">
            People I've worked with have said some nice things...
          </p>
          <p className="message">
            "Rafael is not only great for design and development, he is a
            problem solver who always delivers an exceptional quality of work.
            Highly recommended".
          </p>
        </div>
        <div className="quote-img">
          <img
            className="Referenceimg"
            src={ReferenceImage}
            alt="Referenceimg"
          />
          <p className="client-name">Jaime Alano</p>
          <a href="#/" target="_blank">
            Owner Roblox Studio
          </a>
        </div>
      </div>
    </div>
    <p className="ready-to-talk">Ready To Talk?</p>
  </div>
);

export default Testimonials;
