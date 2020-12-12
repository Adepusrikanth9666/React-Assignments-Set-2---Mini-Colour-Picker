import React, { useState } from "react";
import '../styles/App.css';

export default function Selection({applyColor}){
  
  const [style,setStyle]=useState({background:""});
 =



  return (
    <>
      <div onClick={()=>applyColor(setStyle)} className="fix-box" style={{background: style.background}}>
        <h2 className="subheading">Selection</h2>
      </div>

    </>
  )
}

