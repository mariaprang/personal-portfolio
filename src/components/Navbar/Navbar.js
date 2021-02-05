import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Route, NavLink, HashRouter } from "react-router-dom";
// import { Hello, Profile, Resume, Portfolio, Contact } from "../../components";
import "./Navbar.css";

// const Nav = styled.nav`
//   width: 100%;
//   height: 100px;
//   background-color: black;
// `;

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <div className="navbar-menu">
        <ul className="header">
          <li>
            <NavLink className={navbar ? "nav-dark" : "nav-light"} to="/">
              hello
            </NavLink>
          </li>
          <li>
            <NavLink className={navbar ? "nav-dark" : "nav-light"} to="/resume">
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navbar ? "nav-dark" : "nav-light"}
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              className={navbar ? "nav-dark" : "nav-light"}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// const Navbar = () => (
//   <nav className="navbar active">
//     <div className="navbar-menu">
//       <ul className="header">
//         <li>
//           <NavLink to="/">hello</NavLink>
//         </li>
//         <li>
//           <NavLink to="/resume">Resume</NavLink>
//         </li>
//         <li>
//           <NavLink to="/portfolio">Portfolio</NavLink>
//         </li>
//         <li>
//           <NavLink to="/contact">Contact</NavLink>
//         </li>
//       </ul>
//     </div>
//   </nav>
// );

export default Navbar;
