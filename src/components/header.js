import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Logo2 from "../assets/logo2.svg";
import "../style/header.css";
import { Link } from "react-scroll";
import Menu from "../assets/hamburger-menu.svg";

/*
<NavLink
            exact to="/"
            activeClassName="active"
            onClick={handleClick}
          >
            home
          </NavLink>
*/

function responsiveNav() {
  var x = document.getElementById("nav");
  if (x.className === "links") {
    x.className += " responsive";
  } else {
    x.className = "links";
  }
}

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div class="navbar" id="nav">
      <div class="wrapper">
        <div class="logo">
          <a href="#home">
            <img src={Logo} class="norm-logo" alt="Logo" />
            <img src={Logo2} class="smol-logo" alt="Logo" />
          </a>
        </div>
        <div class="links" id="list">
          <Link to="home" activeClass="active" onClick={handleClick} spy={true}>
            home
          </Link>
          <Link to="work" activeClass="active" onClick={handleClick} spy={true}>
            work
          </Link>
          <Link
            exact
            to="art"
            activeClass="active"
            onClick={handleClick}
            spy={true}
          >
            art
          </Link>
          <Link
            to="contact"
            activeClass="active"
            onClick={handleClick}
            spy={true}
          >
            contact
          </Link>
          <a href="javascript:void(0);" class="icon" onclick={responsiveNav}>
            <img src={Menu} class="menu"/>
          </a>
        </div>
      </div>
    </div>
  );
}
