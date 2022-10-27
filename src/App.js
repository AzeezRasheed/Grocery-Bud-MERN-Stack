import React, { useState, useEffect } from "react";
import "./index.css";
import Alert from "../src/components/Alert";
import List from "../src/components/List";
import styled from "styled-components";
import {
  AddPost,
  GetAllPosts,
  DeleteAllPost,
} from "./liberary/helper";
import { newList, newId } from "./redux/reducer";
import { newDeletedTaskId } from "./redux/deletedTaskId";
import { SetAlert } from "./redux/alert";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient } from "react-query";
import EditPost from "./components/EditPost";


function App() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const [task, setTask] = useState("");
  const list = useSelector((state) => state.tasks.list);
  const myAlert = useSelector((state) => state.alerts.alert);
  const isEditing = useSelector((state) => state.editing.isEditing);

  //To add a new Task
  const addTask = useMutation(AddPost, {
    onSuccess: () => {
      queryClient.prefetchQuery("tasks", GetAllPosts);
    },
  });

  //To delete all Task
  const DeleteAllTask = useMutation(
    DeleteAllPost
  ,
    {
      onSuccess: () => {
        queryClient.prefetchQuery("tasks", GetAllPosts);
        console.log(' all data deleted successfully')
      },
    }
    )

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task) {
      dispatch(
        SetAlert({ show: true, msg: "Please enter a value", type: false })
      );
    } else {
      dispatch(newList({ ...list, name: task }));
      console.log("submitted successfully");
      setTask("");
      if (addTask.isSuccess)
        return dispatch(
          SetAlert({ show: true, msg: "item added to the list", type: true })
        );
    }
  };

  useEffect(() => {
    addTask.mutate(list);
  }, [list]);



  useEffect(() => {
    myAlert.show &&
      setTimeout(() => {
        dispatch(SetAlert({ show: false, msg: "", type: false }));
      }, 3000);
  }, [myAlert.show]);

  const editItem = (id) => {
    dispatch(newId(id));
  };

  const removeItem = (id) => {
    dispatch(newDeletedTaskId(id));
  };

  const deleteAllTasks = () => {
    DeleteAllTask.mutate()
  }

  return (
    <section className=" flex flex-col items-center h-screen m-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...  ">
      <div className=" flex flex-col  p-6 border m-auto w-[30em] shadow bg-slate-200">
        {myAlert && <Alert {...alert} />}

        <h1 className="text-xl font-bold capitalize text-center mb-3">
          grocery bud
        </h1>

        {isEditing ? (
          <EditPost />
        ) : (
          <>
            <form onSubmit={handleSubmit} className="flex gap-1 mb-6">
              <Input
                placeholder="e.g eggs"
                value={task}
                onChange={handleInput}
              />
              <button
                type="submit"
                className=" bg-cyan-700 font-bold w-24 border capitalize border-blue-800 text-sm"
              >
                {"submit"}
              </button>
            </form>
          </>
        )}
    
        <List removeItem={removeItem} editItem={editItem} />

        <button className=" text-red-700 font-bold" onClick={deleteAllTasks}> clear items</button>
      </div>
    </section>
  );
}

export default App;

const Input = styled.input`
  width: 100%;
  padding: 1px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.1);
`;
