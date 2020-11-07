import React from "react";
import "./Resume.css";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Resume = () => {
  return (
    <div>
      <h1 className="section-box headline-text">Education and Work_</h1>

      <div class="timeline-wrap">
        <div class="timeline">
          <div class="entry">
            <div class="title">
              <h3>2012 - 2016</h3>
              <p>IBSU, Undergrad, Georgia</p>
            </div>
            <div class="body">
              <p>
                Studying Bachelors Program of Computer Sceince and Software
                Development at IBSU (International Black Sea University),
                Tbilisi, Georgia
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3>Jun 2016 – Sep 2016 </h3>
              <p>IBSU</p>
            </div>
            <div class="body">
              <p>
                Computer Science Summer Camp JavaScript Lecturer at
                International Black Sea University
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3>2016 - 2020</h3>
              <p>WHZ, Undergrad, Germany</p>
            </div>
            <div class="body">
              <p>
                Studying Bachelors Program of "Informatik" at Westsächsische
                Hochschule Zwickau, Germany
              </p>
            </div>
          </div>

          <div class="entry">
            <div class="title">
              <h3> 2015 – 2016</h3>
              <p>EGBT, Georgia</p>
            </div>
            <div class="body">
              <p>
                Front End Developer (HTML5, CSS3, JavaScript) at EGTB Software
                Development LLC{" "}
              </p>
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3>2017 - ongoing</h3>
              <p>Preply.com, remote</p>
            </div>
            <div class="body">
              <p>
                Software Development Tutor (teaching Java, SpringBoot,
                JavaScript, Front-End Technologies) at an online teaching
                platform 'Preply.com'
              </p>
              {/* <ul>
                <li>Rerum sit libero possimus amet excepturi</li>
                <li>
                  Exercitationem enim dolores sunt praesentium dolorum
                  praesentium
                </li>
                <li>
                  Modi aut dolores dignissimos sequi sit ut aliquid molestias
                  deserunt illo
                </li>
              </ul> */}
            </div>
          </div>
          <div class="entry">
            <div class="title">
              <h3> 2016 – ongoing</h3>
              <p>C4U, Leipzig,Germany</p>
            </div>
            <div class="body">
              <p>Java Developer at community4you - your strong IT partner</p>
            </div>
          </div>
        </div>
      </div>
      <div className="download-wrap">
        <div>
          <a
            className="download-button"
            href={"/resources/Maria_Prangishvili.pdf"}
            download="M.Prangishvili-CV.pdf"
          >
            Download PDF <FontAwesomeIcon icon={faAngleDoubleDown} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
