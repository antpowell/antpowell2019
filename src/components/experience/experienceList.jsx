import React, { Component } from "react";
import Experience from "./experience";

import { resume } from "../resume";

const workExperience = resume.experience.work;

const workExperienceArray = workExperience.map((job, index) => {
  return (
    <Experience
      title={job.title}
      company={job.company}
      date={job.date}
      description={job.description}
    ></Experience>
  );
});

export default class ExperienceList extends Component {
  render() {
    return (
      <>
        <div className="mh7">
          <h1 className="f1 fw2 b color_accent">Work Experience</h1>
          {workExperienceArray}
        </div>
      </>
    );
  }
}
