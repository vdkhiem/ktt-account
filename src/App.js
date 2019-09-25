import React, { Component } from "react";
import { BrowserRouter, Route, Link} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

import FeatureTogglesList from './components/featureToggle/FeatureTogglesList';
import SaveFeatureToggle from './components/featureToggle/SaveFeatureToggle';

import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/" >
              <img src={logo} width="30" height="30" alt="myob.com" />
            </a>
            <Link to="/" className="navbar-brand">Toggle It</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">FeatureToggles</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Feature Toggle</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route path="/" exact component={FeatureTogglesList} />
          <Route path="/edit/:id" component={SaveFeatureToggle} />
          <Route path="/create" component={SaveFeatureToggle} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;