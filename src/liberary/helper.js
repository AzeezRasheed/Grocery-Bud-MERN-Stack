import instance from "../components/for-axios/axios";
// const header = new Headers({ "Access-Control-Allow-Origin": "*" });

const BASE_URL = "https://grocery-bud-client-side.herokuapp.com/";
export const GetAllPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}api/v1/tasks`);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export const GetPost = async (id) => {
  try {
    const Options = {
      method: "GET",
    };
    const response = await fetch(`${BASE_URL}api/v1/tasks`, Options);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export const AddPost = async (formData) => {
  try {
    const Options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}api/v1/tasks`, Options);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export const UpdatePost = async (data, id) => {
  
  console.log(data)
  try {
    const Options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      // body: JSON.parse(JSON.stringify(data)),
      body: JSON.stringify(data)
    };
    const response = await fetch(`${BASE_URL}api/v1/tasks/${id}`, Options);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};


export const DeletePost = async (taskId) => {
  try {
    const Options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    };
    const response = await fetch(`${BASE_URL}api/v1/tasks/${taskId}`, Options);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export const DeleteAllPost = async () => {
  try {
    const Options = {
      method: "DELETE",
     
      }
    const response = await fetch(`${BASE_URL}api/v1/tasks/`, Options);
    const json = await response.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};