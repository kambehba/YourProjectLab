
import React,{useState} from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

import './App.css';


function App() {
  const [temp, setTemp] = useState("hello");


  const showMultipli = () => {
  
    setTemp("hello from multipli");
    // alert("You are in Multipli")


  }





  return (
    <div>
      <div className="s4">
      
      <div className="s3">
      <Button onClick= {showMultipli} className="s5" variant="success">Multipli</Button>
      <Button className="s5" variant="success">About</Button>
   
      </div>
      <div className="s2">
        {temp}
        
      </div>

      
        
      </div>
    
    
    </div>
  );
}

export default App;
