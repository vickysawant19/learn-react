

import { createContext,useContext } from "react";


export const ToDoContaxt = createContext({
    todos : [
        {
            id: 1,
            Todo: "Todo msg",
            isComplete : false
        }
    ],

    addTodo: (todo)=>{},
    delTodo: (id)=>{},
    toggleComplete : (id) => {},
    updateTodo : (id , todo)=>{}

})

export const ToDoProvider = ToDoContaxt.Provider


export function useTodo (){
    return useContext(ToDoContaxt)
}