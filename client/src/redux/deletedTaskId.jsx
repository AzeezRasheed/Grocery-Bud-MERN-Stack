import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    id : ""
}
const DeletedTaskId = createSlice({
    name: "task",
    initialState,
    reducers: {
        newDeletedTaskId : (state, action) => {
            state.id=action.payload;
    }
}})

export default DeletedTaskId.reducer

export const {newDeletedTaskId} = DeletedTaskId.actions

