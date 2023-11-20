import React from 'react'

const Nav = () => {
  return (
    <div className='fixed top-0 w-full  h-16 flex justify-center items-center bg-stone-500'>
    <div className='w-full md:max-w-screen-md flex items-center justify-between bg-stone-400 h-16 px-4 shadow-xl'>
        <div className='font-bold text-2xl '> React Project  </div>
        <div className='font-semibold text-xl text-red-500'>Password Generator</div>
    </div> 
    
    </div>
    )
}

export default Nav