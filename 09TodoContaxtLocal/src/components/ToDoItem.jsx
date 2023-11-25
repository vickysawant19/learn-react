import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext'

const ToDoItem = ({todo}) => {

  const [isEditable , setIseditable] = useState(false)
  const [todoMsg, setTodomsg] = useState(todo.todo)


  const {delTodo ,toggleComplete,updateTodo} = useTodo()


  function handleDel(e){
    e.preventDefault()
    delTodo(todo.id)
  }

  function toggleCompleted(){
    toggleComplete(todo.id)
  }




  function handleUpdate(e){
    e.preventDefault();
    if (todo.isComplete) return ;

    if(isEditable){
      setIseditable(false)
      updateTodo(todo.id , {...todo,todo:todoMsg})
      
    }else{
    setIseditable(true)
    }
   
   

  }

  return (
    <div className='mt-2 w-full max-w-sm flex items-center justify-center'>
   <div className='bg-white py-2 text-xl rounded-l-lg hover:bg-green-300'>
    
   <input 
    checked={todo.isComplete}
    onChange={toggleCompleted}
    className=' w-10 cursor-pointer'
    type="checkbox" name="" id="" />
   </div>
    
    <input 
    onChange={(e)=> {setTodomsg(e.target.value)}}
    value = {todoMsg}
    readOnly = {!isEditable}
    className={`bg-white w-full text-xl p-2 focus:outline-none text-ellipsis ${isEditable?"animate-pulse":""}
     ${todo.isComplete?'line-through':''}`}
    type="text" />

    <button 
    onClick={handleUpdate}
    disabled ={todo.isComplete}
    className='bg-white p-2 text-xl hover:bg-green-300 '>
        {isEditable ? "📁" : "✏️"}


    </button>
    <button 
    onClick={handleDel}
    
    className='bg-white p-2 text-xl rounded-r-lg hover:bg-green-300 '> ❌</button>
</div>
  )
}

export default ToDoItem