import React from 'react'

import Graphic from "../assets/contact-graphic.svg"
import LinkedIn from "../assets/linkedin.svg"
import Email from "../assets/email.svg"

import Footer from "../components/footer"

import "../style/contact.css"

export default function Contact(props) {
    return (
        <div id="contact">
        <div class="contact-container">
            <div class="contact">
                <h1><span>i'm theresa</span></h1>
                <p>i am currently a fourth year student studying computer science and engineering at the ohio state university. i will be graduating in spring of 2022! i have a strong interest in front-end web and ui/ux development and design. i have a passion for art and all the likes of creativity alongside computer science. in my free time, i love to spend time with friends and eat new foods! thank you for visiting my portfolio page, hope to hear from you! :-)</p>
                <div class="connect">
                    <h3><span>let's connect !</span></h3>
                    <div class="social">
                        <a href="https://www.linkedin.com/in/theresa-d-60130a194" target="_blank" rel="noreferrer">
                            <img src={ LinkedIn } alt="LinkedIn Icon" /> <p>theresa doan</p>
                        </a>
                        <a href="">
                            <img src={ Email } alt="Email Icon"></img> <p>email@email.com</p>
                        </a>
                    </div>
                </div>
            </div>
            <div class="graphic">
                <img src={ Graphic } alt="Contact Graphic"></img>
            </div>
        </div>
        <Footer />
        </div>
    );
}