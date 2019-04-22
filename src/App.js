import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <body className="App">
        <nav className="nav-bar">
          <header className="App-header">Start Bootstrap</header>
          <div className="menu-btn">
            <img
              className="burger-btn"
              src="https://previews.123rf.com/images/fokaspokas/fokaspokas1809/fokaspokas180900164/108564673-hamburger-menu-web-icon-white-icon-with-shadow-on-transparent-background.jpg"
              alt="hamburger button"
            />
          </div>
          <ul>
            <li id="services">SERVICES</li>
            <li id="portfolio">PORTFOLIO</li>
            <li id="about">ABOUT</li>
            <li id="team">TEAM</li>
            <li id="contact">CONTACT</li>
          </ul>
        </nav>
        <main></main>
      </body>
    );
  }
}

export default App;
