import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Hello from "./Hello";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

//import profileImage from ;

function Navbar() {
  return (
    <nav className="navbar">
      {/* <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          MP
        </Link>
      </div> */}
      <div className="navbar-menu">
        <ul className="header">
          <li>
            <NavLink to="/">Hello</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="content">
          <Route path="/" component={Hello} />
          <Route path="/resume" component={Resume} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </div>
        <div className="info-content row">
          <img className="logo" src={"/images/profile-image.png"} />

          <div className="profile-wrap">
            <div className="intro-wrap">
              <div className="name">Maria Prangishvili</div>
              <div className="name standard-text">
                Lorem ipsum, dolar sit amet
              </div>
            </div>
            <div className="profile-details">
              <div className="row">
                <div className="field">EMAIL: </div>
                <div className="field-value">marie.prangishvili@gmail.com</div>
              </div>
              <div className="row">
                <div className="field">LOCATION: </div>
                <div className="field-value">Germany</div>
              </div>
              <div className="row">
                <div className="field">LANGUAGES: </div>
                <div className="field-value">English, Russian, German</div>
              </div>
              <div className="row">
                <div className="icon"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
