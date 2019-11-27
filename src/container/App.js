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
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/projects"}>
            <ProjectsView numberOfProjects={6} isAllProjectsShowing={true} />
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <Home />
          </Route>
          {/* <Route to="/resume" component={ResumeViewer}></Route> */}
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
