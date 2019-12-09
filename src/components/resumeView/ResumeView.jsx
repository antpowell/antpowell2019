import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import bgImg from "../../res/images/showcase.jpg";

const BG = styled.div`
  background: no-repeat linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bgImg});
  background-position: center;
  background-size: cover;
  height: calc(100vh / 1.05);
  display: grid;
`;

const ResumeView = () => {
  return (
    <BG className="">
      <div className="tc mv4 flex flex-wrap justify-center items-center content-center">
        <h4 className="f4 fl w-100 ">
          Do you like what you see, cool! View my resume.
        </h4>

        <Link to="/resume">
          <div className="f5 link b--color_accent ph3 pv2 color_accent hover-bg-primary b ba br2 w5 ma3 ">
            View
          </div>
        </Link>
      </div>
    </BG>
  );
};

export default ResumeView;
