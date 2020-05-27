import React, { Component } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
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
      </div>
    );
  }
}

//export default App;
