import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import {
  faPaintBrush,
  faDatabase,
  faLeaf,
  faCode,
  faSitemap,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import {
  faJava,
  faHtml5,
  faJsSquare,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";

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
        <div className="skills-left">
          <div className="skill">
            <FontAwesomeIcon icon={faSitemap} className="icons" />
            <span className="highlight dark">Object Oriented Programming</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faCode} className="icons" />
            <span className="highlight dark">In-depth knowledge of Java</span>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faLeaf} className="icons" />
            <span className="highlight dark">SpringBoot</span>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDatabase} className="icons" />
            <span className="highlight dark">MySQL</span>
          </div>
        </div>

        <div className="skills-right">
          <div className="skill">
            <FontAwesomeIcon
              icon={faJsSquare}
              style={{ color: "#EFD81B" }}
              className="icons"
            />
            <span className="highlight bright">
              JavaScript (ES6 and Vanilla)
            </span>
          </div>

          <div className="skill">
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ color: "#F1652A" }}
              className="icons"
            />
            <span className="highlight bright">HTML</span>
          </div>
          <div className="skill">
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{ color: "#275CE7" }}
              className="icons"
            />
            <span className="highlight bright">CSS</span>
          </div>

          <div className="skill">
            <FontAwesomeIcon
              icon={faPalette}
              style={{ color: "#006666" }}
              className="icons"
            />
            <span className="highlight bright">Inkscape</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
