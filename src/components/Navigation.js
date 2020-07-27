import React, { Component } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export class Navigation extends Component {
  render() {
    return (
      <div className="nav-bar">
        <div className="nav-container">
          <div className="contact-container">
            <div className="contact">
              <a href="mailto:buachiea@gmail.com">
                <FaEnvelope size={30} color={"#705DD8"} />
              </a>
              <a href="https://github.com/Buachie">
                <FaGithubSquare size={30} color={"#705DD8"} />
              </a>

              <a href="https://www.linkedin.com/in/aaron-buachie-5b678775/">
                <FaLinkedin size={30} color={"#705DD8"} />
              </a>
            </div>
          </div>
          <nav>
            <a href="#">Portfolio</a>
            <a href="#">Resume</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
