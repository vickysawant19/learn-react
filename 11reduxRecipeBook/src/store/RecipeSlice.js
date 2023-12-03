import { createSlice, nanoid } from "@reduxjs/toolkit";
 

const initialState = {
    recipes: []
}

export const recipeSlice = createSlice({
    name :"recipe",
    initialState,
    reducers: {
        addRecipe: (state, action)=>{
            const recipe = {
                id: nanoid(),
                title: action.payload.title,
                image : "https://picsum.photos/200/300",
                ingridents: action.payload.ingridents,
                process: action.payload.process,

            }

            state.recipes.push(recipe)
        },

    }
})


export const { addRecipe} = recipeSlice.actions

export default recipeSlice.reducer