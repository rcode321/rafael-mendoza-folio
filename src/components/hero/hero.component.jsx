import React from "react";

import imageProfile from "../../assets/image.png";

import "./hero.styles.scss";

const Hero = () => (
  <div className="hero-container">
    <div className="site-banner_inner">
      <div className="site-banner_content">
        <h1>Hello.</h1>
        <p>
          My name is Rafael Mendoza. I’m a Frontend Developer and heres my
          portfolio.
        </p>
      </div>
      <figure className="my-image-container">
        <img className="imageProfile" src={imageProfile} alt="imageProfile" />
      </figure>
    </div>
  </div>
);

export default Hero;
