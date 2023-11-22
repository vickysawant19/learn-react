import ButtonBox from "./components/ButtonBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import {  useState } from "react";


import useCurrencyFetch from "./hokes/useCurrencyFetch";



function App() {
  const [amount , setAmount] = useState(0)
  const [convertedAmount ,setConvertedAmount] = useState(0)
  
  const [from ,setFrom] = useState("usd")
  const [to , setTo] = useState("inr")

  const CurrencyInfo = useCurrencyFetch(from)


  const options = Object.keys(CurrencyInfo)
  

  function handleSwap () {

   setFrom(to)
   setTo(from)
   setConvertedAmount(amount)
   setAmount(convertedAmount)
   

  }

   function handleConvertClick(){
   
    setConvertedAmount((amount * CurrencyInfo[to]))
    
   }
  

  return (
    <>
    <div className=" bg-slate-500 w-full h-screen flex justify-center">
      <div className="w-full max-w-screen-lg bg-slate-400 h-full flex flex-col items-center shadow-lg px-4 pt-10 ">
        <div className=" bg-white rounded-xl bg-opacity-60">
           <div className=" bg-opacity-50 rounded-lg h-fit flex items-center justify-center p-4 relative  flex-col md:flex-row ">
          <ButtonBox
          amountValue = {amount}
          setAmountValue = {(value)=>setAmount(value)}

          selectedCurrency={from}
          setSelectCurrency={(value)=> setFrom(value)}

          statusKey ="From"
          boxOption = {options}/>
         
              <div 
              onClick={handleSwap}
              className={`absolute md:relative flex items-center justify-center bg-blue-600 w-14 h-8 text-center text-white font-bold rounded border-2 p-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 shadow-xl`}> 
              <FontAwesomeIcon 
              className="rotate-90 md:rotate-0" 
              icon={faExchangeAlt} />
  
                          
              </div>
         
          <ButtonBox 
            amountValue = {convertedAmount}
            setAmountValue = {(value)=>{setConvertedAmount(value)}}

            selectedCurrency={to}
            setSelectCurrency={(value)=> setTo(value)}

            statusKey="To"
            boxOption = {options}/>
          
          </div>

          <div 
            onClick={handleConvertClick}
            className=" bg-blue-500 cursor-pointer h-14 rounded-lg mx-4 mb-4 text-center font-semibold text-2xl flex items-center justify-center text-white shadow-lg hover:bg-blue-700">
            Convert 
            <div className=" uppercase mx-2">
              {from}</div>to<div className="uppercase mx-2 ">{to}
            </div>
           </div>
        </div>

      <h1 className='uppercase text-center mt-10'>Currency Converter @ </h1>
      </div>

    </div>
    </>
  )
}

export default App
