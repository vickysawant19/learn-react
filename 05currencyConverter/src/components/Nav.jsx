import React from 'react'

const Nav = () => {
  return (
    <div className='w-full h-16 bg-slate-500 flex items-center justify-center'>
        <nav className='w-full max-w-screen-lg bg-slate-600 h-full flex justify-between items-center px-10'> 
        <div className='text-2xl font-bold text-white'>
            Currency Converter
        </div>
        <div className=' text-yellow-300  text-2xl font-bold hover:scale-150 hover:mix-blend-screen'>
            $$$
        </div>

        </nav>


    </div>
  )
}

export default Nav