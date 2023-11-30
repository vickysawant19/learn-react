import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route  } from "react-router-dom";
import Home from './components/Home.jsx';
import MyRecipes from './components/MyRecipes.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import Nav from './components/Nav.jsx';
import ShowRecipe from './components/ShowRecipe.jsx';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} errorElement={<Nav/>}>
     <Route path="Home" element = {<Home/>}/>
     <Route path="MyRecipe" element = {<MyRecipes/>}>
        <Route path="showrecipe/:cardid" element= {<ShowRecipe/>}/>
     </Route>
     <Route path="AddRecipe" element = {<AddRecipe/>} />
     <Route path="About" element = {<ShowRecipe/>} />


  </Route>
    

))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
