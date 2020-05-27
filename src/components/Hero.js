import React, { Component } from "react";

export class Hero extends Component {
  state = {};
  render() {
    return (
      <div className="hero-container">
        <h1 className="name">
          Aaron Buachie<span className="cursor">|</span>
        </h1>
        <div className="header-decoration">
          <div className="button-container">
            <div className="button green"></div>
            <div className="button yellow"></div>
            <div className="button red"></div>
          </div>

          <p className="section-title">About Me</p>
        </div>
        <div className="my-info">
          <div className="info-section">
            <div className="info-title">Aaron.currentLocation</div>
            <div className="info-data">"Brooklyn, New York"</div>
          </div>
          <div className="info-section">
            <div className="info-title">Aaron.contactInfo</div>
            <div className="info-data">
              [<a href="mailto:buachiea@gmail.com">buachiea@gmail.com</a>,{" "}
              <a href="https://www.linkedin.com/in/aaron-buachie-5b678775/">
                Linkedin
              </a>
              , <a href="https://github.com/Buachie">Github</a>]
            </div>
          </div>
          <div className="info-section">
            <div className="info-title">Aaron.resume</div>
            <div className="info-data">
              <a href="#">"Resume.pdf"</a>
            </div>
          </div>
          <div className="info-section">
            <div className="info-title">Aaron.skills</div>
            <div className="info-data">
              [HTML, CSS, JavaScript, React, Sass, jQuery, Wordpress, Github]
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
