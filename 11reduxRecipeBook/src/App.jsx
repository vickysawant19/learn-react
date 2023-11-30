import { useState } from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import MyRecipes from './components/MyRecipes'
import AddRecipe from './components/AddRecipe'
import ShowRecipe from './components/ShowRecipe'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <Nav/>
    
    <Outlet/>
    
    {/* <Home/> */}
    {/* <MyRecipes/> */}

    <ShowRecipe/>
    
    
    {/* <AddRecipe/> */}
    
     
    </>
  )
}

export default App
