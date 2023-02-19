import React, { useState } from "react";
import headshot from "../../images/i3.png";
import wo from "../../images/i2.jpg";
import v1 from "../../images/v2.mp4";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./Demo.css";


function Demo() {
  return (
    <div className="about-s1">
      <div>
        <h1 className="about-s4">Demo</h1>
        <p className="about-s5">
          <h4>This is a Demo of my first Software Solution </h4>
          <video width="600" height="600" controls>
            <source src={v1} type="video/mp4"></source>
          </video>
        </p>
      </div>
    </div>
  );
}

export default Demo;