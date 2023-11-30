import React from 'react'

import { useParams } from 'react-router-dom'



const ShowRecipe = () => {

  const {cardid} = useParams()

  return (
  <>
      <div className='max-w-screen-xl mx-auto p-2'>
          <h1 className=' w-full text-center text-2xl font-semibold'>
            Recipe Title {cardid}
          </h1>
          <div className='w-full h-32 bg-fuchsia-200 mt-2'>


          </div>
          <h2 className='font-semibold mt-2'>
            Recipe Ingrident :
          </h2>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in aliquid fugiat quisquam. Tempora dolor amet dolorum natus commodi?
          </p>
          <h2 className='font-semibold mt-2'>
            Recipe Process :
          </h2>
          <p>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nemo in aliquid fugiat quisquam. Tempora dolor amet dolorum natus commodi?
          </p>



      </div>
  </>
  )
}

export default ShowRecipe