import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  overflow: hidden;
  text-align: center;
  &:before,
  &:after {
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  &:before {
    background: linear-gradient(
      to left,
      var(--primary_color) 0%,
      rgba(0, 0, 0, 0) 55%
    );
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    background: linear-gradient(
      to right,
      var(--primary_color) 0%,
      rgba(0, 0, 0, 0) 55%
    );
    left: 0.5em;
    margin-right: -50%;
  }
`;

const LinedTitle = ({ children }) => {
  return <Title className="f1 lh-title fw1 color_primary">{children}</Title>;
};

export default LinedTitle;
