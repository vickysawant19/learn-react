import ButtonBox from "./components/ButtonBox"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';



function App() {
  

  return (
    <>
    <div className="mt-16 bg-slate-500 w-full h-screen flex justify-center">
      <div className="w-full max-w-screen-lg bg-slate-400 h-full flex flex-col items-center shadow-lg px-4 pt-10 ">
        <div className="bg-white bg-opacity-50 rounded-lg h-fit flex items-center justify-center p-4 relative  flex-col md:flex-row ">
          <ButtonBox />
         
              <div className={`absolute md:relative flex items-center justify-center bg-blue-600 w-14 h-8 text-center text-white font-bold rounded border-2 p-1 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-600 shadow-xl`}> 
              <FontAwesomeIcon 
              className="rotate-90 md:rotate-0" 
              icon={faExchangeAlt} />
             
               
              </div>
         
          <ButtonBox />

          
        </div>

      <h1 className='uppercase text-center mt-10'>Currency Converter @ </h1>
      </div>

    </div>
    </>
  )
}

export default App
