import { useEffect, useState } from 'react'

import TodoInput from './components/TodoInput'
import ToDoItem from './components/ToDoItem'
import { ToDoProvider } from './contexts/TodoContext'


function App() {

  const [todos ,setTodos] = useState([])
  

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(), ...todo}, ...prev])
  }

   const delTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id))
   }

   const toggleComplete = (id)=> {
    setTodos((prev)=> 
    prev.map((todo)=> todo.id === id ? {...todo , 
      isComplete: !todo.isComplete} : todo))

   }

   const updateTodo = (id ,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))

   }


   useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("Todos"))
    if(todos && todos.length > 0){
      
      setTodos(todos)
    }

   },[])


   useEffect(()=>{
     localStorage.setItem("Todos",JSON.stringify(todos))

   },[todos])


  return (
    <>
      <ToDoProvider value = {{todos , addTodo ,delTodo ,updateTodo, toggleComplete}}>
    <div className='bg-stone-500 w-full h-screen flex flex-col items-center'>
      <div className=' p-2 bg-stone-300 max-w-sm mx-auto mt-10 w-full text-center font-bold rounded-lg shadow-lg'>
        ToDo Manager
      </div>
      <TodoInput/>

      {todos.map((todo) =>(<div key={todo.id}> 
        <ToDoItem todo = {todo}/> 
        </div>
      
      ))}
      
      

    </div>
    </ToDoProvider>
    
    </>
  )
}

export default App
