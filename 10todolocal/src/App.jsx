import { useState,useEffect} from 'react'
import './App.css'
import {TodoProvider} from './context'
import { TodoForm, TodoItem } from './components'
function App() {
  
    const [todos,setTodos] = useState([])

    const addTodo = (todo)=>{
        setTodos((prev)=>[{id:Date.now(),...todo},...prev])
    }

    const updateTodo = (id,todo)=>{
        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===id? todo: prevTodo)))
    }
     
    const deleteTodo  = (id)=>{
        setTodos((prev)=>prev.filter((todo) => todo.id !== id))
    }

    const toggleComplete = (id)=>{
        setTodos((prev)=>prev.map(prevTodo=>prevTodo.id===id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo))
    }

    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem("todos"))
        if(todos && todos.length > 0){
            setTodos(todos);
        }
    },[])

    useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
    },[todos])
    
  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    
        <div className="  py-8 min-h-screen">
            <div className="bg-[#214975] w-full  max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mt-2">Manage Your Todos</h1>
                <code className="text-sm italic  mb-8">(created by <a href="https://www.linkedin.com/in/moazzammajid" target='_blank' className=' text-yellow-400'>Moazzam</a>)</code>
                <div className="mb-4 mt-2">
                   
                    <TodoForm/>
                </div>
                <div className="flex flex-wrap gap-y-3">
                
                    {todos.map((todo)=>(
                        <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default App
