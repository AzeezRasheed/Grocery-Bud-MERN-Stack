import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    isEditing:false,
    
}
const Task = createSlice({
    name: "edit",
    initialState,
    reducers: {
    setIsEditing : (state, action) => {
            state.isEditing = action.payload
        }
}})

export default Task.reducer
export const {setIsEditing} = Task.actions

