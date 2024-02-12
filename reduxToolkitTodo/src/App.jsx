import { useState } from 'react'
import './App.css'
import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {

  return (
    <>
      <h1>Learning about Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
