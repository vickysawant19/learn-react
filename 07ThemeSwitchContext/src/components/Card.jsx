import React from 'react'

import useTheme from '../contexts/themeContext'

const Card = () => {

  const {themeMode, setThemeMode} = useTheme()


  const handleClick = (e) =>{
    e.preventDefault()
    themeMode === "light" ? setThemeMode("dark"):setThemeMode("light")
    const dom = document.querySelector("html");
    dom.classList = themeMode
}
  return (
    <div className='bg-fuchsia-100 dark:bg-[#212121] max-w-lg flex justify-evenly items-center border-2 p-2 rounded-xl border-white mx-24'>

        < div  className='p-2 rounded-lg flex items-center flex-col'>

            <img 
            className=' object-cover border-2 rounded-xl ' src="https://m.media-amazon.com/images/I/61GcyfUJgiL._SX522_.jpg" alt="" srcset="" />
            <h2 className='text-2xl my-2 dark:text-white'>
            UNITED COLORS OF BENETTON Men's Regular Fit Round Neck Printed Tshirts

            </h2>
            <div className='flex items-center w-full justify-between p-4'>

                <div className='font-bold text-4xl dark:text-white'> ₹599 </div>
                <button
                 onClick={handleClick}
                className='font-bold text-xl text-white bg-gradient-to-tl from-yellow-600 to-orange-200 hover:bg-gradient-to-b hover:from-yellow-600 hover:to-orange-200 transition-all duration-300 p-2 rounded-lg '>Add to cart</button>
                </div>

            </div>
           
      
    </div>
  )
}

export default Card