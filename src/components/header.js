import React, { useState, useEffect } from "react";
import { NavLink} from "react-router-dom";

import Logo from "../assets/logo.svg";
import "../style/header.css";
import { Link } from "react-scroll"

/*
<NavLink
            exact to="/"
            activeClassName="active"
            onClick={handleClick}
          >
            home
          </NavLink>
*/

export default function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  return (
    <div class="navbar" id="nav">
      <div class="wrapper">
        <div class="logo">
          <a href="#home">
            <img src={Logo} alt="Logo" />
          </a>
        </div>
        <div class="links">
        <Link
            to="home"
            activeClass="active"
            onClick={handleClick}
            spy={true}
          >
            home
          </Link>
          <Link
            to="work"
            activeClass="active"
            onClick={handleClick}
            spy={true}
          >
            work
          </Link>
          <Link
            exact to="art"
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
        </div>
      </div>
    </div>
  );
}
