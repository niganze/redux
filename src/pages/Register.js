import React from 'react'
import { FaUser } from 'react-icons/fa'
import { useNavigate,Link} from 'react-router-dom'
import * as yup  from "yup"
import  {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios";
import { useForm } from 'react-hook-form';

const REGISTER_URL = "https://blogapi-uvr7.onrender.com/api/v1/user/signup";

const schema = yup
  .object()
  .shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    password:yup.string().min(6).max(12).required()
  })
const Register = () => {

  const  {register ,handleSubmit ,formState :{errors}} =  useForm({
    resolver:yupResolver(schema)
  })

  const navigate  = useNavigate();
  const   onSubmit  = async  (data) =>{
      console.log(data);

      try {
        const  response  = await  axios.post(REGISTER_URL,data)
        console.log(response);
        navigate("/login")

      } catch (error) {
        console.log(error.response);
      }
  }
  
return (
        <form className='register'onSubmit={handleSubmit(onSubmit)}>
          <h1>Create an account</h1>
          {/* <span>{errors?.name?.message}</span> */}
            <label>Username:</label>  
           <input 
               type="text" 
               id="username"
               placeholder="username"
              autoComplete="off"
              {...register("username")}
               aria-describedby="uidnote"/>
               <span>{errors?.username?.message}</span>

               <label>Email:</label>    
               <input type="text" 
              id="email"
              placeholder="email"
              aria-describedby="emailnote"
              {...register("email")}
              />
<span>{errors?.email?.message}</span>
           <label>Password:</label>       
        <input 
        type="password" 
        id="password"
        placeholder="password"
        aria-describedby="pwdnote"
        {...register("password")} />
       {/* <span>{errors?.password?.message}</span> */}
         <label>Confirm password:</label>
        <input 
        type="password" 
        id="confirm_pwd"
        placeholder="confirm password"
        aria-describedby="Matchpwdnote"
        {...register("coforms password")}
       />
       {/* <span>{errors?.password?.message}</span> */}
      <button type="submit">Create account</button>
      <p>Already have an account? <Link to='/login'style={{color: 'inherit', textDecoration: 'inherit'}} ><span>Login</span></Link></p>
        </form>
  )}
  
export default Register