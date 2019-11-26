import React from "react";
import ProjectList from "./ProjectList";
import LinedTitle from "../LinedTitle/LinedTitle";

const ProjectsView = props => {
  return (
    <header>
      <ProjectList {...props} />
    </header>
  );
};

export default ProjectsView;
