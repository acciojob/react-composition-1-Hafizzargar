import { useState } from 'react';
import React from "react";
import './../styles/App.css';

const App = () => {
   const [data,setdta]=useState('Tab1');
  function fxn(e){
    setdta(e.target.textContent);
    console.log(e.target.textContent)

  }
  
  return (
    <div>
        {/* Do not remove the main div */}
    <ul>
      <li onClick={fxn}>Tab1</li>
      <li onClick={fxn}>Tab2</li>
       <li onClick={fxn}>Tab3</li>
    </ul>
    <p> this is the content for {data}. </p>


    
    </div>
  )
}

export default App
