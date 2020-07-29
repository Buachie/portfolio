import React, { Component } from "react";
import { FaGithubSquare, FaEnvelope, FaLinkedin } from "react-icons/fa";
export class Contact extends Component {
  render() {
    return (
      <div className="contact">
              <a href="mailto:buachiea@gmail.com">
                <FaEnvelope size={30} color={this.props.color} />
              </a>
              <a href="https://github.com/Buachie" rel="noopener noreferrer" target="_blank">
                <FaGithubSquare size={30} color={this.props.color} />
              </a>
              <a href="https://www.linkedin.com/in/aaron-buachie-5b678775/" rel="noopener noreferrer" target="_blank">
                <FaLinkedin size={30} color={this.props.color} />
              </a>
            </div>
    );
  }
}

export default Contact;
