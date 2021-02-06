import React from "react";
import Typical from "react-typical";
import "./Contact.css";

const Contact = () => (
  <div>
    <div className="skills-wrap contact-wrap">
      <h1 className="headline-text contact-text">
        <Typical steps={["Get in touch_", 1000]} loop={1} wrapper="p" />
      </h1>
    </div>
  </div>
);

export default Contact;
