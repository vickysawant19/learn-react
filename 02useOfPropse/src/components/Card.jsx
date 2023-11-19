import React from 'react'

const Card = ({name , about}) => {
  return (
    <div className=' bg-gray-300 shadow-xl rounded-xl overflow-hidden md:flex m-10'>
       
            <img className=' w-32 h-32
            md:h-auto bg-red-400   
            rounded-full mx-auto
            m-3 overflow-hidden
                md:rounded-none md:m-0
                object-cover'
            src="https://avatars.githubusercontent.com/u/68048696?v=4" alt="" />
        

        <div className='bg-gray-100 md:w-fit h-full p-4 w-full '>
            <div className=' font-bold uppercase text-center mt-2 md:text-left'>
                {name}
            </div>
            <div className=' text-center md:text-left '>
                {about}
            </div>
        </div>
        
        
    </div>
  )
}

export default Card