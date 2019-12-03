import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProjectList from "./ProjectList";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "hover.css";
import Fade from "react-reveal/Fade";

const ProjectsView = props => {
  const [hover, setHover] = useState(false);

  const mouseEnterHandler = () => {
    setHover(true);
  };

  const mouseLeaveHandler = () => {
    setHover(false);
  };

  const transition = {
    opacity: `${hover ? 1 : 0}`,
    transition: "opacity .15s ease-in"
  };

  return (
    <header>
      <div className="ma4 absolute flex items-center">
        <span className="f1 hvr-backward">
          <Link to="/" className="color_primary ">
            {/* TODO: find a say to shrink svg line weight */}
            <Icon
              icon={faArrowLeft}
              className=""
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            />
          </Link>
        </span>
        <span className={"f5 " + (hover ? "swing" : "")} style={transition}>
          HOME
        </span>
      </div>
      <Fade bottom>
        <ProjectList {...props} />
      </Fade>
    </header>
  );
};

export default ProjectsView;
