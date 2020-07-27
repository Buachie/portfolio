import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Weather from "../img/weather_app.png";
import Heritage from "../img/heritage_trail.png";
import Entertainment from "../img/entertainment_sim.png";
import Handbook from "../img/handbook.png"
import ImageSearch from "../img/image_search.png"
export class Projects extends Component {
  render() {
    return (
      <div className="projects-container">
        
        <div className="card-container">
          <div className="title-container">
            <h2>Portfolio</h2>
            <p>Check out some of the stuff I've worked on. </p>
          </div>

          <div className="project-info">
            <ProjectCard
              img={Weather}
              title={"JavaScript Weather App"}
              description={
                "A simple weather application that uses the Darksky API to provide the current weather and weekly forecast based on the user's current location."
              }
              source={"https://github.com/Buachie/weather-app"}
              demo={"#"}
              skill1={"HTML5"}
              skill2={"CSS3"}
              skill3={"JavaScript"}
            />
            <ProjectCard
              img={Heritage}
              title={"African American Heritage Trail"}
              description={
                "A site for the Upper Housatonic Valley African American Heritage Trail made alongside a designer by modifying the Wordpress 'Twenty Twenty' theme."
              }
              demo={"https://www.africanamericantrail.org/"}
              skill1={"HTML5"}
              skill2={"CSS3"}
              skill3={"Wordpress"}
            />
            <ProjectCard
              img={Entertainment}
              title={"Entertainment Simulator"}
              description={
                "A game made in React that provides the user with different things to do depending on the current weather. Choosing an option will affect various stats. All information is also stored locally for future use."
              }
              source={"https://github.com/Buachie/entertainment-sim/"}
              demo={"https://buachie.github.io/entertainment-sim/"}
              skill1={"ReactJS"}
              skill2={"CSS3"}
              skill3={"HTML5"}
              skill4={"JavaScript"}
            />

            <ProjectCard
              img={Handbook}
              title= {"Hunter College Film Production Handbook"}
              description={"An online handbook for the Hunter College Department of Film and Media allowing easy access to important forms and documents for students"}
              demo={"https://fm.hunter.cuny.edu/productionhandbook_draft/index.html"}
              skill1={"HTML5"}
              skill2={"CSS3"}
              skill3={" "}
            />
            <ProjectCard
              img={ImageSearch}
              title={"React Image Search"}
              description={"An image searching tool built with ReactJS and Material UI that dynamically displays results based on user input."}
              source={'https://github.com/Buachie/image-search'}
              demo={''}
              skill1={'ReactJS'}
              skill2={'CSS3'}
              skill3={'Material UI'}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
