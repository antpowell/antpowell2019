import React from "react";
import styled from "styled-components";

const SnapSection = styled.section`
  scroll-snap-align: start;
`;
const Section = styled.main`
  scroll-snap-type: y mandatory;
`;

const ScrollSnap = ({ children }) => {
  const SnapSectionList = children.map((child, index) => {
    return <SnapSection key={index}>{child}</SnapSection>;
  });

  return <Section>{SnapSectionList}</Section>;
};

export default ScrollSnap;
