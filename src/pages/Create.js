import React from 'react'
import ReactQuill from 'react-quill'
import { useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'
import { useForm } from 'react-hook-form'

function Create() {
  // const [description, setDescription] = useState("");
  const { register, handleSubmit, reset } = useForm({});
  const onSubmit = async (data) => {

    console.log(data.description);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("image", data.image[0]);
    console.log(formData.get("title"));

    try {
       await axios.post("https://blogapi-wm30.onrender.com/api/v1/blog", formData,{
        headers:{
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${localStorage.getItem("token")}`
      }
      });
       reset();
      alert ("Successfully");
    
      
    } catch (err) {
      console.error(err.response);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" 
        {...register("title")}
        placeholder={"Enter Title"}
      />
      <textarea
        {...register("description")}
        placeholder={"Enter content description"}
        id=""
        cols="30"
        rows="10"
      >
      </textarea>
      <label htmlFor="">Image</label>
      <input
        type="file"
        name=""
        id="file"
        {...register("image")}
      />
      <button type="submit">
        Create post
      </button>
    </form>
  );
}

export default Create;

