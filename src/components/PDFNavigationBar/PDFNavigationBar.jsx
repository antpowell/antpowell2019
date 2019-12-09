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
import resume from "../../res/resume.pdf";

const PDFNavigationBar = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        <span className="flex-grow text-center">Résumé</span>

        <div className="flex-grow-0">
          <Link to="">
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
              alt="Download"
            >
              {/* Download  */}
              <FA icon={faDownload} className="" />
            </button>
          </Link>
          <Link to="/">
            <button
              className="float-right bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
              id="close"
              alt="Close"
            >
              {/* Close  */}
              <FA icon={faTimes} />
            </button>
          </Link>
        </div>
      </div>
      <PDFContainer src={resume} />
    </div>
  );
};

export default PDFNavigationBar;
