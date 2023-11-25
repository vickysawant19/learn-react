import { useContext, useEffect, useState } from 'react'
import Card from './components/card'
import { ThemeProvider } from './contexts/themeContext';
import useTheme from './contexts/themeContext';
import ThemeBtn from './components/ThemeBtn';


function App() {
  

   const [themeMode , setThemeMode] =  useState('dark')
   

   useEffect(() => {
       const dom = document.querySelector("html");
       dom.classList = themeMode
   },[themeMode])


  

  return (
    <>
     <ThemeProvider value = {{themeMode, setThemeMode} }>
      <div className='bg-fuchsia-400  max-w-screen-lg mx-auto '>  
        <div className='text-2xl text-center p-2  font-semibold  '>
        React Contex
        </div>
        <div className='bg-fuchsia-200 h-screen flex flex-wrap flex-col items-center justify-center '>
                <ThemeBtn/>

                <Card />
        </div>

      </div>
      </ThemeProvider>
    </>
  )
}

export default App
