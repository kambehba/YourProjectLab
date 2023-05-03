import React, { useState } from "react";
import headshot from "../../images/i3.png";
import wo from "../../images/i2.jpg";
import rustin from "../../images/rustin.png";

import "./About.css";

function About() {
  return (
    <div className="about-s1">
      <div className="about-s2">
        <h1 className="display-4">Rustin Parsen</h1>
        <div className="about-s3">
          <img className="about-s6" src={rustin}></img>
          <img className="about-s6" src={wo}></img>
        </div>

        <h4 className="display-5 about-11">10th Grade @ West Orange HS</h4>
      </div>
      <div className="about-s9">
        <h6 className="display-6 about-10">
          This is the Portal to all my current and Futuer Projects.
        </h6>
        <h6 className="display-6 about-10">
          I am Interested in Learning About Embedded Systems and Robotics.
        </h6>
        <h6 className="display-6 about-10">
          I Have Started Teaching Myself Software Developments
        </h6>
        <h6 className="display-6 about-10">
          Here in This Site I will Demo my Works as I Progress.
        </h6>
        <h6 className="display-6 about-10">
          I Develop this Site Using React Framework
        </h6>
      </div>
      <div className="about-s9"></div>
    </div>
  );
}

export default About;
