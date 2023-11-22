import React, { useState } from 'react'

const ButtonBox = ({
  amountValue,
  setAmountValue,
  setSelectCurrency,
  selectedCurrency = "usd",

  statusKey = '',
  boxOption = []
}) => {
  
  return (

    <div className='border m-1 rounded-lg bg-white'>
        <div className='flex justify-between mx-2  '>
        <label 
        className=' text-gray-500 font-semibold'
        htmlFor="">{statusKey}</label>
        <label 
        className='text-gray-500 font-semibold'
        htmlFor="">Currency Type</label>
        </div>

        <div className='flex justify-between items-center'>

        <input 
            onChange={(e) => {setAmountValue(e.target.value)}}
            className='border-none focus:outline-none text-xl p-2 m-2 rounded-lg'
            value={amountValue}
            type="number" />

            
            <select
            className='border m-2 rounded-lg h-8 bg-gray-200 w-20' 
            name="" 
            id="" 
            value={selectedCurrency}
            onChange={(e) => {setSelectCurrency && setSelectCurrency(e.target.value)}}
           >
                  {boxOption.map((value) =>(<option key={value}>{value}</option>))}
                
            </select>
      
        </div>
        
      

    </div>
    
  )
}

export default ButtonBox