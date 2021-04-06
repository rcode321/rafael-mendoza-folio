import React from "react";

// import Routes from "./routes/routes";
import Works from "./pages/works/works.component";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";
import Contacts from "./pages/contacts/contacts.component";
import About from "./pages/about/about.component";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <About />
    <Works />
    <Contacts />
  </div>
);

export default App;
