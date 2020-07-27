import React, { Component } from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h2>Where to Reach Me</h2>
        <div className="contact">
          <a href="mailto:buachiea@gmail.com">
            <FaEnvelope size={100} color={"#551a8b"} />
          </a>
          <a href="https://github.com/Buachie">
            <FaGithubSquare size={100} color={"#551a8b"} />
          </a>

          <a href="https://www.linkedin.com/in/aaron-buachie-5b678775/">
            <FaLinkedin size={100} color={"#551a8b"} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
