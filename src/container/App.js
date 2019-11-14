import React, { Component, Suspense, lazy } from "react";
import "./App.css";
import "./animation.css";
// import About from '../components/about/about';
// import Header from '../components/header/header';
// import Experience from '../components/experience/experience';
// import Interest from '../components/interest/interest';
import ProjectList from "../components/projects/ProjectList";
import SplitScreenSlider from "../components/SplitScreenSlider/SplitScreenSlider";
import ExperienceList from "../components/experience/experienceList";

export class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <SplitScreenSlider /> */}
        <ExperienceList />
        <ProjectList />
        {/* <Header />
			<About />
			<hr class="mw3 bb bw1 b--black-10" />
			<Experience/>		
			<hr class="mw3 bb bw1 b--black-10" />
			<Projects />
			<hr class="mw3 bb bw1 b--black-10" />
			<Interest/> */}
      </div>
    );
  }
}

export default App;
