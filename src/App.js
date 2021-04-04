import React from "react";

import Routes from "./routes/routes";
import Header from "./components/header/header.component";
import Hero from "./components/hero/hero.component";

import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <Hero />
    <Routes />
  </div>
);

export default App;
