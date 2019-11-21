import React from "react";
import styled from "styled-components";

import bgImg from "../../res/images/showcase.jpg";

const BG = styled.div`
  background: no-repeat linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url(${bgImg});
  background-position: center;
  background-size: cover;
  height: calc(100vh / 5);
  display: grid;
`;

const ResumeView = () => {
  return (
    <BG className="">
      <div className="tc mv4">
        <h4 className="f4 fl w-100 pa2">
          Do you like what you see, cool! View or download my resume.
        </h4>
        <div className="btnGroup w-100 pa2 ">
          <div className="f5 link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b ba bl  br--left br2 center mb6 w4 ">
            View
          </div>
          <div className="f5 link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b bb bt br br--right br2 center mb6 w4">
            Download
          </div>
        </div>
      </div>
    </BG>
  );
};

export default ResumeView;
