import React from "react";
import "./about.css";
import ButtonGroup from "../button_group/button_group";
// import casual_img from "../../res/Casual_2_no_bg.png";
// import uniform_img from "../../res/Uniform_2_no_bg.png";
import { resume } from "../resume";

const About = () => {
  return (
    <section className="vh-100 flex items-center justify-center">
      <div className="bg-img-overlay"></div>
      <div className="tc mh4 mh7-l z-1">
        <h2 className="f3 f2-m f-subheadline-l fw2 mv3 color_accent">
          A little about me... Hello,
        </h2>
        {/* TODO: Create a decision point selection for the the about me section, one for military one for software engineering. */}
        <div className="center ">
          <div className="cf">
            <p className="general_about_me f7 f5-m f4-l fw3 pb4">
              {resume.description.about.general.full}
            </p>

            <p className="miliary_about_me fw3 dn">
              {resume.description.about.military.full}
            </p>

            <p className="developer_about_me fw3 dn">
              {resume.description.about.developer.full}
            </p>
          </div>
        </div>
        <ButtonGroup>
          <button>Military</button>
          <button>General</button>
          <button>Developer</button>
        </ButtonGroup>
      </div>
    </section>
  );
};

export default About;
