import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="main-container">
          <div className="content-container">
            <Hero />
            <br></br>
            <Projects />
          </div>
        </div>
        <footer>
          <div className="footer-info">
            <p>Aaron Buachie &copy; 2021</p>
            <Contact color={"#fff"} />
          </div>
        </footer>
      </div>
    );
  }
}

//export default App;
