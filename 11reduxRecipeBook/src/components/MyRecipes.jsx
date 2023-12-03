import React from 'react'
import RecipeCard from './RecipeCard'

import { useDispatch ,useSelector } from 'react-redux'



const MyRecipes = () => {
  const recipes = useSelector(state => state.recipes)
  


  return (
   <div className='bg-fuchsia-200 mx-auto '>
    <div className='bg-white max-w-screen-lg mx-auto p-2 flex flex-wrap items-center justify-center '>

    <h1 className='text-center font-semibold text-2xl w-full '>
      
    {recipes.length > 0 ? 'All Recipes' : 'No Recipe found'}

    </h1>
       
         <div className='gap-4 md:grid md:grid-cols-2 '>
         {recipes?.map((recipe)=> {
             return  <div 
             key={recipe.id}>
              <RecipeCard recipeVal={recipe}/>
              </div>

       })}
         </div>


    

    </div>
   </div>
  )
}

export default MyRecipes