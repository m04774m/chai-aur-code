import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   let [counter,setCounter]= useState(15)

   const addValue = ()=>{
    if(counter<20){
    counter=counter+1;
    console.log(counter);
    setCounter(counter)
    }
   }
   const removeValue = ()=>{
    if(counter>0){
    counter=counter-1;
    console.log(counter);
    setCounter(counter)
    }
   }
  return (
    <>
      <h1>Chai and React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>ADD VALUE {counter}</button>
      <br /><br />
      <button onClick={removeValue}>Remove VALUE {counter}</button>
    </>
  )
}

export default App
