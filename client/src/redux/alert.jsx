import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    alert:{show: false, msg: "", type: false },
    
}
const Alert= createSlice({
    name: "edit",
    initialState,
    reducers: {
    SetAlert : (state, action) => {
            state.alert = {...state.alert, ...action.payload}
        }
}})

export default Alert.reducer
export const {SetAlert} = Alert.actions
