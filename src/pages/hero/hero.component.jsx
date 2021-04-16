import React, { useRef } from "react";
import Typical from "react-typical";
// import imageProfile from "../../assets/image.png";
import Myimage from "../../assets/hero image.png";
import "./hero.styles.scss";

const Hero = () => (
  <div className="hero-container">
    <div className="site-banner_inner">
      <div className="site-banner_content">
        <h1>Hello.</h1>
        <p className="site-banner-p">
          My name is Rafael Mendoza.
          <Typical
            loop={Infinity}
            className="aniText"
            wrapper="b"
            steps={
              useRef([
                "Frontend Developer💻",
                1000,
                " Designer ✒️",
                1000,
                " YouTuber😁",
                1000,
              ]).current
            }
          />
        </p>
        <p>Here is my portfolio.</p>
      </div>
      <figure className="my-image-container">
        <img className="imageProfile" src={Myimage} alt="imageProfile" />
      </figure>
    </div>
  </div>
);

export default Hero;
