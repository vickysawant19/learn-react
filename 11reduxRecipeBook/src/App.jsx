import { useState } from 'react'

import Nav from './components/Nav'
import Home from './components/Home'
import MyRecipes from './components/MyRecipes'
import AddRecipe from './components/AddRecipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    
    <Nav/>
    
    {/* <Home/> */}
    <MyRecipes/>
    
    {/* <AddRecipe/> */}
    
     
    </>
  )
}

export default App
