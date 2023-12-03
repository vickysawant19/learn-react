import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ShowRecipe = () => {
  
  const {id}= useParams()
  const recipes = useSelector(state => state.recipes)
  
  const recipe = recipes.find((rec) => rec.id === id )
  
   
  return (
  <>
      <div className='max-w-screen-xl mx-auto p-2'>
          <h1 className=' w-full text-center text-2xl font-semibold'>
            Recipe of {recipe?.title}
          </h1>
          <div className='w-full h-32 bg-fuchsia-200 mt-2'>
            <img 
            className='object-center h-full w-full'
            src={recipe?.image} alt="" />


          </div>
          <h2 className='font-semibold mt-2'>
            Recipe Ingrident :
          </h2>
          <p>
             {recipe?.ingridents}
          </p>
          <h2 className='font-semibold mt-2'>
            Recipe Process :
          </h2>
          <p>
            {recipe?.process}
          </p>



      </div>
  </>
  )
}

export default ShowRecipe