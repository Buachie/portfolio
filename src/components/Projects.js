import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import MyTime from "../img/my_time.png";
import DevJobs from "../img/DevJobs.png";
import ImageSearch from "../img/image_search.png";
import Planets from "../img/planets.png";

export class Projects extends Component {
  render() {
    return (
      <div className="projects-container" id="portfolio">
        <div className="title-container">
          <h1>Portfolio</h1>
          <p>Check out some of the stuff I've worked on. </p>
        </div>
        <div className="card-container flex">
          <ProjectCard
            img={DevJobs}
            title={"DevJobs"}
            description={
              "A React application that allows users to filter through a list of jobs by title, company, location, full time and part time positions. This project was built with a mobile first methodology and also allows users to toggle between dark and light themes."
            }
            source={"https://github.com/Buachie/devjobs-app"}
            demo={"https://devpositions.netlify.app/"}
            skill1={"ReactJS"}
            skill2={"React Context API"}
            skill3={"React Router"}
            skill4={"SCSS"}
          />

          <ProjectCard
            img={ImageSearch}
            title={"React Image Search"}
            description={
              "An image searching tool built with ReactJS and Material UI that dynamically displays images using Pixabay's API along with the image tags and author."
            }
            source={"https://github.com/Buachie/image-search"}
            demo={"https://buachie-photo-search.netlify.app/"}
            skill1={"JavaScript"}
            skill2={"ES6"}
            skill3={"ReactJS"}
            skill4={"CSS3"}
            skill5={"Material UI"}
          />
          <ProjectCard
            img={Planets}
            title={"Planet Facts"}
            description={
              "A React Application that provides a general overview as well as information on the internal structure and surface geology of the planets in our solar system. It also changes between a light theme and dark theme wi9th different backgrounds depending on the time of day. "
            }
            source={"https://github.com/Buachie/planet-facts"}
            demo={"https://planetoids.netlify.app/"}
            skill1={"React"}
            skill2={"TypeScript"}
            skill3={"SCSS"}
          />
          <ProjectCard
            img={MyTime}
            title={"My World Time"}
            description={
              "A web application that uses World Time API, IP Geolocation API and Quotable API to display the time, location, and other useful data. It also changes the background image and color scheme of the information tab depending on the time of day."
            }
            source={"https://github.com/Buachie/clock-app"}
            demo={"https://myworldtime.netlify.app/"}
            skill1={"ReactJS"}
            skill2={"SCSS"}
            skill3={"TypeScript"}
            skill4={"ES6"}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
