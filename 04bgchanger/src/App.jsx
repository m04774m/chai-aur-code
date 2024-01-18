import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-screen h-screen duration-1000 "
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className=" flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2" >
          <button onClick={()=>setColor("yellow")} className="outline-none border-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor:"yellow", color:"white"}} >YELLOW</button>
          <button onClick={()=>setColor("green")} className="outline-none border-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor:"green", color:"white"}} >GREEN</button>
          <button onClick={()=>setColor("red")} className="outline-none border-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor:"red", color:"white"}} >RED</button>
          <button onClick={()=>setColor("blue")} className="outline-none border-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor:"blue", color:"white"}} >BLUE</button>
          <button onClick={()=>setColor("pink")} className="outline-none border-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor:"pink", color:"white"}} >PINK</button>
          <button onClick={()=>setColor("purple")} className="outline-none border-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor:"purple", color:"white"}} >PURPLE</button>
          <button onClick={()=>setColor("black")} className="outline-none border-none px-4 py-1 rounded-full shadow-xl" style={{backgroundColor:"black", color:"white"}} >BLACK</button>
        </div>
      </div>
    
    </div>
  )
}

export default App
