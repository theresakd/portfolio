import React from "react";

import Arrow from "../assets/arrow.svg";
import "../style/home.css";

import { VStack } from "@chakra-ui/react"

export default function Home(props) {
  return (
    <div class="container">
      <VStack class="landing">
        <div>
          <h1>hello!</h1>
          <div class="sub">
            <p> i’m theresa and here’s a little bit about me :-)</p>
          </div>
        </div>
        <div class="arrow">
          <a href="#work">
            <img src={ Arrow } alt="Navigation Arrow"></img>
          </a>
        </div>
      </VStack>
    </div>
  );
}
