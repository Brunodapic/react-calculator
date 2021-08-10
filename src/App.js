import React from 'react';
import Header from "./components/Header";
import Keyz from "./components/Keyz";
import {useState} from "react"
var stringMath = require('string-math');

function App() {
  const [result, setResult] = useState(false);
  const [oldResult, setOldResult] = useState(0);
  const [input, setInput] = useState('');

  const calculation = (equation) => {
    try {
      const newResult = stringMath(equation);
      console.log(newResult);
      setOldResult(newResult);
      return newResult;
    } catch (error) {
      console.log(error);
      setResult(true);
      return "error";
    }
  }

  const press = (e) => {
    console.log(input);
    if (result) {
      console.log('errorapp');
      setResult(false);
    }
    if (e.text === "AC") {
      setInput('');
    }
    else if (e.text==="ANS"){
      setInput(input+oldResult);
    
    } else if (e.text === "=") {
      let rez = calculation(input);
      rez = rez.toString();
      if(rez!=="error") setInput(rez);

    } else {
      var stri = e.text;
      stri = stri.toString();
      setInput(input + stri);
    }

  }

  return (
    <div className = "App">
    <Header result = {result} input = {input}/> 
    <Keyz onChange = {press}/> 
    </div>
  );
}



export default App;