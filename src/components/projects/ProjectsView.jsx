import React from "react";
import ProjectList from "./ProjectList";

const ProjectsView = props => {
  return (
    <header>
      <ProjectList {...props} />
    </header>
  );
};

export default ProjectsView;
