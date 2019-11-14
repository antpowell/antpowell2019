import React, { Component } from "react";
import Project from "./project";

import { resume } from "../resume";

export default class ProjectList extends Component {
  render() {
    return (
      <>
        <div className="mh7 flex flex-wrap">
          <h1 className="f-subheadline lh-title fw2 b color_primary w-100">
            Projects
          </h1>
          {projectArray}
        </div>
      </>
    );
  }
}

const projects = resume.experience.projects;

const projectArray = projects.map((project, index) => {
  return (
    <Project
      name={project.name}
      description={project.description}
      link={project.link}
      image={project.image}
      languages={project.languages}
      className="w-25 pa3 mr2"
      key={index}
    ></Project>
  );
});
