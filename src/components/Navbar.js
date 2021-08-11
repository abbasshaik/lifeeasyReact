import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            LifeEasy
          </a>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar;
