import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./animation.css";

import Footer from "../components/Footer/Footer";

import Home from "../components/Home/Home";
import ProjectsView from "../components/Projects/ProjectsView";

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App"></div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route
            path="/projects"
            render={props => (
              <ProjectsView numberOfProjects={6} isAllProjectsShowing={true} />
            )}
          ></Route>
          {/* <Route to="/resume" component={ResumeViewer}></Route> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
