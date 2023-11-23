import { useState } from 'react'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-fuchsia-400  max-w-screen-lg mx-auto '>  
        <div className='text-2xl text-center p-2  font-semibold '>
        React Contex
        </div>
        <div className='bg-fuchsia-200 h-screen flex flex-col items-center justify-center '>
          <button className='uppercase p-4 bg-[#212121] text-white m-2 rounded-xl hover:bg-[#412121]'>
            dark mode
          </button>

                <Card />
          
      
        </div>

      </div>
    </>
  )
}

export default App
