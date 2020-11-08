import React from "react";
import "./Portfolio.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Portfolio() {
  return (
    <div className="portfolio-wrap section-box">
      <h1 className="headline-text">Projects_</h1>
      <div className="project-wrap">
        <div className="row">
          <img
            className="project-image"
            src="https://support.crowdin.com/assets/docs/integration_jira_subtask.png"
          ></img>
          <div className="project-description">
            <div className="project-text">
              <span className="project-span">Title:</span>
              Jira-like software
            </div>
            <div className="description">
              <span className="project-span">Info:</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proide
              <div className="tools-wrap row">
                <div className="lang-wrap">HTML</div>
                <div className="lang-wrap">CSS</div>
                <div className="lang-wrap">Java</div>
                <div className="lang-wrap">SpringBoot</div>
                <div className="lang-wrap">Thymeleaf</div>
                <div className="lang-wrap">MySQL</div>
                <div className="lang-wrap">Hibernate</div>
              </div>
              <a href="https://github.com/mariaprang/project-management-saasovation">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="icons"
                  target="_blank"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
