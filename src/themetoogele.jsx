import React, { useState } from 'react'
import './index.css'

function ThemeToggle() {

  const [name, setName] = useState("");


  return (
    <div>
      <input onChange={(e) => {
    console.log(e.target.value);       
    setName(e.target.value);
  }} />
      <h1>{name}</h1>
    </div>
  );
}

export default ThemeToggle;
