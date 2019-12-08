import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  CSSTransition as CT,
  TransitionGroup as TG
} from "react-transition-group";
import Footer from "../components/Footer/Footer";
import Home from "../components/Home/Home";
import ProjectsView from "../components/Projects/ProjectsView";
import "./App.css";
import "./animation.css";
import ButtonGroup from "../components/ButtonGroup/ButtonGroup";
import Error from "../components/error/Error";
import PDFViewer from "./PDFViewer/PDFViewer";
import SnappingSection from "../components/SnappingSection/SnappingSection";

const App = () => {
  const btnGrpOptions = {
    names: ["General", "Developer", "Military"],
    color: "--color_primary",
    bgColor: "--color_secondary"
  };

  return (
    <div id="App">
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/projects">
            <ProjectsView numberOfProjects={6} isAllProjectsShowing={true} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route to="/resume" component={PDFViewer}></Route>
          <Route component={Error} />
        </Switch>
        <SnappingSection>
          <Footer />
        </SnappingSection>
        {/* // TODO: implement page transition animation
              <TG>
              CT key={location.key} timeout={300} className="fade">
  
              <CT></CT>
               </TG> */}
      </Router>
    </div>
  );
};

export default App;
