import React from "react";

// import Routes from "./routes/routes";
import Works from "./pages/works/works.component";
// import Header from "./components/header/header.component";
import Navbar from "./components/navbar/navbar.component";
import Hero from "./pages/hero/hero.component";
import Contacts from "./pages/contacts/contacts.component";
import Myservices from "./pages/myservice/myservices.component";
import Footer from "./pages/footer/footer.component";
import Testimonials from "./pages/testimonials/testimonials.component";

import "./App.css";

const App = () => (
  <div className="App">
    <div className="container">
      <Navbar />
      <Hero />
      <Works />
      <Myservices />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  </div>
);

export default App;
