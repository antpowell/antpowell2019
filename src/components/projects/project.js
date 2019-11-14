import React from "react";

const Project = props => {
  const { name, description, link = "#", image, languages } = props;

  const languageArray = languages.map((language, index) => {
    return <li key="index">{language}</li>;
  });

  return (
    <>
      <article className="dib br3 pa3 ma2 grow w-30">
        <a href={link} className='link color_accent'>
          <img
            src={
              image === ""
                ? "http://placekitten.com/g/600/300"
                : require("../../" + image)
            }
            className="db w-100 br2 br--top max-h-"
            alt="kitten looking menacing."
          />
          <div className="pa2 ph3-ns pb3-ns">
            <div className="dt w-100 mt1">
              <div className="dtc">
                <h1 className="f5 f4-ns mv0 color_accent bg-animate hover-light-blue">
                  {name}
                </h1>
              </div>
            </div>
            <p className="f6 lh-copy measure mt2 mid-gray color_primary vh-25">
              {description}
            </p>
          </div>
        </a>
      </article>
    </>
  );
};

export default Project;
