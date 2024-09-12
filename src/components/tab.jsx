import { useState } from 'react';

function Tab() {
  const [data,setdta]=useState('Tab1');
  function fxn(e){
    setdta(e.target.textContent);
    console.log(e.target.textContent)

  }

  return (
    <>
     <ul>
      <li onClick={fxn}>Tab1</li>
      <li onClick={fxn}>Tab2</li>
       <li onClick={fxn}>Tab3</li>
    </ul>
    <p> this is the content for {data}. </p>



    
    
    </>
  );
}

export default Tab;
