import React from 'react'
import useTheme from '../contexts/themeContext'

const ThemeBtn = () => {
    const {themeMode , setThemeMode} = useTheme()

    function handleClick(e){
        e.preventDefault();
        themeMode === "dark"?setThemeMode("light"):setThemeMode("dark")
    }


  return (
    <>
            <button 
            onClick={handleClick}
            className='uppercase p-4 border-2 bg-yellow-400 font-semibold dark:bg-[#212121] text-white m-2 rounded-xl hover:bg-opacity-40 dark:hover:bg-opacity-40 '>
            {themeMode} mode
            </button>
    </>
  )
}

export default ThemeBtn