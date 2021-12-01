import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import soymilkbois from "../assets/soymilkbois.svg";
import achoo from "../assets/achoo.jpg";
import charizard from "../assets/charizard.jpg";
import oogwei from "../assets/oogwei.jpg";
import "../style/art.css";

import { Box, Center, VStack } from "@chakra-ui/react";

export default function Art(props) {
  return (
    <div class="art-container" id="art">
      <VStack>
        <a
          href="https://www.instagram.com/soymilkbois/"
          target="_blank"
          rel="noreferrer"
        >
          <div class="art-header">
            <img src={soymilkbois} alt="soymilkbois"></img>
            art made with love + imagination &lt;3
          </div>
        </a>
        <div class="art-gallery">
          <Center>
            <Box w="30%" p={4} className="gallery-container">
              <img src={oogwei} alt="A Glimpse of the Dead Calm"></img>
              <Box className="overlay">
              <div class="text">
                  a glimpse of the dead calm
                  <div class="subtext">see more &gt;&gt;</div>
                </div>
              </Box>
            </Box>
            <Box w="30%" p={4} className="gallery-container">
              <img src={charizard} alt="Hot Chocolate Charizard"></img>
              <Box className="overlay">
                <div class="text">
                  hot chocolate charizard
                  <div class="subtext">see more &gt;&gt;</div>
                </div>
              </Box>
            </Box>
            <Box w="30%" p={4} className="gallery-container">
              <img src={achoo} alt="Back to Our Roots"></img>
              <Box className="overlay">
              <div class="text">
                  back to our roots
                  <div class="subtext">see more &gt;&gt;</div>
                </div>
              </Box>
            </Box>
          </Center>
        </div>
      </VStack>
    </div>
  );
}
