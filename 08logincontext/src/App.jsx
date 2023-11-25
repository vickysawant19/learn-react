import { useState } from 'react'
import Login from './components/login'
import NavBar from './components/NavBar'
import LoginCheck from './components/LoginCheck'
import { LoginProvider } from './contexts/loginContex'

function App() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
    <LoginProvider value = {{username , password ,setUsername ,setPassword}}>
      <NavBar />
      <Login />

      <hr className='h-0.5  my-10 bg-gray-600 '/>

      <LoginCheck/>
     
      </LoginProvider>
    </>
  )
}

export default App
