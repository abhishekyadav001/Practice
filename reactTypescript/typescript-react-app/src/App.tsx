import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import Todos from './Components/Todos';

function App() {

  return (
    <div className="App">
      {/* <Counter /> */}
      <Todos />
    </div>
  );
}

export default App;
