import React from "react";
import Logo from "../assets/logo.svg";
import "../style/header.css"

export default function Header() {
  return (
    <div class="navbar">
      <div class="wrapper">
        <div class="logo">
          <a href="#home">
            <img src={Logo} alt="Logo"/>
          </a>
        </div>
        <div class="links">
          <a class="active" href="#home">home</a>
          <a href="#work">work</a>
          <a href="#art">art</a>
          <a href="#contact">contact</a>
        </div>
      </div>
    </div>
  );
}
