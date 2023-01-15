
import React,{useState} from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import Multipli from "./Componenets/Multipli/Multiply";
import About from "./Componenets/About/About";
import './App.css';




  

  
function App() {
  let mainContent = null;
  
  const [showMultipli, setShowMultipli] = useState(false);
  const [showAbout, setShowAbout] = useState(true);

  const handleAboutClick = () => {
  
    
   setShowAbout(true);
   setShowMultipli(false);


  }

  const handleMultipliClick = () => {
  
   setShowAbout(false);
   setShowMultipli(true);
    
   }
   if(showMultipli){

  mainContent = (<div><Multipli/></div>);

 }

 if(showAbout){

  mainContent = (<div><About/></div>);

 }


  return (
    <div>
      <div className="s4">
      
      <div className="s3">
      
      <Button onClick= {handleMultipliClick} className="s5" variant="Secondary">Multipli</Button>
      <Button onClick= {handleAboutClick} className="b2" variant="Secondary">About</Button>
   
      </div>
      <div className="s2">
        {mainContent}
        
      </div>

      
        
      </div>
    
    
    </div>
  );
}

export default App;