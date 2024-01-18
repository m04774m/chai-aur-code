import { useCallback, useEffect, useState,useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed]= useState(false)
  const [password,setPassword]= useState("")

  // useRef
  const passwordRef=useRef(null)

  
  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMONPQRSTUVWXYZabcdefghijklmnoopqrstuvwxyz"
    if (numberAllowed)str+= "0123456789"
    if(charAllowed)str+="!@#$%^&*(){}<>[];/"

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char);
    }
    setPassword(pass)
  }
    ,[length,numberAllowed,charAllowed,setPassword])

  const copyToClipboard= useCallback(()=>{
    passwordRef.current?.select()  //to select the text in password label
    passwordRef.current?.setSelectionRange(0,15);  //to select the text in password label in a range
    window.navigator.clipboard.writeText(password) //to copy the password
  },[password])

  useEffect(()=>passwordGenerator(),[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
  
      <div className=' w-auto max-w-screen-md bg-gray-700 rounded-xl py-4 my-8 mx-auto px-4 text-orange-500'>
        <h1 className="text-3xl text-white text-center mb-3 ">PASSWORD GENERATOR</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}/> 
          <button 
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5  shrink-0' >COPY</button>
        </div>

        <div className="flex text-m gap-x-8">
          <div className="flex items-center gap-x-1">
            <input type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer" 
            onChange={e => setLength(e.target.value)} />
            <label>Length : {length}</label>
          </div>  

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=> setNumberAllowed((prev)=>!prev)} />
            <label>Number</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input type="checkbox" 
            defaultChecked={charAllowed}
            id='charInput'
            onChange={()=> setCharAllowed((prev)=>!prev)}/>
            <label>Character</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
