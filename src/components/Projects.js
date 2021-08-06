import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Weather from "../img/weather_app.png";
import Heritage from "../img/heritage_trail.png";
import Entertainment from "../img/entertainment_sim.png";
import Handbook from "../img/handbook.png";
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
            img={Weather}
            title={"JavaScript Weather App"}
            description={
              "A JavaScript weather application that uses the Darksky API to provide the current weather and weekly forecast based on the user's current location. The background also changes to suit the time of day and weather."
            }
            source={"https://github.com/Buachie/weather-app"}
            demo={
              "https://buachie.github.io/medp341/dist/assignments/Weather_App/index.html"
            }
            skill1={"HTML5"}
            skill2={"CSS3"}
            skill3={"JavaScript"}
            skill4={"ES6"}
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
            description={""}
            source={"https://github.com/Buachie/planet-facts"}
            demo={"https://planetoids.netlify.app/"}
            skill1={"React"}
            skill2={"TypeScript"}
            skill3={"SCSS"}
          />
          <ProjectCard
            img={Entertainment}
            title={"Entertainment Simulator"}
            description={
              "A game made in React that provides the user with different things to do depending on the current weather. Choosing an option will affect various stats. All information is also stored locally for future use. This was my first React app and was a huge learning experience, especially in managing state and props."
            }
            source={"https://github.com/Buachie/entertainment-sim/"}
            demo={"https://buachie.github.io/entertainment-sim/"}
            skill1={"HTML5"}
            skill2={"CSS3"}
            skill3={"JavaScript"}
            skill4={"ES6"}
            skill5={"ReactJS"}
          />
          <ProjectCard
            img={Handbook}
            title={"Firechat"}
            description={"A React application that allows users to "}
            demo={
              "https://fm.hunter.cuny.edu/productionhandbook_draft/index.html"
            }
            skill1={"TypeScript"}
            skill2={"React"}
            skill3={"Firebase"}
            skill4={"React ContextAPI"}
          />
        </div>
      </div>
    );
  }
}

export default Projects;
