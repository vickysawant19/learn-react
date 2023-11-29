import React from 'react'

const Nav = () => {
  return (
    <div className='my-0 bg-fuchsia-400 p-4'>
    
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center px-4'>
        <div className=' text-xl font-bold m-2'>Logo</div>
           <ul  className='flex rounded-full border gap-3'>
            <li className='p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'>Home</li>
            <li className='p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'>My Recepies</li>
            <li className='p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'>Add Recipe</li>
            <li className='p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'>About</li>
           </ul>
        </div>


    </div>
  )
}

export default Nav