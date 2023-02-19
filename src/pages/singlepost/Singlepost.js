import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { FcVoicePresentation } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import "./Singlepost.css";
import React  from 'react'
export default function Singlepost({AllBlogs}) {
const { blogId } = useParams();
  console.log(blogId);
  const single = AllBlogs.find((item) => item._id === blogId);
  console.log(single);
  const {title, image, content,author,date} = single;
  const {reset}=useForm();
  const onSubmit = async (data) => {
    
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
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
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
        <div className="singlePostEdit">
            <i className="singlepostIcon fa-solid fa-pen-to-square"><FcVoicePresentation/></i>
            <i className="singlepostIcon  fa-solid fa-trash"><FcLike/></i>
            </div>
            <div className="comments">
              <div className="form">
              <div className="coments">
            <div className="form">
                <div className="formGroup">
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder='UserName'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Drop Your Comment</label>
                    <textarea  placeholder='Description'/>
                </div>
                <div className="formGroup">
                    <input type="submit" value="comment" className='btn'/>
                </div>
            </div>
             </div>
              </div>
            </div>
      </div>
    </div>
    </>
  );
}