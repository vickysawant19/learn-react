import React from 'react'

const ButtonBox = () => {
  return (

    <div className='border m-1 rounded-lg bg-white'>
        <div className='flex justify-between mx-2  '>
        <label 
        className=' text-gray-500 font-semibold'
        htmlFor="">From</label>
        <label 
        className='text-gray-500 font-semibold'
        htmlFor="">Currency Type</label>
        </div>

        <div className='flex justify-between items-center'>

        <input 
            className=' text-xl p-2 m-2 rounded-lg'
            value={10}
            type="text" />
            <select
            className='border m-2 rounded-lg h-8 bg-gray-200 w-20' 
            name="" 
            id="" >
                <option value="">AAA</option>
                <option value="">VVV</option>
            </select>
      
        </div>
      

    </div>
    
  )
}

export default ButtonBox