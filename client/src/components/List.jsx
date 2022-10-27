import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { setIsEditing } from "../redux/editing";
import { useMutation, useQueryClient, useQuery, QueryCache } from "react-query";
import { useDispatch } from "react-redux";
import { BsChatText } from 'react-icons/bs'
import {
  DeletePost,
  GetAllPosts,
} from "../liberary/helper";

const List = ({ editItem, removeItem }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  
  const { mutateAsync, mutate } = useMutation( DeletePost,
    {
      onSuccess: () => {
        queryClient.prefetchQuery("tasks", GetAllPosts);
        queryClient.invalidateQueries('tasks')
        console.log('data deleted successfully')
      },
    }
  );

  const Delete = (id) => {
    mutateAsync();
    mutate(id)
  };


  const { isLoading, isError, data, error } = useQuery("tasks", GetAllPosts);
  if (isLoading) return <div className="animate-pulse rounded bg-white shadow-md m-auto mb-3"><BsChatText/></div>;
  if (isError) return <div>Got error {error}</div>;



  return (
    <div>
      {data.map(({ name, _id }) => (
        <article key={_id}>
          <div className="flex justify-between m-2">
            <p className="font-bold">{name}</p>
            <div className="flex justify-center gap-1">
              <button>
                <FaEdit
                  className=" text-emerald-400"
                  onClick={() => {
                    editItem(_id);
                    dispatch(setIsEditing(true));
                  }}
                />
              </button>

              <button>
                <FaTrash
                  className=" text-red-700"
                  onClick={() => {
                    removeItem(_id);
                    Delete(_id);
                  }}
                />
              </button>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default List;
