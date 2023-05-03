import React, { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Multipli from "./Componenets/Multipli/Multiply";
import About from "./Componenets/About/About";
import Embedded_1 from "./Componenets/embedded_1/embedded_1";
import "./App.css";

function App() {
  let mainContent = null;

  const [showMultipli, setShowMultipli] = useState(false);
  const [showAbout, setShowAbout] = useState(true);

  const [showEmbedded_1, setShowEmbedded_1] = useState(false);
  const handleAboutClick = () => {
    setShowAbout(true);
    setShowMultipli(false);

    setShowEmbedded_1(false);
  };

  const handleMultipliClick = () => {
    setShowAbout(false);
    setShowMultipli(true);
    setShowEmbedded_1(false);
  };

  const handleEmbedded_1Click = () => {
    setShowAbout(false);
    setShowMultipli(false);
    setShowEmbedded_1(true);
  };

  if (showMultipli) {
    mainContent = (
      <div>
        <Multipli />
      </div>
    );
  }

  if (showEmbedded_1) {
    mainContent = (
      <div>
        <Embedded_1 />
      </div>
    );
  }

  if (showAbout) {
    mainContent = (
      <div>
        <About />
      </div>
    );
  }

  return (
    <div>
      <div className="s4">
        <div className="s3">
          <Button onClick={handleAboutClick} className="btn btn-success b2">
            About
          </Button>
          <Button onClick={handleMultipliClick} className="btn btn-success b2">
            Multipli
          </Button>
          <Button
            onClick={handleEmbedded_1Click}
            className="btn btn-success b2"
          >
            Embedded-1
          </Button>
        </div>
        <div className="s2">{mainContent}</div>
      </div>
    </div>
  );
}

export default App;
