import React from "react";
import "./Portfolio.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typical from "react-typical";

function Portfolio() {
  return (
    <div className="portfolio-wrap section-box">
      <h1 className="headline-text">
        <Typical steps={["Projects_", 1000]} loop={1} wrapper="p" />
      </h1>
      <div className="project-wrap row">
        <div className="image-wrap">
          <img
            className="project-image"
            src="https://support.crowdin.com/assets/docs/integration_jira_subtask.png"
          />
        </div>
        <div className="project-description">
          <div className="project-text">Jira-like software</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proide
            <div className="tools-wrap">
              <div className="lang-wrap">HTML</div>
              <div className="lang-wrap">CSS</div>
              <div className="lang-wrap">Java</div>
              <div className="lang-wrap">SpringBoot</div>
              <div className="lang-wrap">Thymeleaf</div>
              <div className="lang-wrap">MySQL</div>
              <div className="lang-wrap">Hibernate</div>
            </div>
            <div className="source-wrap row">
              <a href="https://github.com/mariaprang/project-management-saasovation">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="icons"
                  target="_blank"
                />
              </a>
              <a className="web-link" href="www.example.com">
                www.example.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="project-wrap">
        <div className="row">
          <div className="image-wrap">
            <img
              className="project-image"
              src="images/preply-project.png"
            ></img>
          </div>
          <div className="project-description">
            <div className="project-text">Java Tutor at Preply.com</div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proide
              <div className="tools-wrap">
                <div className="lang-wrap">Web Dev</div>
                <div className="lang-wrap">Java</div>
                <div className="lang-wrap">OOP</div>
                <div className="lang-wrap">DSA</div>
                <div className="lang-wrap">Software Architecture</div>
                <div className="lang-wrap">Mentoring</div>
              </div>
              <div className="source-wrap row">
                <a href="https://github.com/mariaprang/project-management-saasovation">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icons"
                    target="_blank"
                  />
                </a>
                <a className="web-link" href="www.example.com">
                  www.example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
