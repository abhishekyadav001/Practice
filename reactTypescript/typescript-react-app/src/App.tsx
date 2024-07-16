import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Button from './Components/Buttons';
import Buttons from './Components/Buttons';

function App() {
  const [count,setCount]=useState(1);
  const handleClick =(value:number)=>{
      setCount(count+value);
  }
  return (
    <div className="App">
    <Header counterTitle={'CounterApp'}/>
    <Header counterTitle={count}/>
    <Buttons name="Increment" counter={()=>handleClick(1)}/>
    <Buttons name="Decrement" counter={()=>handleClick(-1)}/>
    </div>
  );
}

export default App;
