import React from "react";
import "./styles/Footer.scss";
import { GoMarkGithub } from "react-icons/go";
import { AiFillMediumSquare } from "react-icons/ai";
import { GrCalendar } from "react-icons/gr";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="copyright">
          <div id="copy">©2022 Protectly, Inc. All Rights Reserved.</div>
          <div className="glyphs">
            <a href="https://calendly.com/">
              <GrCalendar> </GrCalendar>
            </a>
            <a href="https://dev.to/ocampb/capstone-project-275a">
              <AiFillMediumSquare> </AiFillMediumSquare>
            </a>
            <a href="https://github.com/ocampb/Capstone-Project">
              <GoMarkGithub> </GoMarkGithub>
            </a>
          </div>
          <div className="flex-terms">
            <div>
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
