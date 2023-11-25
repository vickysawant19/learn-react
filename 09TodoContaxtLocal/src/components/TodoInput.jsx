import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

const TodoInput = () => {

  const { addTodo } = useTodo()

  const [todo, setTodo] = useState("")


  function handleClick(e){
    e.preventDefault()
    if(todo === "") return
    addTodo( {todo, iscomplete:false} )
    setTodo("")
  }



  return (
    <div className='mt-10 w-full max-w-sm flex items-center justify-center mb-5'>
        <input 
        onChange={(e)=>{setTodo(e.target.value)}}
        value={todo}
        className='w-full text-xl p-2 rounded-l-lg focus:outline-none shadow-lg'
        type="text" />
        <button 
        onClick={handleClick}
        
        className='bg-stone-800 text-gray-200 p-2 text-xl rounded-r-lg hover:bg-stone-300 hover:text-stone-800 font-bold shadow-lg  z-10'>
            Add 
        </button>
    </div>
  )
}

export default TodoInput