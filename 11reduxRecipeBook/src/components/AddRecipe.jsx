import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addRecipe } from '../store/RecipeSlice' 



const AddRecipe = () => {

  const recipesData = useSelector(state => state.recipes)

  const dispatch = useDispatch()

  const [recipeData, setRecipeData] =  useState(
    { 
      title:"",
      ingridents: " ",
      process: " ",
    }
  )


  function handleChange(e){
    const {name ,value } = e.target
    setRecipeData((prev)=>({
      ...prev,[name]:value,
    }));

  };

  function addRecipeData(){
    console.log(recipeData)
    dispatch(addRecipe(recipeData))
    setRecipeData({
      title: '',
      ingridents: '',
      process:'',
    })

    

  }

  

  return (
   
    <>
   <div className='bg-fuchsia-200'>
    
    <div className='bg-white max-w-screen-lg h-screen mx-auto'>
      <div className=' mx-4 flex flex-col md:max-w-screen-sm md:mx-auto'>
        <label 
        className='mt-2 '
        htmlFor="">Recipe Title</label>
        <input 
        name='title'
        value={recipeData.title}
        onChange={handleChange}
        className='border p-2 focus:bg-gray-200'
        type="text" />
        <label 
        className='mt-2'
        htmlFor="">Recipe Ingridents </label>
        <textarea 
        name='ingridents'
        value={recipeData.ingridents}
        onChange={handleChange}
        className='w-full border focus:bg-gray-200 p-2'
         id="" 
         cols="10" 
         rows="5"></textarea>
        <label 
        className='mt-2'
        htmlFor="">Recipe process</label>
        <textarea 
        name='process'
        value={recipeData.process}
        onChange={handleChange}
        className='w-full border focus:bg-gray-200 p-2'
        id="" cols="10" rows="8"></textarea>

        <button 
        onClick={addRecipeData}
        className='bg-fuchsia-600 border rounded-full mt-4 p-2 text-white font-bold text-xl hover:bg-fuchsia-200 hover:border-fuchsia-800 hover:text-fuchsia-900'>Save</button>
   


      </div>
        

    </div>
   </div>

    
    </>
  )
}

export default AddRecipe