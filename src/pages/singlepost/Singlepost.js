import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FcComments } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { FcBullish } from "react-icons/fc";
import "./Singlepost.css";
import React  from 'react'
export default function Singlepost({AllBlogs}) {
const { blogId } = useParams();
console.log(AllBlogs)
  console.log(blogId);
  const single = AllBlogs.find((item) => item._id === blogId);
  console.log(single);
  const {title, image, content,author,date,comments} = single;
  const {reset}=useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const validationRules = {
    description: { required: true, minLength: 7 }
  };
  const onSubmit = async (data) => {
       console.log (data);
    try {
      await axios.post(
        `https://blogapi-uvr7.onrender.com/api/v1/comment/addcomment/${blogId}`, data,
        {
          headers: {
            "content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert('comment posted');
      reset();
    }
    catch (error) {
      console.log(error.response);
    }
  }
  return (
    <>
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={image} alt={title} />
        
        <h1 className="singlePostTitle">
          {title}
          <div className="singlePostEdit">
            <i className="singlePostIcon "><FcCheckmark/></i>
            <i className="singlePostIcon "><FcBullish/></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                {author}
              </Link>
            </b>
          </span>
          <span>{date}</span>
        </div>
        <p className="singlePostDesc">
          {content}
        </p>
        {/* <div> comment:{comments} </div> */}

        <div className="commentsd">
          <h3>Comments</h3>
          {comments.map(comment =>{
            return <div> <h6>{comment.username}</h6> <p>{comment.comment}</p> </div>
          })}
        </div>
        <div className="singlePostEdit">
            <i className="singlepostIcon fa-solid fa-pen-to-square"><FcComments/></i>
            <i className="singlepostIcon  fa-solid fa-trash"><AiFillLike/></i>
            <i className="singlepostIcon  fa-solid fa-trash"><AiOutlineDislike/></i>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
      <div className="comments">
        <div className="form">
          <div className="coments">
            <div className="form">
              <div className="formGroup">
              </div>
              <div className="formGroup">
                <label htmlFor="description">Drop Your Comment</label>
                <textarea {...register('description', validationRules.description)} placeholder='Description'/>
                {errors.description && <span className="error">comment is required and must be at least 7 characters long.</span>}
              </div>
              <div className="formGroup">
                <input type="submit" value="comment" className='btn'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
      </div>
    </div>
    </>
  );
}