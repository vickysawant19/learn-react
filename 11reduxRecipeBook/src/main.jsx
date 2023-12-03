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

import { Provider } from 'react-redux'
import { store } from './store/Store.js';
import About from './components/About.jsx';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>} errorElement={<div> <Nav/> No Page Found</div>}>
     <Route index element = {<Home/>}/>
     <Route path="myrecipe" element = {<MyRecipes/>} />
    
     <Route path="myrecipe/showrecipe/:id" element = {<ShowRecipe/>}/>
     <Route path="addrecipe" element = {<AddRecipe/>} />
     <Route path="about" element = {<About/>} />
     
  </Route>
    

))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)


