import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Hello from "./Hello";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

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
      </div>
    </nav>
  );
}

export default Navbar;
