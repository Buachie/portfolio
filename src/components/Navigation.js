import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <div className="nav-bar">
        <nav>
          <a href="#">Portfolio</a>
          <a href="#">Resume</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    );
  }
}

export default Navigation;
