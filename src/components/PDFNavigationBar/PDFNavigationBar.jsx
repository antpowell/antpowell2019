import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon as FA } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faTimes,
  faDownload
} from "@fortawesome/free-solid-svg-icons";
import PDFContainer from "../../container/PDFContainer/PDFContainer";
import resume from "../../res/resume_blue.pdf";

const iconStyle = "color_accent f4 ";
const buttonStyle =
  "link b--color_accent dib ph3 pv2 color_accent hover-bg-primary b bt bb br2";

const PDFNavigationBar = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <span className="flex-grow text-center mb4 f2 fw1">Résumé</span>
      </div>
      <div className="absolute top-0 right-0 mr7 z-10">
        <Link to="">
          <button className={buttonStyle + " bl br--left"} alt="Download">
            {/* Download  */}
            <FA icon={faDownload} className={iconStyle} />
          </button>
        </Link>
        <Link to="/">
          <button
            className={buttonStyle + " bl br br--right"}
            id="close"
            alt="Close"
          >
            {/* Close  */}
            <FA icon={faTimes} className={iconStyle} />
          </button>
        </Link>
      </div>
      <PDFContainer src={resume} />
    </div>
  );
};

export default PDFNavigationBar;
