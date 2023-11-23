import React from 'react'

import {Link, NavLink} from 'react-router-dom'


const Header = () => {
  return (
    <div
    className='bg-stone-400 text-center'>

      <div className='flex justify-center space-x-4 mx-4 items-center shadow-xl'>
        

        {/* <a href="/">Home</a>
        <a href="About">About</a>
        <a href="Contact">Contact</a>
        <a href="Profile">Profile</a> */}

        <NavLink
        to={"/"}
        className={({isActive}) =>
        `${isActive ? "bg-stone-600 text-white m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold" : "bg-stone-300 m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold"}`
    }> Home</NavLink>

         <NavLink 
        to={"/About"}
        className={({isActive}) =>
        `${isActive ? "bg-stone-600 text-white m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold" : "bg-stone-300 m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold"}`
    }> About</NavLink>

        <NavLink
        to={"/Contact"}
        className={({isActive}) =>
        `${isActive ? "bg-stone-600 text-white m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold" : "bg-stone-300 m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold"}`
    }>
       contacts</NavLink>

        <NavLink 
        to={`Profile/vickysawant19`}
        className={({isActive}) =>
        `${isActive ? "bg-stone-600 text-white m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold" : "bg-stone-300 m-2 p-2 rounded-lg hover:bg-stone-600 hover:text-white  shadow-xl font-bold"}`
    }> Profile</NavLink>
        

       
    

      </div>
    
      </div>
  )
}

export default Header