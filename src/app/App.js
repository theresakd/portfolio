import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "../components/header";
import Home from "../views/home";
import Work from "../views/work";
import Art from "../views/art";
import Contact from "../views/contact";

import Album from "../views/art-subpages/album"


import "../App.css";

class App extends Component {
  render() {
  return (
    <div class="sections">
      <Header />
      <Home />
      <Work />
      <Art />
      <Contact />
    </div>
  );
  }
}

export default App;
