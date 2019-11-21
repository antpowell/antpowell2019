import React, { Component } from "react";
import Experience from "./experience";

import { resume } from "../resume";
import LinedTitle from "../lined_title/LinedTitle";

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
      <React.Fragment className="gird">
        <LinedTitle>Work Experience</LinedTitle>
        <div className="fl w-third pa2"></div>
        <div className="mh5 flex flex-wrap fl w-two-thirds pa2">
          {/* <h1 className="f-subheadline lh-title fw2 b color_primary w-100 ma2 overflow-hidden">
            Work Experience
          </h1> */}
          {workExperienceArray}
        </div>
      </React.Fragment>
    );
  }
}
