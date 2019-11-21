import React, { Component } from "react";
import Project from "./project";

import { resume } from "../resume";
import LinedTitle from "../lined_title/LinedTitle";

export default class ProjectList extends Component {
  render() {
    return (
      <React.Fragment>
        <LinedTitle>Projects</LinedTitle>
        <div className="mh5 flex flex-wrap">
          {projectArray}
          <div className="f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b ba br2 center mb6">
            Project Gallery
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const projects = resume.experience.projects;

const size = 3;
const projectArray = projects.slice(0, size).map((project, index) => {
  return (
    <Project
      name={project.name}
      description={project.description}
      link={project.link}
      image={project.image}
      languages={project.languages}
      key={index}
    ></Project>
  );
});
