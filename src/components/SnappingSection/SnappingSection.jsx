import React from "react";
import styled from "styled-components";

const SnappingSection = ({ children }) => {
  const SnapSection = styled.section`
    scroll-snap-align: start;
  `;

  return <SnapSection>{children}</SnapSection>;
};

export default SnappingSection;
