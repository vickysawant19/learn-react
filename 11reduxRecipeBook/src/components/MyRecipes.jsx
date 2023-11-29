import React from 'react'

const MyRecipes = () => {
  return (
   <div className='bg-fuchsia-200 mx-auto h-screen'>
    <div className='bg-white max-w-screen-xl h-screen mx-auto p-2'>

        <h1 className='text-center font-semibold text-2xl '>Recipe's</h1>
        <div className='bg-fuchsia-300 w-full h-20 mt-4 flex '>
            <img 
            className='bg-gray-400 w-32 h-20'
            src="" alt="" />
           <div className='bg-red-800 w-fit'>
                <h1 className='m-2 font-semibold'>Lorem ipsum dolor sit amet.</h1>
                    <p className=' m-2 text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, velit vitae? Modi dolore deleniti, reprehenderit cum error asperiores voluptas deserunt?</p>
           </div>
        </div>

        <div className='bg-fuchsia-300 w-full h-20 mt-4'>
            <img 
            className='bg-gray-400 w-32 h-20 object-cover'
            src="" alt="" />

        </div>

            
            


       



    </div>


   </div>
  )
}

export default MyRecipes