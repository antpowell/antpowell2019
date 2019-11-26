import React from "react";

const Footer = () => {
  return (
    <footer className="color_primary flex items-center justify-center color_primary w-100">
      <div className="w-25 pa3 tc mw-100">Copyright © Anthony Powell 2019</div>
      <div className="w-25 pa3 tc mw-100">
        Made with{" "}
        <span role="img" aria-label="heart">
          💖
        </span>{" "}
        by myself, Anthony Powell{" "}
        <span role="img" aria-label="peace sign">
          ✌🏿
        </span>
      </div>
      <div className="w-25 pa3 tc mw-100"></div>
      <div className="w-25 pa3 mw-100">
        <h3 className="ma0">Featured / Post Image Credit div:</h3>
        <span>
          This website “anthony-powell.com” uses images from following vector
          and images stock websites.
        </span>
        <ul>
          <li>
            <a href="http://www.freepik.com" className="link color_primary">
              www.freepik.com
            </a>
          </li>
          <li>
            <a href="http://www.designbolts.com" className="link color_primary">
              www.designbolts.com
            </a>
          </li>
          <li>
            <a href="http://www.unsplash.com" className="link color_primary">
              www.unsplash.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
