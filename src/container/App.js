import React, { Component } from "react";
import "./App.css";
import "./animation.css";
// import About from '../components/about/about';
// import Header from '../components/header/header';
// import Experience from '../components/experience/experience';
// import Interest from '../components/interest/interest';
import ProjectList from "../components/projects/ProjectList";
import SplitScreenSlider from "../components/SplitScreenSlider/SplitScreenSlider";
import Footer from "../components/footer/Footer";
import About from "../components/about/about";
import ResumeView from "../components/resumeView/ResumeView";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <SplitScreenSlider />
        <About />
        <ProjectList />
        <ResumeView />
        <Footer />
      </div>
    );
  }
}

export default App;
