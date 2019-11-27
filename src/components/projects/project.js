import React from "react";

const Project = props => {
  const { name, description, link = "#", image } = props;

  return (
    <>
      <div className="dib br3 pa3 ma2 grow w-thid w-30-l tc">
        <a href={link} className="link color_accent">
          <img
            src={require("../../" + image)}
            className="db br2 br--top h6 center"
            alt={image === "" ? "kitten looking menacing." : name}
          />

          <div className="pa2 ph3-ns pb3-ns dn-s">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0 color_accent bg-animate hover-light-blue">
                  {name}
                </h1>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray color_primary vh-25 tc center">
              {description}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project;
