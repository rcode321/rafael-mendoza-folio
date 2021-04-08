import React from "react";
// import HeroBgFooter from "../../assets/Hero BG-footer.png";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

import Button from "../../components/button/button.component";
import "./contacts.styles.scss";
const Contacts = () => (
  <div className="contacts-container" id="contacts">
    <div className="contacts-content-container">
      <div className="contacts-content">
        <div className="footer-col-1">
          <span>
            <span className="footer-title">Let’s Work Together</span>
            <p className="footer-subtitle">Build your business with us.</p>
            <Button />
          </span>
        </div>

        <div className="footer-col-2">
          <ul className="icon-list">
            <li className="icon-list__item">
              <div className="icon-list__img">
                <span>
                  <AiFillGithub
                    className="email"
                    style={{
                      paddingTop: 15,
                      paddingRight: 15,
                      color: "#ffff",
                    }}
                    size={28}
                  />
                </span>
                <a href="#/" target="_blank">
                  On github
                </a>
              </div>
            </li>
            <li className="icon-list__item">
              <div className="icon-list__img">
                <span>
                  <AiFillTwitterSquare
                    style={{
                      paddingTop: 15,
                      paddingRight: 15,
                      color: "#4C9BE5",
                    }}
                    size={28}
                  />
                </span>
                <a href="#/" target="_blank">
                  On Twitter
                </a>
              </div>
            </li>
            <li className="icon-list__item">
              <div className="icon-list__img">
                <span>
                  <AiFillLinkedin
                    style={{
                      paddingTop: 15,
                      paddingRight: 15,
                      color: "#0275B4",
                    }}
                    size={28}
                  />
                </span>
                <a href="#/" target="_blank">
                  On linkedin
                </a>
              </div>
            </li>

            <li className="icon-list__item">
              <div className="icon-list__img">
                <span>
                  <AiOutlineMail
                    style={{
                      paddingTop: 16,
                      paddingRight: 15,
                      color: "#D54338",
                    }}
                    size={28}
                  />
                </span>
                <a href="mailto:seb@sebkay.com">rafaelmendoza004@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;
