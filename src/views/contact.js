import React from 'react'

import Graphic from "../assets/contact-graphic.svg"
import LinkedIn from "../assets/linkedin.svg"
import Email from "../assets/email.svg"

import "../style/contact.css"

export default function Contact(props) {
    return (
        <div class="contact-container">
            <div class="contact">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra nam libero justo laoreet sit amet cursus sit. Est ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Hac habitasse platea dictumst quisque sagittis purus sit. Tristique nulla aliquet enim tortor at auctor urna nunc. Purus semper eget duis at tellus at urna. Est ullamcorper eget nulla facilisi etiam dignissim. Massa id neque aliquam vestibulum morbi blandit cursus risus at. Interdum velit euismod in pellentesque massa. Ultricies lacus sed turpis tincidunt id. Quam nulla porttitor massa id neque. 
                <div class="connect">
                    contact me !
                    <div class="social">
                        <a href="https://www.linkedin.com/in/theresa-d-60130a194">
                            <img src={ LinkedIn } alt="LinkedIn Icon" /> theresa doan
                        </a>
                        <a href="">
                            <img src={ Email } alt="Email Icon"></img> email@email.com
                        </a>
                    </div>
                </div>
            </div>
            <div class="graphic">
                <img src={ Graphic } alt="Contact Graphic"></img>
            </div>
        </div>
    );
}