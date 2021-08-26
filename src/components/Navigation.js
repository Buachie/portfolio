import React, { Component } from "react";
import Resume from "../documents/AaronBuachieResume.pdf";
import Contact from "./Contact";
import { Link, animateScroll as Scroll } from "react-scroll";

export class Navigation extends Component {
  render() {
    return (
      <div className="nav-container">
        <Contact color={"#705DD8"} />
        <nav>
          <Link to="portfolio" spy={true} smooth={true}>
            Portfolio
          </Link>
          <a href={Resume} rel="noopener noreferrer" target="_blank">
            Resume
          </a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
