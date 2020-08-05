import React, { Component } from "react";
import Resume from "../documents/Resume.pdf";
export class Hero extends Component {
  render() {
    return (
      <div className="hero-container">
        <h1 className="name">
          Aaron Buachie<span className="cursor">|</span>
        </h1>
        <div className="about">
          <p>
            Hey there. My name is Aaron and I'm a web developer from Brooklyn, NY 
            who is passionate and dedicated to his work and always open to learning 
            new technologies and frameworks.
            <br/>
            <br/>
            Check out some of my work below.
          </p>
        </div>
        <div className="terminal-nav flex">
            <div className="btn green"></div>
            <div className="btn yellow"></div>
            <div className="btn red"></div>
        </div>
        <div className="my-info">
          <div className="info-section">
            <div className="info-title">Aaron.currentLocation</div>
            <div className="info-data">"Brooklyn, New York"</div>
          </div>
          <div className="info-section">
            <div className="info-title">Aaron.skills</div>
            <div className="info-data">
              ["<span className="skill">HTML5</span>", "<span className="skill">CSS3</span>", "<span className="skill">Sass</span>", "<span className="skill">JavaScript</span>", "<span className="skill">ReactJS</span>", "<span className="skill">jQuery</span>", "<span className="skill">Wordpress</span>", "<span className="skill">Git</span>"]
            </div>
          </div>
          <div className="info-section">
            <div className="info-title">Aaron.contactInfo</div>
            <div className="info-data">
              ["<a href="mailto:buachiea@gmail.com">buachiea@gmail.com</a>",{" "}
              "<a href="https://www.linkedin.com/in/aaron-buachie-5b678775/">
                Linkedin
              </a>"
              , "<a href="https://github.com/Buachie">Github</a>"]
            </div>
          </div>
          <div className="info-section">
            <div className="info-title">Aaron.resume</div>
            <div className="info-data">
              "<a href={Resume} rel="noopener noreferrer" target="_blank">Resume.pdf</a>"
            </div>
          </div>
          
          <div className="info-title">
            <span className="cursor">|</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
