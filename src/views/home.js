import React from "react";

import Arrow from "../assets/arrow.svg";
import Graphic from "../assets/home-graphic.svg";
import "../style/home.css";

import { VStack } from "@chakra-ui/react"
import useWindowSize from "../useWindowSize"

export default function Home(props) {
  const { width } = useWindowSize();
  return (
    <>
    {width > 500 && (
    <div class="container" id="home">
      <VStack class="landing">
      <div class="home-graphic">
      <img src={ Graphic } alt="Graphic of Woman Coding"></img>
      </div>
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
    )};
    </>
  );
}
