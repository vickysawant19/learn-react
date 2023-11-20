import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [pass ,setPass] = useState("ashdak")
  const [length ,setLength] = useState(8)
  const [inclNumber, setInclNumber] = useState(false)
  const [inclChar, setInclChar] = useState(false)

  const passRef = useRef(null)

  const copyPassword = () => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 999); // Set the selection range to cover the entire text
    // passRef.current?.focus(); 
    window.navigator.clipboard.writeText(pass)
  }
  


  useEffect(()=> {
    generatePass();

  },[length,inclChar,inclNumber,setPass])

  const generatePass = () => {
    let password = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(inclChar) str += "~@#$%^&*()_+=?"
    if(inclNumber) str += "0123456789" 

    for (let i = 0; i < length; i++) {
      let num = Math.floor(Math.random()* str.length + 1)

      password += str.charAt(num)
    }

    setPass(password)

  }
  

  return (
    <>
      <div className=' bg-stone-300 w-full h-screen mt-16 flex items-center justify-center'>
        <div className=' bg-white rounded-xl shadow-lg '>
          <div className='p-2 flex items-center justify-stretch' >
            <input
            className=' bg-gray-100 w-full p-2 rounded-l-xl '
            type="text"
            disabled 
            value={pass} 
            ref={passRef}/>

            <button 
            onClick={copyPassword}
            
            className=' bg-green-400 p-2 rounded-r-xl w-20 outline-none'>
              Copy
            </button>
           
          </div>
          <div className='m-4 p-2 space-x-4 flex flex-wrap'>
            <div className='space-x-1'>
            <input 
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            className=''
            type="range"
            min={8} 
            max={100}
            name='charNo'/>
            
            <label htmlFor="charNo">Length:{length}</label>
            </div>

            <div className='space-x-1'>
            <input 
            onChange={()=>{setInclNumber(prev => !prev)}}
            type="checkbox" 
            checked={inclNumber}
            name="inclNumber" id="inclNumber" />
            <label htmlFor="inclNumber">Number</label>
            </div>

            
          <div className='space-x-1'>
          <input 
            onChange={()=>{setInclChar(prev => !prev)}}
            checked={inclChar}
            type="checkbox" 
            name="inclChar" id="inclChar" />
            <label htmlFor="inclChar">Character</label>
          </div>



          </div>
          

        


        </div>


      </div>
    </>
  )
}

export default App
