import React, { useState } from "react";
import headshot from "../../images/i3.png";
import wo from "../../images/i2.jpg";

import "./About.css";

function About() {
  return (
    <div className="about-s1">
      <div className="about-s2">
        <h1 className="about-s4">Rustin Parsen</h1>
        <div className="about-s3">
          <img src={headshot}></img>
          <img className="about-s6" src={wo}></img>
          <div className="about-s1">
            <p className="about-s5">
              <h4>Rustin Parsen</h4>
              15 Years Old <br />
              West Orange High School (Sophomore) <br />
              <br />
              Born in Indianapolis , Indiana <br />
              Live in Orlando Florida
            </p>
            <div className="about-s7">
              <h1 className="display-5">Interests</h1>
              <p className="about-s5">
                <h4>Video Gameing</h4>
                <h4>Computer Science</h4>
                <h4>New Technologies </h4>
                <h4>Clay Craft</h4>
                <h4>Scuba Diving</h4>
              </p>
            </div>
            <div className="about-s7">
              <h1 className="display-5">Futuer Plans</h1>
              <p className="about-s5">
                <h4>Expand my knowledge on Computer Science</h4>
                <h4>Develop more Software Solutions on this portal</h4>
                <h4>Learn More about Internet of Things (IoT)</h4>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
