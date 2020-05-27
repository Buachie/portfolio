import React, { Component } from "react";
import image from "../img/test-img.jpg";

export class ProjectCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="project-img">
          <img src={this.props.img}></img>
          <div className="overlay"></div>
        </div>
        <h3 className="project-title">{this.props.title}</h3>
        <p className="project-description">{this.props.description}</p>
        <div className="skills-container">
          <ul>
            {this.props.skill1 ? <li>{this.props.skill1}</li> : console.log()}
            {this.props.skill2 ? <li>{this.props.skill2}</li> : console.log()}
            {this.props.skill3 ? <li>{this.props.skill3}</li> : console.log()}
            {this.props.skill4 ? <li>{this.props.skill4}</li> : console.log()}
          </ul>
        </div>
        <div className="button-container">
          {this.props.source ? (
            <a className="glow-on-hover" href={this.props.source}>
              View Source
            </a>
          ) : (
            console.log()
          )}
          {this.props.demo ? (
            <a className="glow-on-hover" href={this.props.demo}>
              View Project
            </a>
          ) : (
            console.log()
          )}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
