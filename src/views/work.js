import React from 'react'
import { Box } from "@chakra-ui/react"

import Img1 from "../assets/jpmc.png"
import "../style/work.css"

export default function Work(props) {
    return (
        <div class="container">
            <div class="work">
                <Box bg="#E87768" w="40%" p={4}>
                   <img src={Img1} alt="Project Img1"></img>
                </Box>
                <Box bg="#BFD8EF" w="40%" p={4}>
                   <img src={Img1} alt="JPMC Project"></img>
                </Box>
            </div>
        </div>
    );
}