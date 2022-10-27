import { configureStore } from "@reduxjs/toolkit";
import Task from "../redux/reducer";
import SetAlert from "../redux/alert";
import Editing from "../redux/editing";
import DeletedTaskId from "../redux/deletedTaskId";
import deletedTaskId from "../redux/deletedTaskId";
const store = configureStore({
    reducer: {
        tasks: Task,
        editing: Editing,
        alerts: SetAlert,
        deletedTaskIds:deletedTaskId
    } 
})

export default store; 