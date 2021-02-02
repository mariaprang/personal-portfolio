import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

import Typical from "react-typical";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-wrap section-box">
      <h1 className="headline-text">
        <Typical steps={["Skills_", 1000]} loop={1} wrapper="p" />
      </h1>

      <div className="skills-headline row">
        <div className="row line-row highlight dark">
          <FontAwesomeIcon icon={faTools} className="icons" />
          <span>Backend</span>
        </div>
        <div className="row line-row highlight bright">
          <FontAwesomeIcon icon={faPaintBrush} className="icons" />
          <span>Frontend</span>
        </div>
      </div>
      <div className="skills-row">
        <div className="skills-left"></div>

        <div className="skills-right"></div>
      </div>
    </div>
  );
};

export default Skills;
