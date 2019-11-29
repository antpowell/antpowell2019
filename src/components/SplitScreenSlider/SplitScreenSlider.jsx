import React, { Component } from "react";
import "./SplitScreenSlider.css";
import { resume } from "../resume";

import casual_img from "../../res/Casual_2_no_bg.png";
import uniform_img from "../../res/Uniform_2_no_bg.png";
import { ReactComponent as Logo } from "../../res/images/slice7.svg";
// import { ReactComponent as UnDrawDeveloper } from "../../res/undraw_developer_activity_bv83.svg";

export default class SplitScreenSlider extends Component {
  constructor(props) {
    super();

    this.wrapper = React.createRef();
    this.handle = React.createRef();
    this.topLayer = React.createRef();
  }

  componentDidMount() {
    this.handleTracker();
  }

  render() {
    return (
      <>
        <div className="skewed" id="wrapper" ref={this.wrapper}>
          <div className="layer bottom color_accent">
            <div className="content-wrap">
              <div className="content-body">
                <p className="f5 measure-narrow f4-m f2-l fw1 lh-solid lh-title-ns">
                  {resume.description.about.developer.brief}
                </p>
              </div>
              <img src={casual_img} alt="casual look" />
              {/* <UnDrawDeveloper className="z-2 fr w-third-ns pa6 o-40"></UnDrawDeveloper> */}
            </div>
          </div>
          <div className="layer top" ref={this.topLayer}>
            <div className="content-wrap">
              <div className="content-body">
                <p className="f5 measure-narrow f4-m f2-l fw1 lh-solid lh-title-ns">
                  {resume.description.about.military.brief}
                </p>
              </div>
              <img src={uniform_img} alt="Military uniform" />
            </div>
          </div>
          <div className="handle" ref={this.handle}></div>
        </div>
        <Logo className="logo" />>
      </>
    );
  }

  handleTracker = () => {
    let skew = 0;
    let delta = 0;

    if (this.wrapper.current.className.indexOf("skewed") !== -1) {
      skew = 1000;
    }

    this.wrapper.current.addEventListener("mousemove", e => {
      delta = (e.clientX - window.innerWidth / 2) * 0.5;

      this.handle.current.style.left = e.clientX + delta + "px";

      this.topLayer.current.style.width = e.clientX + skew + delta + "px";
    });
  };
}
