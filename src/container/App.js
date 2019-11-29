import React, { Component } from "react";
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

export class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/projects">
            <ProjectsView numberOfProjects={6} isAllProjectsShowing={true} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          {/* <Route to="/resume" component={ResumeViewer}></Route> */}
        </Switch>
        <Footer />
        {/* // TODO: implement page transition animation
            <TG>
            CT key={location.key} timeout={300} className="fade">

            </CT>
             </TG> */}
      </Router>
    );
  }
}

export default App;
