import React from "react";
import "./experience.css";

const Experience = props => {
  const { title, company, date, description } = props;

  const accomplishmentList = description.accomplishments.map(
    (accomplishment, index) => {
      return (
        <p key={index} className="f6">
          - {description.accomplishments[index]}
        </p>
      );
    }
  );

  return (
    <>
      <div>
        <h1 className="fw2 ma0">
          {title}
          <span className="company_details color_accent f5 ">
            <h5 className="company i fw2 mb2">
              {company.name} {date.start} - {date.end} |{" "}
              <span>{company.location}</span>
            </h5>
            <p className="company_description f6"></p>
          </span>
        </h1>
        <div className="accomplishments fw3 lh-title ">
          <p className="f5 fw4 mb2">{description.summary}</p>
          {accomplishmentList}
        </div>
      </div>
    </>
  );
};

export default Experience;
