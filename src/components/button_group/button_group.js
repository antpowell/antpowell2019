import React from "react";
// import styled from "styled-components";

const ButtonGroup = ({ children }) => {
  //   const firstChild = children[0];
  //   const lastChild = children[children.length - 1];
  //   console.log(children);

  //   const coreButtonStyle =
  //     "f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b";
  //   const leftMostButtonStyle = coreButtonStyle + "br--left br2 bb bt bl";
  //   const rightMostButtonStyle = coreButtonStyle + "br--right br2 bb bt br";
  //   const centerButtonStyle = coreButtonStyle + "ba";

  //   let buttonArray = [];
  //   const buttonGroup = children.map((child, index) => {
  //     console.log(children.length);
  //     if (index === 0) {
  //       buttonArray.push(<div className={leftMostButtonStyle}>{child}</div>);
  //     }
  //     if (index === children[children.length - 1]) {
  //       buttonArray.push(<div className="{rightMostButtonStyle}">{child}</div>);
  //     }

  //     console.log(`child => ${child}`);
  //     buttonArray.push(<div className={centerButtonStyle}></div>);
  //   });
  //   console.log(buttonArray);
  //   console.log(typeof buttonGroup);
  //   console.log(typeof buttonArray);

  return (
    <div className="cf dib">
      <a
        className="f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b br--left br2 bb bt bl"
        href="#0"
      >
        General
      </a>
      <a
        className="f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b ba"
        href="#0"
      >
        Military
      </a>
      <a
        className="f5 fl link b--color_accent ph3 pv2 dib color_accent hover-bg-primary b br--right br2 bb bt br"
        href="#0"
      >
        Developer
      </a>
    </div>
  );
};

export default ButtonGroup;
