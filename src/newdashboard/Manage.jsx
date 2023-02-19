import { Link } from 'react-router-dom'
import axios from 'axios';
import { useForm } from 'react-hook-form'
import {useState, useEffect} from "react";
import './Dashboard.css'
const Manage = ({AllBlogs}) => {
const [modal, setModal] = useState(false);
const [selected, setSelected]= useState(null)
const { register, handleSubmit, reset } = useForm({

  defaultValues:{
    title:selected?.title,
    decription:selected?.decription,
  },
});
const onSubmit = async ({image, title,content}) => {

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.append("image", image[0]);
  
  try {
     await axios.patch(`https://blogapi-uvr7.onrender.com/api/v1/blog/upBlog${selected._id}` , formData,{
      headers:{
        "Content-Type": "multipart/form-data",
        Authorization:`Bearer ${localStorage.getItem("token")}`
    }
    });
     reset();
    alert ("Successfully");
  } 
  catch (err) {
    console.error(err.response);
    reset()
  }
};
const getSingle = async (id) =>{
  const selectedBlog =AllBlogs.find((blog)=> blog._id === id);
  setSelected(selectedBlog);
  reset();
  console.log(selectedBlog);
}
  useEffect(() => {
    reset (selected);
  
  }, [selected])  ;
 const handleDelete = async(id) =>{
  try{
    await axios({
      method: 'DELETE',
      url: `https://blogapi-uvr7.onrender.com/api/v1/blog/delBlog/${id}`,
      headers: {
        "content-Type": "multipart/form-data",
        Authorisation: `Bearer ${localStorage.getItem("token")}`,
      }
    });
    window.location.reload(true);
  } catch(error){
    console.log(error.response);
  }
 }
  return (
    <section id='Dashbord'>
        <div className="container blogContainer">
         <table border={0} >
            <tr>
              <th>Title</th>
              <th className='image2'>IMAGE</th>
              <th>Actions</th>
            </tr>
          <tbody>
            {AllBlogs.map(AllBlogs => (
              <tr className='title' key={AllBlogs.id}>
                <td className='titlee'>
                  {AllBlogs.title}
                </td>
                <td className='bbb'>  
                <img src={AllBlogs.image} alt="akain"/>
                </td>             
                <td>
                  <div className='button3'>
                    <button className='delete' onClick={() => handleDelete(AllBlogs._id)}>Delete</button>
                    <button className='edit' onClick={() => {setModal(true);getSingle(AllBlogs._id);}}> Edit</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table> 
      <div className="editblog"  style={ {display: !modal? "none" : "flex" }}>
        <form  className ="update"onSubmit={handleSubmit(onSubmit)}>
        <h2>Create New Blog</h2>
      <input type="text" 
        {...register("title")}
        placeholder={"Enter Title"}
      />
      <textarea
        {...register("content")}
        id=""
        cols="30"
        rows="10"
      >
      </textarea>
      <div className="div">
      <label htmlFor="">Image</label>
      <input
        type="file"
        name=""
        id="file"
        {...register("image")}
      />
      <div className='editbuttonr'> 
        <button type="submit">
         Update
      </button>
      <button className='cancel' onClick={() => setModal(false)}>
        cancel</button>
      </div>
      </div>
    </form>
      </div>
      </div>
    </section>
    
  )
}

export default Manage