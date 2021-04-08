import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "../pages/footer/footer.component";
import Myservices from "../pages/myservice/myservices.component";
import Works from "../pages/works/works.component";
import Contacts from "../pages/contacts/contacts.component";

const Routes = () => {
  return (
    <Switch>
      <Route path="/myservices" component={Myservices} />
      <Route path="/works" component={Works} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/footer" component={Footer} />
    </Switch>
  );
};

export default Routes;
