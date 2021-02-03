import React from "react";
import Typical from "react-typical";

const Contact = () => (
  <div>
    <div className="skills-wrap section-box">
      <h1 className="headline-text">
        <Typical steps={["Get in touch_", 1000]} loop={1} wrapper="p" />
      </h1>
    </div>
  </div>
);

export default Contact;
