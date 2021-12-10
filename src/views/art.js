import React from "react";
import soymilkbois from "../assets/soymilkbois.svg";
import achoo from "../assets/achoo.jpg";
import charizard from "../assets/charizard.jpg";
import oogwei from "../assets/oogwei.jpg";
import "../style/art.css";

import { Box, Center, VStack, Stack } from "@chakra-ui/react";

export default function Art(props) {
  return (
    <div class="art-container" id="art">
       
      <VStack overflow="hidden">
      <Center>
        <a
          href="https://www.instagram.com/soymilkbois/"
          target="_blank"
          rel="noreferrer"
        >
          <div class="art-header">
            <img src={soymilkbois} alt="soymilkbois"/>
          </div>
        </a>
       </Center>
        <Stack class="art-gallery" direction={["column", "row"]}>
          <Center>
            <Box w={[325, 400, 450]} p={4} className="gallery-container">
              <img src={oogwei} alt="A Glimpse of the Dead Calm"></img>
              <Box className="overlay">
              <div class="text">
                  a glimpse of the dead calm
                  <div class="subtext">see more &gt;&gt;</div>
                </div>
              </Box>
            </Box>
            </Center>

            <Center>
            <Box w={[325, 400, 450]} p={4} className="gallery-container">
              <img src={charizard} alt="Hot Chocolate Charizard"></img>
              <Box className="overlay">
                <div class="text">
                  hot chocolate charizard
                  <div class="subtext">see more &gt;&gt;</div>
                </div>
              </Box>
            </Box>
            </Center>
            <Center>
            <Box w={[325, 400, 450]} p={4} className="gallery-container">
              <img src={achoo} alt="Back to Our Roots"></img>
              <Box className="overlay">
              <div class="text">
                  back to our roots
                  <div class="subtext">see more &gt;&gt;</div>
                </div>
              </Box>
            </Box>
            </Center>
        </Stack> 
      </VStack>
    </div>
  );
}
