import { useState } from 'react'
import './App.css'

function App() {
 let [count, setCount] = useState(0)

 function increaseCount (){
  if(count < 20){
    count = count + 1 ; 
    setCount(count)
  }
  

 }

 function decreaseCount (){

  if (count != 0){
    count = count - 1 ; 
    setCount(count)
  }
 }

  

  return (
    <>
      <div className=' bg-gradient-to-b from-slate-500 to-slate-400 shadow-lg p-2 fixed w-full '>
        <h1 className='uppercase text-center text-2xl font-semibold'>
          Basic React Counter
        </h1>
      </div>
      <div className='bg-slate-800 h-screen w-full flex items-center justify-center'>
               
           <div className=' bg-gray-300 p-4 w-96 shadow text-center rounded-lg'>
                <div className='m-4 text-2xl font-semibold'> Count : {count}</div>
                <div className='flex items-center justify-center gap-4'>
                  <button 
                  onClick = {increaseCount} 
                  className='bg-blue-300 m-2 p-2 rounded shadow-lg hover:bg-blue-400 text-2xl'> 
                  
                  Count +
                  </button>
                  <button 
                  onClick = {decreaseCount}  
                  className='bg-blue-300 m-2 p-2 rounded shadow-lg hover:bg-blue-400 text-2xl'> Count -
                  </button>
                    
                </div>
               
              
           </div>

      </div>
    </>
  )
}

export default App
