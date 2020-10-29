import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
// import { Hello, Profile, Resume, Portfolio, Contact } from "../../components";
import "./Navbar.css";

// const Nav = styled.nav`
//   width: 100%;
//   height: 100px;
//   background-color: black;
// `;

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-menu">
      <ul className="header">
        <li>
          <NavLink to="/">hello</NavLink>
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
    </div>
  </div>
);

export default Navbar;
