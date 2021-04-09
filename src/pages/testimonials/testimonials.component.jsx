import React from "react";
import OverlayLines from "../../assets/bg-stripes.svg";
import "./testimonials.styles.scss";
import ReferenceImage from "../../assets/unnamed.jpg";
const Testimonials = () => (
  <div>
    <div className="Testimonials-container">
      <img className="OverlayLines" src={OverlayLines} alt="OverlayLines" />
      <blockquote className="quote">
        <div className="testimonials-content">
          <p className="message">
            Rafael is not only great for design and development, he is a problem
            solver who always delivers an exceptional quality of work. Highly
            recommended.
          </p>
        </div>
        <div className="quote-img">
          <cite>
            <img
              className="Referenceimg"
              src={ReferenceImage}
              alt="Referenceimg"
            />
            <strong>Jaime Alano</strong>
            <a href="#/" target="_blank">
              Owner Roblox Studio
            </a>
          </cite>
        </div>
      </blockquote>
    </div>
    <p className="ready-to-talk">Ready To Talk?</p>
  </div>
);

export default Testimonials;
