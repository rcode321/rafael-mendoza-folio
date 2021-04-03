import React from "react";
import { Route } from "react-router-dom";
const About = (match) => {
  console.log(match);
  return (
    <div>
      <Route path={`${match.path}/:12345`} />
    </div>
  );
};

export default About;
