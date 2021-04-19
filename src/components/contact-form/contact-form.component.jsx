import React from "react";
import emailjs from "emailjs-com";

import Footer from "../../pages/footer/footer.component";
// import "./ContactUs.css";
import "./contact-form.styles.scss";

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a567z4i",
        "template_w75muai",
        e.target,
        "user_dAxdFSiC58Nw5KYJAqVBW"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  }

  return (
    <>
      <section className="contact-me">
        <div className="contactTitle">Contact me</div>
        <p className="form-subtitle">
          If you wanna get in touch and talk about you project's idea feel free
          to reach out through social media platforms or send me an email .
        </p>
      </section>
      <div className="form-container">
        <form className="form" onSubmit={sendEmail} autoComplete="off">
          <input
            required
            name="hidden"
            type="text"
            className="feedback-input"
            placeholder="Name"
          />
          <input
            required
            name="email"
            type="email"
            className="feedback-input"
            placeholder="Email"
          />
          <textarea
            required
            name="message"
            className="feedback-input"
            placeholder="Message"
          ></textarea>
          <input type="submit" value="SUBMIT" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
