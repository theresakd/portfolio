import React from "react";
import { Box } from "@chakra-ui/react";

import work1 from "../assets/jpmc.png";
import Project from "../assets/project.svg";
import "../style/work.css";

export default function Work() {
  return (
    <div class="container" id="work">
      <div class="work">
        <Box w="45%" p={4} >
          <Box bg="#E87768" p={4} className="work-container">
            <img src={work1} alt="Work Experience" className="image"></img>
            <div class="work-overlay">
              <div class="overlay-text">internship experience</div>
            </div>
          </Box>

          <Box mt="1" fontWeight="regular" lineHeight="tight" h="25%" p={2}>
            <h1>j.p. morgan chase & co.</h1>
            <h3>software engineering intern</h3>
          </Box>
        </Box>
        <Box w="45%" p={4}>
          <Box bg="#BFD8EF" p={4} className="work-container">
            <img src={Project} alt="Project Experience" className="image"></img>
            <div class="project-overlay">
              <div class="overlay-text">project experience</div>
            </div>
          </Box>
          <Box mt="1" fontWeight="regular" lineHeight="tight" h="25%" p={2}>
            <h1>evaluateme</h1>
            <h3>web development project</h3>
          </Box>
        </Box>
      </div>
    </div>
  );
}
