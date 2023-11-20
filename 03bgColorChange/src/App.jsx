
import { useState } from "react"
import Button from "./components/Button"


function App() {

  const [bgCol , setValue] =useState("gray")

  const handleBtnClick = (returnedValue) => {

    // console.log("return:",returnedValue)
    setValue(returnedValue);


  }


  return (
    <>

    <div className={`mt-16 bg-${bgCol}-500 h-screen shadow-xl w-full ease-in flex items-center justify-center flex-wrap`}>

      <div className="p-2 rounded-full bg-white mx-10 fixed bottom-10 flex flex-wrap justify-center items-center gap-2 ">
         <div className="hidden bg-gray-500 bg-red-500 bg-green-500 bg-amber-500 bg-violet-500 bg-yellow-500 bg-pink-500 bg-amber-500 bg-orange-500"> 
         </div>
        
        

      <Button btnName="Red" btnColor="red" onClick={handleBtnClick}/>
      <Button btnName="Green" btnColor="green" onClick={handleBtnClick}/>
      <Button btnName="Orange" btnColor="orange" onClick={handleBtnClick}/>
      <Button btnName="Violet" btnColor="violet"onClick={handleBtnClick}/>
      <Button btnName="Yellow" btnColor="yellow" onClick={handleBtnClick}/>
      <Button btnName="Pink" btnColor="pink" onClick={handleBtnClick}/>
      <Button btnName="Amber" btnColor="amber" onClick={handleBtnClick}/>

      </div>


    </div>
    <h1 ></h1>
    

    </>
  )
}

export default App
