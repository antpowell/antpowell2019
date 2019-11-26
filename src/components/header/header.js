import React from "react";
import { ReactComponent as Logo } from "../../res/images/slice7.svg";
import "./header.css";

const bg_img = {
  background: "background-image: url(http://mrmrs.github.io/photos/u/011.jpg)"
};

const Header = () => {
  return (
    <header className="vh-100 dt w-100">
      <div className="cover bg-left bg-center-l dtc v-mid tc" style={bg_img}>
        <div className="pb5 pb6-m pb7-l">
          <div className="tc-l mt4 mt5-m mt6-l ph3">
            <Logo className="w-two-thirds logo"></Logo>
            <h2 className="fw1 f3 mt3 mb4 mh6">
              A Software Engineer who has proven himself at both Verizon and
              Microsoft; who proudly serves his county, community, and family as
              a Military Police Investigator in the Texas Army National Guard;
              and who is an award-winning researcher with a passion for teaching
              underprivileged youth.
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
