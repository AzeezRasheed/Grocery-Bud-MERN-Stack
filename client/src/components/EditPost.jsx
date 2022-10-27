import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { setIsEditing } from "../redux/editing";
import { useDispatch, useSelector } from "react-redux";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { GetAllPosts, UpdatePost } from "../liberary/helper";
import { SetAlert } from "../redux/alert";

const EditPost = (id) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const singleTaskId = useSelector((state) => state.tasks.id);

  const { isLoading, isError, data, error } = useQuery("tasks", GetAllPosts);

  const isEditing = useSelector((state) => state.editing.isEditing);
  const [task, setTask] = useState({});

  const { mutate } = useMutation(
    (newTask) => {
      UpdatePost(newTask, singleTaskId);
    },
    {
      onSuccess: () => {
        dispatch(setIsEditing(false));
        queryClient.prefetchQuery("tasks", GetAllPosts);
        queryClient.invalidateQueries(["tasks"], singleTaskId);
        console.log("data updated successfully");
      },
    }
  );

  useEffect(() => {
    if (singleTaskId) {
      let findTask = data.find((task) => task._id === singleTaskId);
      findTask && setTask(findTask);
    }
  }, [singleTaskId]);

  const handleInput = (e) => {
    setTask({ ...task, name: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task && isEditing) {
      dispatch(SetAlert({ show: true, msg: "item edited", type: true }));
    }
    mutate({ name: task.name });
  };

  return (
    <form className="  flex gap-1 mb-6" onSubmit={handleSubmit}>
      <Input placeholder="e.g eggs" value={task.name} onChange={handleInput} />
      <button className=" bg-cyan-700 font-bold w-24 border capitalize border-blue-800 text-sm">
        "edit"
      </button>
    </form>
  );
};

export default EditPost;

const Input = styled.input`
  width: 100%;
  padding: 1px;
  height: 25px;
  background-color: rgba(0, 0, 0, 0.1);
`;
