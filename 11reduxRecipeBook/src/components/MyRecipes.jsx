import React from 'react'
import RecipeCard from './RecipeCard'

const MyRecipes = () => {
  return (
   <div className='bg-fuchsia-200 mx-auto h-screen'>
    <div className='bg-white max-w-screen-xl h-screen mx-auto p-2'>

        <h1 className='text-center font-semibold text-2xl '>Recipe's</h1>
       
     <RecipeCard/>
     <RecipeCard/>
     <RecipeCard/>
    </div>
   </div>
  )
}

export default MyRecipes