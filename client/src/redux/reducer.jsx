import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  list: { name: " " },
  id: "",
};
const Task = createSlice({
  name: "task",
  initialState,
  reducers: {
    newList: (state, action) => {
      state.list = action.payload;
    },
    newId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export default Task.reducer;

export const { newList, newId } = Task.actions;
