import React, { useEffect } from "react";
import "./SplitScreenSlider.css";
import { resume } from "../resume";

import casual_img from "../../res/Casual_2_no_bg.png";
import uniform_img from "../../res/Uniform_2_no_bg.png";
import { ReactComponent as Logo } from "../../res/images/slice7.svg";
// import { ReactComponent as UnDrawDeveloper } from "../../res/undraw_developer_activity_bv83.svg";

const SplitScreenSlider = () => {
  const wrapper = React.createRef();
  const handle = React.createRef();
  const topLayer = React.createRef();

  const aboutBrief = "text-base sm:text-lg md:text-xl lg:text-3xl xl:text-4xl";

  useEffect(props => {
    handleTracker();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTracker = () => {
    let skew = 0;
    let delta = 0;

    if (wrapper.current.className.indexOf("skewed") !== -1) {
      skew = 1000;
    }

    wrapper.current.addEventListener("mousemove", e => {
      delta = (e.clientX - window.innerWidth / 2) * 0.5;

      handle.current.style.left = e.clientX + delta + "px";

      topLayer.current.style.width = e.clientX + skew + delta + "px";
    });
  };

  return (
    <div className="relative">
      <div className="skewed" id="wrapper" ref={wrapper}>
        <div className="layer bottom color_accent">
          <div className="content-wrap">
            <div className="content-body">
              <p className={aboutBrief}>
                {resume.description.about.developer.brief}
              </p>
            </div>
            <img src={casual_img} alt="casual look" />
            {/* <UnDrawDeveloper className="z-2 fr w-third-ns pa6 o-40"></UnDrawDeveloper> */}
          </div>
        </div>
        <div className="layer top" ref={topLayer}>
          <div className="content-wrap">
            <div className="content-body">
              <p className={aboutBrief}>
                {resume.description.about.military.brief}
              </p>
            </div>
            <img src={uniform_img} alt="Military uniform" />
          </div>
        </div>
        <div className="handle" ref={handle}></div>
      </div>
      <Logo className="logo" />
    </div>
  );
};

export default SplitScreenSlider;
