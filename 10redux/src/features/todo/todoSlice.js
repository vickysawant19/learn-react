import { createSlice , nanoid } from "@reduxjs/toolkit";


const initialState = {

    todos : [{
        id : 1,
        text: ""
    }]
}



export const  todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo : (state , action) => {
            const todo = {
                id : nanoid(),
                text: action.payload  //paylaoad.text also work 
            }
            if ( todo.text != ""){
                state.todos.push(todo) 
            } 
            
        },
        removeTodo : (state , action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload )
        },
    }

})

export const {addTodo ,removeTodo} = todoSlice.actions

export default todoSlice.reducer