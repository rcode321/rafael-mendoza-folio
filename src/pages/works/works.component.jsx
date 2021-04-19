import React, { useEffect } from "react";
import AOS from "aos";
// import "aos/dist/aos.css";

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

import ProjectImage1 from "../../assets/project2.png";
import ProjectImage2 from "../../assets/project1.png";
import Button from "../../components/button/button.component";
import "./works.styles.scss";
import { HashLink } from "react-router-hash-link";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="project--container" id="project">
      <div className="featured-projects">featured projects</div>
      <hr className="rounded" />

      <div className="projects">
        <span className="projects projects__img " data-aos="zoom-in">
          <img className="myimage" src={ProjectImage1} alt="projectimage-1" />
        </span>
        <div className="projects__content" data-aos="zoom-in">
          <div className="projects__title">Shopping Cart</div>
          <p className="projects__subtitle">
            A simple Ecommerce website showcasing some functionalities and
            features of an ecommerce website.
          </p>
          <div className="projects__icons">
            <div className="projects__Iconitem">
              <span>
                <FaReact
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#5ED3F3",
                    color: "white",
                    padding: "5px",
                  }}
                  size={28}
                />{" "}
              </span>
            </div>

            <div className="projects__Iconitem">
              <span>
                <SiRedux
                  style={{
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#7248B6",
                    color: "white",
                    padding: "5px",
                  }}
                  size={25}
                />{" "}
              </span>
            </div>

            <div className="projects__Iconitem">
              <span>
                <SiFirebase
                  style={{
                    color: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#FFCB2B",
                    padding: "5px",
                  }}
                  size={28}
                />{" "}
              </span>
            </div>
            <div className="projects__Iconitem">
              <span>
                <FaSass
                  style={{
                    color: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#C76494",
                    padding: "5px",
                  }}
                  size={28}
                />{" "}
              </span>
            </div>
            <div className="projects__Iconitem">
              <span>
                <GrStripe
                  style={{
                    color: "white",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    backgroundColor: "#6772E5",
                    padding: "5px",
                  }}
                  size={28}
                />{" "}
              </span>
            </div>
          </div>
          <HashLink
            className="projects__btn"
            to={{ pathname: "https://bikes-avenue.herokuapp.com/" }}
            target="_blank"
          >
            {" "}
            <Button name="View Detals" />
          </HashLink>
        </div>
      </div>

      {/* project 2 */}

      <hr className="rounded2" />
      <div className="projects">
        <span
          className="projects projects__img"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
        >
          <img className="myimage" src={ProjectImage2} alt="projectimage-2" />
        </span>

        <div
          className="projects__content"
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="projects__title">Social Media App</div>
          <p className="projects__subtitle">
            Social media app that you can create your own post, follow a user,
            and message each other who are using the app.
          </p>

          <div className="projects__icons">
            <div className="projects__Iconitem">
              <span>
                <AiFillHtml5
                  style={{
                    color: "white",
                    backgroundColor: "#DD4B25",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  size={28}
                />{" "}
              </span>
            </div>
            <div className="projects__Iconitem">
              <span>
                <DiCss3
                  style={{
                    color: "white",
                    backgroundColor: "#254BDD",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  size={28}
                />{" "}
              </span>
            </div>
            <div className="projects__Iconitem">
              <span>
                <IoLogoJavascript
                  style={{
                    color: "white",
                    backgroundColor: "#EDD718",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  size={28}
                />
              </span>
            </div>
            <div className="projects__Iconitem">
              <span>
                <FaNodeJs
                  style={{
                    color: "white",
                    backgroundColor: "#7CB701",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  size={28}
                />
              </span>
            </div>
            <div className="projects__Iconitem">
              <span>
                <DiMongodb
                  style={{
                    color: "white",
                    backgroundColor: "#108D4D",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  size={28}
                />
              </span>
            </div>
            <div className="projects__Iconitem">
              <span>
                <SiSocketDotIo
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    width: "30px",
                    height: "30px",
                    padding: "5px",
                  }}
                  size={28}
                />
              </span>
            </div>
          </div>
          <HashLink
            className="projects__btn"
            to={{ pathname: "https://konneckjs.herokuapp.com/" }}
            target="_blank"
          >
            {" "}
            <Button name="View Details" />
          </HashLink>
        </div>
      </div>
    </div>
  );
};

export default Works;
