import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/navbar/navbar.component";

import ContactUs from "./components/contact-form/contact-form.component";
import Homepage from "./components/homepage/homepage.component";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/sign-up" component={ContactUs} />
      </Switch>
    </Router>
  );
};

export default App;
