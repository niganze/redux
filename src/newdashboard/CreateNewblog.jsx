import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
const Updateblog = () => {
const { register, handleSubmit, reset } = useForm({});
const onSubmit = async (data) => {
    console.log(data.content);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("author", data.author);
    formData.append("content", data.content);
    formData.append("image", data.image[0]);
    console.log(formData.get("title"));
    console.log (localStorage.getItem("token"))
    try {
       await axios.post("https://blogapi-uvr7.onrender.com/api/v1/blog/blogPost", formData,{
        headers:{
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${localStorage.getItem("token")}`
      }
      });
       reset();
      alert ("Successfully");
    } catch (error) {
      console.error(error.response);
    }
  };
  return (
    <>
      <div className="blogContent">
        <h1>Create New Blog</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" 
        {...register("title")}
        placeholder={"Enter Title"}
      />
      <textarea
        {...register("content")}
        placeholder={"Enter content"}
        id=""
        cols="20"
        rows="10"
      >
      </textarea>
      <input type="text" 
        {...register("author")}
        placeholder={"Enter author"}
      />
      <label htmlFor="">Image</label>
      <input
        type="file"
        name=""
        id="file"
        {...register("image")}
      />
      <br />
      <button type="submit">
        Create post
      </button>
    </form>
      </div>
  
    </>
  )
}
export default Updateblog