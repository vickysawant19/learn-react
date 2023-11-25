import React from 'react'
import useLogin from '../contexts/loginContex'


const LoginCheck = () => {
  const { username } = useLogin()
  return (
    <div className='flex justify-center mt-10 '>
        <div>
        {username ? (<div>welcome : {username} </div>): <div>Please login</div>}
          
        </div>


    </div>
  )
}



export default LoginCheck