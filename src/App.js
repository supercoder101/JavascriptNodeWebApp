import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route } from "react-router-dom";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorialslist.component";

class App extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-expand navbar-dark bg-dark navarea">
          <a href="/tutorials" className="navbar-brand">
            Arman
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Tutorials
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                add
              </Link>
            </li>
          </div>
        </nav>
        <div>
          <div>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/tutorials/:id" component={Tutorial} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;