import React from "react";
import { HashLink } from "react-router-hash-link";

import {
  AiOutlineMail,
  AiFillGithub,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";

import FormBtn from "../../components/form-btn/form-btn.component";
import "./contacts.styles.scss";

const Contacts = () => (
  <div className="contacts-container" id="contacts">
    <div className="contacts-content-container">
      <div className="contacts-content">
        <div className="footer-col-1">
          <span>
            <span className="footer-title">Let’s Work Together</span>
            <p className="footer-subtitle">Build your business with us.</p>
            <li className="icon-list__item email">
              <div className="icon-list__img">
                <span>
                  <AiOutlineMail
                    style={{
                      paddingTop: 7,
                      paddingRight: 15,
                      color: "#D54338",
                    }}
                    size={35}
                  />
                </span>
                <span className="myEmail">rafaelmendoza004@gmail.com</span>
              </div>
            </li>
            <FormBtn />
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
                    size={39}
                  />
                </span>
                <HashLink
                  className="link"
                  to={{
                    pathname: "https://github.com/rcode321",
                  }}
                  target="_blank"
                >
                  On github
                </HashLink>
              </div>
            </li>
            <li className="icon-list__item">
              <div className="icon-list__img">
                <span>
                  <AiFillTwitterSquare
                    className="icon-links"
                    style={{
                      paddingTop: 18,
                      paddingRight: 15,
                      color: "#4C9BE5",
                    }}
                    size={39}
                  />
                </span>
                <HashLink
                  className="link"
                  to={{ pathname: "https://twitter.com/RafaelM77744594" }}
                  target="_blank"
                >
                  {" "}
                  on twitter
                </HashLink>
              </div>
            </li>
            <li className="icon-list__item">
              <div className="icon-list__img">
                <span>
                  <AiFillLinkedin
                    style={{
                      paddingTop: 17,
                      paddingRight: 15,
                      color: "#0275B4",
                    }}
                    size={39}
                  />
                </span>
                <HashLink
                  className="link"
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/rafael-mendoza-51467b193/",
                  }}
                  target="_blank"
                >
                  On linkedin
                </HashLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Contacts;
