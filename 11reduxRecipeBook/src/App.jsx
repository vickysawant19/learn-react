import { useState } from 'react'
import { Provider } from 'react-redux'

import Nav from './components/Nav'
import { BrowserRouter, Outlet } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
