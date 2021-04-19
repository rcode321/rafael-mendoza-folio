import React, { useEffect } from "react";
import aos from "aos";

import "./myservices.styles.scss";
import Bgseperator from "../../assets/Bgseperator.jpg";
import Myservices1 from "../../assets/myservices-1.svg";
import Myservices2 from "../../assets/myservices-2.svg";

const Myservices = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <div className="services-container" id="services">
      <div className="myservices-title">
        <p>my services</p>
      </div>
      <div className="service-content">
        <img className="Bgseperator" src={Bgseperator} alt="Bgseperator" />
        <div className="tech-icon-container">
          <div className="tech-icon">
            <span className="pen">
              <div className="myservices-1">
                <img src={Myservices1} alt="myservices-1" />
              </div>
              <p className="pen-title">Web Design</p>
              <p className="pen-subtitle">
                A website should be designed for all people who will use it, and
                should be user friendly as the main focus.
              </p>
            </span>
            <span className="pc">
              <div className="myservices-2">
                <img src={Myservices2} alt="myservices2" />
              </div>
              {/* <RiComputerLine style={{ color: "#ffca42" }} />*/}
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
