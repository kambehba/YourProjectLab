import React, { useState } from "react";
import "./embedded_1.css";
import i8 from "../../images/i8.png";
import i5 from "../../images/i5.png";
import i7 from "../../images/i7.png";

function Embedded_1() {
  return (
    <div className="d-flex justify-content-center flex-column">
      <h1 className="display-2 d-flex justify-content-center embedded_1_s1">
        Remotly Control Any Electric Device!{" "}
      </h1>
      <div className="d-flex justify-content-center embedded_1_s1">
        <img width={600} height={400} src={i7}></img>
      </div>
      <h5 className="display-5 d-flex justify-content-center embedded_1_s1">
        Connect Any Electrical Device to this Box,<br></br> and You can Control
        it from any where in the World !
      </h5>
      <hr class="hr hr-blurry" />
      <div className="d-flex justify-content-center embedded_1_s1">
        <img width={600} height={400} src={i5}></img>
      </div>
      <h5 className="display-5 d-flex justify-content-center embedded_1_s1">
        A Quick Photo of my Lab
      </h5>
      <hr class="hr hr-blurry" />
      <div className="d-flex justify-content-center embedded_1_s1">
        <img width={600} height={400} src={i8}></img>
      </div>
      <h5 className="display-5 d-flex justify-content-center embedded_1_s1">
        Electrical Circuit Design
      </h5>
      <h5 className="display-7 d-flex justify-content-center embedded_1_s1">
        ESP8266 Microcontroller is Programmed<br></br> to Command The Relay to
        Connect the Live Line to Output
      </h5>
      <hr class="hr hr-blurry" />
    </div>
  );
}

export default Embedded_1;
