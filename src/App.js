import React from "react";

// import Routes from "./routes/routes";
import Works from "./pages/works/works.component";
import Header from "./components/header/header.component";
import Hero from "./pages/hero/hero.component";
import Contacts from "./pages/contacts/contacts.component";
import Myservices from "./pages/myservice/myservices.component";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <Works />
    <Myservices />
    <Contacts />
  </div>
);

export default App;
