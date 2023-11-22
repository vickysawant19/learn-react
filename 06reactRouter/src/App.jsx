
import { Outlet } from "react-router-dom"
import {Header ,Footer} from "./components"



function App() {

  return (
    <>
   
    <div className='max-w-screen-lg m-auto'>

       <h1 className=' w-full'>
        <Header />
        <Outlet/>
        <Footer/>
       
     </h1>
    </div>

    </>
   
  )
}

export default App
