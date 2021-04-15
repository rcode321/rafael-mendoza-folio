import React from "react";

import "./homepage.styles.scss";

import Hero from "../../pages/hero/hero.component";
import Works from "../../pages/works/works.component";
import Myservices from "../../pages/myservice/myservices.component";
import Testimonials from "../../pages/testimonials/testimonials.component";
import Contacts from "../../pages/contacts/contacts.component";
import Footer from "../../pages/footer/footer.component";

const Homepage = () => (
  <div className="homepage-container">
    <Hero />
    <Works />
    <Myservices />
    <Testimonials />
    <Contacts />
    <Footer />
  </div>
);

export default Homepage;
