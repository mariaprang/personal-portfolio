import React from "react";
import "./Hello.css";
import Typical from "react-typical";

const Hello = () => (
  <div>
    <div className="hello section-box">
      <h1 className="headline-text">
        <Typical
          steps={["Hello world!", 2000, "Hello everyone!", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      </h1>
      <div class="about-me">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
    {/* <hr /> */}
  </div>
);

export default Hello;
