import React from "react";
import { Box, Stack, Center, VStack } from "@chakra-ui/react";

import work1 from "../assets/jpmc.png";
import Project from "../assets/project.svg";
import Code from "../assets/code.svg";
import "../style/work.css";

export default function Work() {
  return (
    <div class="work-container" id="work">
      <Center>
        <VStack overflow="hidden">
        <div class="work-header">
          <img src={Code} alt="Coding Symbol"/>
        </div>
        <Stack class="work-stack" direction={["column", "row"]}>
          <Box m={4} w={[325, 400, 500, 600]} bg="#E87768" p={4} className="exp-container">
            <img src={work1} alt="Work Experience" className="image"></img>
            <div class="work-overlay">
              <div class="overlay-text">internship experience</div>
            </div>
          </Box>
          
          
          <Box m={4} w={[325, 400, 500, 600]} bg="#BFD8EF" p={4} className="exp-container">
            <img src={Project} alt="Project Experience" className="image"></img>
            <div class="project-overlay">
              <div class="overlay-text">project experience</div>
            </div>
          </Box>
      
        </Stack>
        </VStack>
        </Center>
      
    </div>
  );
}

/*export default function Work() {
  return (
    <div class="work-container" id="work">
        <Stack class="work" direction={['row', 'column']} spacing='24px'>
        <Box width={['full', 500, 600]} p={4} >
          <Box bg="#E87768" p={4} className="exp-container">
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
        <Box w={['full', 500, 600]} p={4}>
          <Box w={[300, 600]} bg="#BFD8EF" p={4} className="exp-container">
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
        </Stack>
    </div>
  );
}
*/
