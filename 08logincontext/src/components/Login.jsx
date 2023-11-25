import React, { useState } from 'react'
import useLogin from '../contexts/loginContex'





const Login = () => {

const [user, setUser] = useState("")
const [pass, setPass] = useState("")

   const {setUsername ,setPassword} = useLogin()
   

   const handleClick = (e) => {
    e.preventDefault()
    setUsername(user)
    setPassword(pass)
    setUser("")
    setPass("")
   }

  return (
    <div className='mt-10 flex w-full flex-col justify-center'>

        <div className='bg-gray-400 p-4 rounded-xl shadow max-w-sm w-full text-center mx-auto'>
            <div className='mb-4 text-2xl font-semibold text-white'>
                    Login
            </div>

            <hr />

            <div className='grid '>
                <label 
                className='mt-2 mx-2 text-left text-xl'
                htmlFor="username">Username</label>
                <input 
                onChange={(e) => setUser(e.target.value)}
                value={user}
                className='m-2 text-xl rounded border-none p-2 focus:ring  focus:outline-none'
                type="text" id='username' />
            </div>

            <div className='grid '>
                <label 
                    className='mt-2 mx-2 text-left text-xl'
                    htmlFor="password"> Password </label>
                <input 
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    className='m-2 text-xl rounded border-none p-2 focus:ring  focus:outline-none'
                    type="text" id='password' />
       
            </div> 
            <div className='w-full flex justify-stretch'>
                <button 
                onClick={handleClick}
                className='bg-gray-600 w-full m-2 p-2 text-2xl text-white font-semibold text-center rounded-lg border hover:text-gray-600 hover:border hover:border-gray-600 hover:bg-white'>
                Login
                </button>

            </div>
            
               
            </div> 
    </div>
  )
}

export default Login