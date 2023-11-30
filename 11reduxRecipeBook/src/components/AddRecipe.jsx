import React from 'react'

const AddRecipe = () => {
  return (
    <div className='flex flex-col mx-4 mt-2'>
        
        <label htmlFor="">Recipe Title</label>
        <input 
        className='border'
        type="text" />
        <label 
        className='mt-2'
        htmlFor="">Recipe Ingridents </label>
        <textarea 
        className='w-full border focus:bg-gray-200'
        name="" id="" cols="10" rows="5"></textarea>
        <label 
        className='mt-2'
        htmlFor="">Recipe process</label>
        <textarea 
        className='w-full border focus:bg-gray-200'
        name="" id="" cols="10" rows="8"></textarea>
        <button className='bg-fuchsia-600 border rounded-full mt-4 p-2 text-white font-bold text-xl hover:bg-fuchsia-200 hover:border-fuchsia-800 hover:text-fuchsia-900'>Save</button>
    </div>
  )
}

export default AddRecipe