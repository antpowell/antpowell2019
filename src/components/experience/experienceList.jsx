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
      key={index}
      className="w-30"
    ></Experience>
  );
});

export default class ExperienceList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mh5 flex flex-wrap">
          <div className="f-subheadline lh-title fw2 b color_primary w-100">
            Work Experience
          </div>
          {workExperienceArray}
        </div>
      </React.Fragment>
    );
  }
}
