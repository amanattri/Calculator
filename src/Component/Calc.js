import React, { useState } from 'react'

export default function Calc() {

   const [result,setResult]=useState("");
   const clickHandler=(event)=>{
    setResult(result.concat(event.target.value))
   }


   const clearAll=()=>{
    setResult("");
   }

   const calculate=()=>{
     // eslint-disable-next-line 
    setResult(eval(result).toString());
   }

  return (
    <div className="container ">
    <div className="row">
      <input className="input" type="text" value={result} id='txt'/>
    </div>
    <div className="row">
    <input type="button" value="Clear" className="button" onClick = {clearAll}/>
      <input type="button" value="%" className="button" onClick = {clickHandler}/>
      <input type="button" value="M+" className="button" onClick = {clickHandler}/>
      <input type="button" value="M-" className="button" onClick = {clickHandler}/>
    
    </div>
    <div className="row">
    <input type="button" value="7" className="button" onClick = {clickHandler}/>
    <input type="button" value="8" className="button" onClick = {clickHandler}/>
    <input type="button" value="9" className="button" onClick = {clickHandler}/>
    <input type="button" value="*" className="button" onClick = {clickHandler}/>
     
    </div>
    <div className="row">
    <input type="button" value="4" className="button" onClick = {clickHandler}/>
    <input type="button" value="5" className="button" onClick = {clickHandler}/>
    <input type="button" value="6" className="button" onClick = {clickHandler}/>
    <input type="button" value="/" className="button" onClick = {clickHandler}/>
      
    </div>
    <div className="row">
    <input type="button" value="1" className="button" onClick = {clickHandler}/>
    <input type="button" value="2" className="button" onClick = {clickHandler}/>
    <input type="button" value="3" className="button" onClick = {clickHandler}/>
    <input type="button" value="+" className="button" onClick = {clickHandler}/>
    </div>
    <div className="row">
    <input type="button" value="0" className="button" onClick = {clickHandler}/>
    <input type="button" value="." className="button" onClick = {clickHandler}/>
    <input type="button" value="=" className="button" onClick = {calculate}/>
    <input type="button" value="-" className="button" onClick = {clickHandler}/>

    </div>
  </div>
  )
}

