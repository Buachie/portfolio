import React, { Component } from "react";
import Contact from "./Contact";

export class Navigation extends Component {
  render() {
    return (
        <div className="nav-container">
          <Contact color={"#705DD8"}/>
          <nav>
            <a href="#portfolio">Portfolio</a>
            <a href="#">Resume</a>
          </nav>
        </div>
    );
  }
}

export default Navigation;
