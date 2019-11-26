import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import SplitScreenSlider from "../SplitScreenSlider/SplitScreenSlider";
import About from "../About/about";
import ResumeView from "../ResumeView/ResumeView";
import ProjectList from "../Projects/ProjectList";
import LinedTitle from "../LinedTitle/LinedTitle";
import SnappingSection from "../SnappingSection/SnappingSection";

const Home = () => {
  return (
    <div className="home">
      <SnappingSection>
        <SplitScreenSlider />
      </SnappingSection>
      <SnappingSection>
        <About />
      </SnappingSection>
      <SnappingSection>
        <ProjectList numberOfProjects={3} isAllProjectsShowing={false} />
      </SnappingSection>
      <SnappingSection>
        <ResumeView />
      </SnappingSection>
    </div>
  );
};

export default Home;
