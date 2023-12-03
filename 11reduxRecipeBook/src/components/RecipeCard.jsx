import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = ({recipeVal}) => {
  return (
    <Link to={`showrecipe/${recipeVal.id}`}>
         <div className='bg-fuchsia-300 w-96 max-w-screen-sm h-20 mt-4 flex rounded-lg overflow-hidden shadow-lg'>
            <img 
            className='bg-gray-400 h-20 w-32  ' 
            src={recipeVal.image} alt="" />

           <div className='hover:opacity-80 w-full hover:bg-fuchsia-950 hover:text-fuchsia-100'>
                <h1 className=' mx-2 font-semibold text-ellipsis line-clamp-1'>{recipeVal.title}</h1>
                    <p className='mx-2 line-clamp-2 '>{recipeVal.process}</p>
           </div>
    </div>
    </Link>
  )
}

export default RecipeCard