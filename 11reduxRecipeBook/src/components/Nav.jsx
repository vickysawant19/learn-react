import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='my-0 bg-fuchsia-400 p-4'>
    
        <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-center px-4'>
        <div className=' text-xl font-bold m-2'>Logo</div>
           <ul  className='flex rounded-full border gap-3'>
            <NavLink
            to={"home"}
            className={({isActive})=> `${isActive ? 'p-2 hover:opacity-80 bg-fuchsia-200 rounded-full':'p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'}` }>Home</NavLink>


            <NavLink
            to={"myrecipe"}
            className={({isActive})=> `${isActive ? 'p-2 hover:opacity-80 bg-fuchsia-200 rounded-full':'p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'}` }>My Recipes</NavLink>

            <NavLink
            to={"addrecipe"}
             className={({isActive})=> `${isActive ? 'p-2 hover:opacity-80 bg-fuchsia-200 rounded-full':'p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'}` }>Add Recipes</NavLink>

            <NavLink
            to={"about"}
            className={({isActive})=> `${isActive ? 'p-2 hover:opacity-80 bg-fuchsia-200 rounded-full':'p-2 hover:opacity-80 hover:bg-fuchsia-200 hover:rounded-full'}` }>About</NavLink>
             </ul>
        </div>


    </div>
  )
}

export default Nav