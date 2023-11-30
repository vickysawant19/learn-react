import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = () => {
  return (
    <Link to={"showrecipe/2"}>
         <div className='bg-fuchsia-300 w-full h-20 mt-4 flex '>
            <img 
            className='bg-gray-400 h-20 md:w-32 w-full ' 
            src="" alt="" />
           <div className='hover:opacity-80'>
                <h1 className=' mx-2 font-semibold text-ellipsis line-clamp-1'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod, ipsam!Lorem ipsum dolor sit amet.</h1>
                    <p className='mx-2 line-clamp-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit vitae? Modi dolore deleniti, reprehenderit cum error asperiores voluptas deserunt?</p>
           </div>
    </div>
    </Link>
  )
}

export default RecipeCard