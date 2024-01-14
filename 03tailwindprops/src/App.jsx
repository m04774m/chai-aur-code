import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-3xl font-bold underline mb-10 rounded-xl">
      Hello world!
    </h1>

    <Card username="Moazzam" sitelink="Visit Me"/>
    <Card sitelink='CLICK'/>
    </>
  )
}

export default App
