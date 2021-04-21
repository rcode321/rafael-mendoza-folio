import React from "react";
import OverlayLines from "../../assets/bg-stripes.svg";
import "./testimonials.styles.scss";
import ReferenceImage from "../../assets/mark dino.jpg";
const Testimonials = () => (
  <div>
    <div className="Testimonials-container">
      <img className="OverlayLines" src={OverlayLines} alt="OverlayLines" />
      <div className="quote">
        <div className="testimonials-content">
          <p className="message">
            "It is a distinct pleasure for me to recommend Rafael to any and all
            interested in building quality websites, He is a telented hard
            working individual who has a lot potential to become a great
            developer. Highly recommended."
          </p>
        </div>
        <div className="quote-img">
          <img
            className="Referenceimg"
            src={ReferenceImage}
            alt="Referenceimg"
          />
          <p className="client-name">Mark Dino</p>
          <a rel="noreferrer" href="https://www.markdino.com/" target="_blank">
            Junior Engineer @ Damstra
          </a>
        </div>
      </div>
    </div>
    <p className="ready-to-talk">Ready To Talk?</p>
  </div>
);

export default Testimonials;
