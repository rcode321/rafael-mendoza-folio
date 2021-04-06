import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home.component";
import Myservices from "../pages/myservice/myservices.component";
import Works from "../pages/works/works.component";
import Contacts from "../pages/contacts/contacts.component";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/myservices" component={Myservices} />
      <Route path="/works" component={Works} />
      <Route path="/contacts" component={Contacts} />
    </Switch>
  );
};

export default Routes;
