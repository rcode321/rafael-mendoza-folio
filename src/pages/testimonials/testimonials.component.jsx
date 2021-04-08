import React from "react";
import OverlayLines from "../../assets/bg-stripes.svg";
import "./testimonials.styles.scss";

const Testimonials = () => (
  <div className="Testimonials-container">
    <img className="OverlayLines" src={OverlayLines} alt="OverlayLines" />
    <blockquote className="quote">
      <div className="testimonials-content">
        <p className="message">
          Seb is not only great for design and development, he is a problem
          solver who always delivers an exceptional quality of work. Highly
          recommended.
        </p>
      </div>
    </blockquote>
  </div>
);

export default Testimonials;
