import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Project from "./project";

import { resume } from "../resume";

const ProjectList = ({ numberOfProjects, isAllProjectsShowing }) => {
  const [projects] = useState(resume.experience.projects);
  const [projectsArray, setProjectsArray] = useState([]);

  useEffect(() => {
    getProjectArray(numberOfProjects);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getProjectArray = () => {
    setProjectsArray(
      projects.slice(0, numberOfProjects).map((project, index) => {
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
      })
    );
  };

  return (
    <div className="">
      <div className="">
        <h1 className="tc fw2 f3 f1-m f-subheadline-l pa0 ma0">Projects</h1>
        <div className="mh5 flex flex-wrap ">{projectsArray}</div>
        <Link
          to={!isAllProjectsShowing ? "/projects" : "/"}
          className="f5 link b--color_accent ph3 pv2 color_accent hover-bg-primary b ba br2 center mb6 tc w5 db m3"
        >
          {!isAllProjectsShowing ? "More Projects" : "Back Home"}
        </Link>
      </div>
    </div>
  );
};

export default ProjectList;
