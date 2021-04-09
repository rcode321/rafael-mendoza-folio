import React from "react";
import "./myservices.styles.scss";
import Bgseperator from "../../assets/Hero BG2.png";
import { RiPencilRulerFill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";

const Myservices = () => {
  return (
    <div className="services-container" id="myservice">
      <div className="myservices-title">
        <p>my services</p>
      </div>
      <div className="service-content">
        <img className="Bgseperator" src={Bgseperator} alt="Bgseperator" />
        <div className="tech-icon-container">
          <div className="tech-icon">
            <span className="pen">
              <RiPencilRulerFill style={{ color: "#ffca42" }} />
              <p className="pen-title">Web Design</p>
              <p className="pen-subtitle">
                A website should be designed for all people who will use it, and
                should be user friendly as the main focus.
              </p>
            </span>
            <span className="pc">
              <MdComputer style={{ color: "#ffca42" }} />
              <p className="pc-title">Web Development</p>
              <p className="pc-subtitle">
                A website should be designed for all the people who will use it,
                and user friendly is the main focused.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myservices;
