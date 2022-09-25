
import React,{useState} from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import './App.css';




  

  
function App() {
  const [mainContent, setMainContent] = useState("");
  

  const showAbout = () => {
  
    
    setMainContent("hello from about");


  }

  const showMultipli = () => {
  
    setMainContent("hello from multipli");
    


  }





  return (
    <div>
      <div className="s4">
      
      <div className="s3">
      
      <Button onClick= {showMultipli} className="s5" variant="Secondary">Multipli</Button>
      <Button onClick= {showAbout} className="b2" variant="Secondary">About</Button>
   
      </div>
      <div className="s2">
        {mainContent}
        
      </div>

      
        
      </div>
    
    
    </div>
  );
}

export default App;