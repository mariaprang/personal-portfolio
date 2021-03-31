import React from "react";
import "./Portfolio.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from '@fortawesome/free-solid-svg-icons';
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
            Inspired by an exisiting "Jira" software,
          this project implements <b>some use cases</b> required for a project management system. 
          It enables company members to register, login, create new project boards, new tickets, and add members to the task and to the team.
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
              I've been a tutor at an online teaching platform 'Preply.com' since 2016. To this day I have had an opportunity
              to teach Core Java, SpringBoot, JavaScript, HTML, CSS, MySQL. I've helped my students build their portfolio projects and
              prepare for interviews. I'm proud to have tought a bit over 3200 hours on the platform and have gained 40+ positive reviews.
              You're welcome to click the link below and view my profile page.
              <div className="tools-wrap">
                <div className="lang-wrap">Web Dev</div>
                <div className="lang-wrap">Java</div>
                <div className="lang-wrap">OOP</div>
                <div className="lang-wrap">DSA</div>
                <div className="lang-wrap">Software Architecture</div>
                <div className="lang-wrap">Mentoring</div>
              </div>
              <div className="source-wrap row">
                <a href="https://preply.com/en/tutor/66210/" target="_blank">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="icons"
                    target="_blank"
                  />
                </a>
                <a className="web-link" href="https://preply.com/en/tutor/66210/" target="_blank">
                  www.preply.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-wrap">
        <div className="row">
          <div className="image-wrap">
            <img
              className="project-image"
              src="images/fin-address.png"
            ></img>
          </div>
          <div className="project-description">
            <div className="project-text">Created web templates on Fiverr.com and Upwork.com</div>
            <div className="description">
            I have worked as a freelance web developer and developed modern and mobile responsive websites using HTML5, CSS3 and JavaScript. 
            
              <div className="tools-wrap">
                <div className="lang-wrap">Web Dev</div>
                <div className="lang-wrap">HTML5</div>
                <div className="lang-wrap">CSS3</div>
                <div className="lang-wrap">JavaScript</div>
                <div className="lang-wrap">Responsive Web Design</div>
              </div>
              <div className="source-wrap row">
                <a href="https://github.com/mariaprang/finaddress-m8werk" target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="icons"
                    target="_blank"
                  />
                </a>
                <a className="web-link" href="https://objective-franklin-7af242.netlify.app/">
                  www.template-example.com
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
