import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Message} from './Message';

function App() {
  let[isLit, setLit] = useState(true)
  let [count,setCount] = useState(1);
  
  return (
    <div className = {`light ${isLit ? "Morning":"Night"}`}> 
      Now it is  {isLit?  "Morning":"Night"}
      <Message counter = {count}> </Message>
    
      <br/>
      <button onClick={()=> setCount(count+1)} > Counter Value </button>
      <button onClick={()=> setLit(!isLit)} > Day or Night </button>
      
    </div>
  );
}

export default App;
