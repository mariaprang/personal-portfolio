import React from "react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import "./Profile.css";

const Profile = () => (
  <div class="info-wrap">
    <div className="info-content row">
      <img className="logo" src={"/images/profile-image.png"} />

      <div className="profile-wrap">
        <div className="intro-wrap">
          <div className="name">Maria Prangishvili</div>
          <div className="name standard-text">Lorem ipsum, dolar sit amet</div>
        </div>
        <div className="profile-details">
          <div className="row">
            <div className="field">EMAIL: </div>
            <div className="field-value">marie.prangishvili@gmail.com</div>
          </div>
          <div className="row">
            <div className="field">LOCATION: </div>
            <div className="field-value">Germany</div>
          </div>
          <div className="row">
            <div className="field">LANGUAGES: </div>
            <div className="field-value">
              English, Russian, German, Georgian
            </div>
          </div>
          <div className="row field">
            <a href="https://github.com/mariaprang">
              <FontAwesomeIcon
                icon={faGithub}
                className="icons"
                target="_blank"
              />
            </a>

            <a
              href="https://www.instagram.com/codingwith_maria/?hl=en"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} className="icons" />
            </a>

            <a href="https://www.instagram.com/codingwith_maria/?hl=en">
              <FontAwesomeIcon icon={faLinkedin} className="icons" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Profile;
