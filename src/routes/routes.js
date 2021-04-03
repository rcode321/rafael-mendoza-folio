import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home.component";
import About from "../pages/about.component";
import Works from "../pages/works.component";
import Contacts from "../pages/contacts.component";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/works" component={Works} />
    <Route path="/contacts" component={Contacts} />
  </Switch>
);

export default Routes;