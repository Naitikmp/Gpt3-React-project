import React from "react";
import './footer.css';
import gpt3logo from "../../assets/logo.svg";

const Footer = () =>{
    return (
        <div className="gpt3__footer section__padding">
        <div className="gpt3__footer-heading">
            <h1 className="gradient__text">
                Do you want to step into the future before others!
            </h1>
        </div>

        <div className="gpt3__footer-btn">
            <p>Request Early Access</p>
        </div>

        <div className="gpt3__footer-links">
            <div className="gpt3__footer-links_logo">
                <img src={gpt3logo} alt="logo" />
                <p>dkjhhfd frdghkfg ddgjdjlr lrjljrggnflr</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Links</h4>
                <p>Overons</p>
                <p>SocialMedia</p>
                <p>Counters</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Company</h4>
                <p>Terms and condition</p>
                <p>Privacy Policy</p>
                <p>Contact</p>
            </div>
            <div className="gpt3__footer-links_div">
                <h4>Get in touch</h4>
                <p>hdkjvc,v dfb vtrr ttrv </p>
                <p>545-78452447</p>
                <p>info@gmail.com</p>
            </div>

           
        </div>
        <div className="gpt3__footer-copyright">
                <p>© 2023 GPT-3 . ALL RIGHTS RESERVED</p>
            </div>
        </div>
    )
}

export default Footer;