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
import { HashLink } from "react-router-hash-link";

const Works = () => (
  <div className="project1-container">
    <div className="featured-projects">
      featured projects
      <hr className="rounded" />
    </div>

    <div className="projects-content" id="project">
      <span className="image2-container">
        <img className="image2" src={ProjectImage1} alt="projectimage-1" />
      </span>
      <div className="content-1">
        <div className="Ecommerce-title">Shopping Cart</div>
        <p className="Ecommerce-subtitle-1">
          A simple Ecommerce website showcasing some functionalities and
          features of an ecommerce website.
        </p>

        <div className="content-2-icons">
          <div className="icon-list__img">
            <span>
              <FaReact
                style={{
                  color: "#5ED3F3",
                  paddingTop: 3,
                  paddingRight: 15,
                }}
                size={28}
              />{" "}
            </span>
          </div>

          <div className="icon-list__img">
            <span>
              <SiRedux
                style={{
                  color: "#7248B6",
                  paddingTop: 3,
                  paddingRight: 15,
                }}
                size={28}
              />{" "}
            </span>
          </div>

          <div className="icon-list__img">
            <span>
              <SiFirebase
                style={{
                  color: "#FFCA2A",
                  paddingTop: 3,
                  paddingRight: 15,
                }}
                size={28}
              />{" "}
            </span>
          </div>
          <div className="icon-list__img">
            <span>
              <FaSass
                style={{
                  color: "#C76494",
                  paddingTop: 3,
                  paddingRight: 15,
                }}
                size={28}
              />{" "}
            </span>
          </div>
          <div className="icon-list__img">
            <span>
              <GrStripe
                style={{
                  color: "#6772E5",
                  paddingTop: 3,
                  paddingRight: 15,
                  paddingLeft: 10,
                }}
                size={28}
              />{" "}
            </span>
          </div>
        </div>
        <div className="icon-list-container ecom"></div>
        <HashLink
          to={{ pathname: "https://bikes-avenue.herokuapp.com/" }}
          target="_blank"
        >
          {" "}
          <Button name="View Detals" />
        </HashLink>
      </div>
    </div>

    {/* project 2 */}

    <hr className="rounded-2" />
    <div className="projects-content">
      <span className="image2-container">
        <img className="image2" src={ProjectImage2} alt="projectimage-1" />
      </span>

      <div className="content-1">
        <div className="social-media-title">Social Media App</div>
        <p className="social-media-subtitle-1">
          Social media app that you can create your own post, follow a user, and
          message each other who are using the app.
        </p>

        <div className="content-2-icons">
          <div className="icon-list__img">
            <span>
              <AiFillHtml5
                style={{
                  color: "#DD4B25",
                  paddingTop: 3,
                  paddingRight: 15,
                }}
                size={28}
              />{" "}
            </span>
          </div>
          <div className="icon-list__img">
            <span>
              <DiCss3
                style={{
                  color: "#3658DE",
                  paddingTop: 3,
                  paddingRight: 10,
                }}
                size={28}
              />{" "}
            </span>
          </div>
          <div className="icon-list__img">
            <span>
              <IoLogoJavascript
                style={{
                  color: "#F5DE19",
                  paddingTop: 3,
                  paddingRight: 15,
                }}
                size={28}
              />
            </span>
          </div>
          <div className="icon-list__img">
            <span>
              <FaNodeJs
                style={{
                  color: "#87BF00",
                  paddingTop: 2,
                  paddingRight: 15,
                }}
                size={28}
              />
            </span>
          </div>
          <div className="icon-list__img">
            <span>
              <DiMongodb
                style={{
                  color: "#13A44D",
                  paddingTop: 4,
                  paddingRight: 1,
                }}
                size={28}
              />
            </span>
          </div>
          <div className="icon-list__img">
            <span>
              <SiSocketDotIo
                style={{
                  color: "#010101",
                  paddingTop: 4,
                  paddingRight: 10,
                }}
                size={28}
              />
            </span>
          </div>
        </div>
        <div className="content-3-icons"></div>

        <HashLink
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

export default Works;
