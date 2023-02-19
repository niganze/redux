import React, { useEffect, useRef, useState,useContext } from 'react'
import  AuthContext  from '../context/AuthProvider';
import { Link, useNavigate} from "react-router-dom"
import axios from 'axios';
const LOGIN_URL = "https://blogapi-uvr7.onrender.com/api/v1/user/signin";
function Login() {
const {setAuth} = useContext(AuthContext);
  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate =useNavigate();
    
    useEffect(() => {
      setErrorMessage ('')
    }, [username, password])

  const handleSubmit = async (event) => {
    event.preventDefault();
     
    try {

      const response = await axios.post(LOGIN_URL, JSON.stringify({username, password}),{
      
      headers:{'content-type': 'application/json'},
      }
      );
      console.log(JSON.stringify(response?.data));
      
      const accessToken = response?.data?.token;
      localStorage.setItem("token", accessToken);
      
        setAuth ({username, password ,accessToken});

      setUsername ("");
      setPassword ("");
      navigate("/dashboard");
    }catch(error){
   
       if (!error?.rresponse){
        setErrorMessage('No server response');
       }else if (error.response?.status === 400){
        setErrorMessage('Missing username or password');
       }else if (error.response?.status===401){
        setErrorMessage ('unauthenticated');
       } else if (!username || !password) {
        setErrorMessage("username and password are required fields")
      } else if (!/\S+@\S+\.\S+/.test(username)) {
        setErrorMessage("username is not in a valid format") 
      }
       else{
        setErrorMessage('Login failed')
       }
       
    }

    console.log (username, password);
      setUsername('');
      setPassword('');
  }

  return (
       <>  
    <form className='login' onSubmit={handleSubmit} autoComplete="off">
     
      <p style={{color: "red"}}>{errorMessage}</p>
      <h1>Login Here</h1> 
      <label>Username:</label>  
      <input type="text" id="username"  autoComplete="off" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} 
      />
      <label>Password:</label> 
      <input type="password" id="password"placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} 
      />
      
      <button onClick={handleSubmit}>Login</button>
       {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} 
      <p>Don't have an account? <Link to="/register"style={{color: 'inherit', textDecoration: 'inherit'}}>REGISTER</Link></p>
    </form>
  
  </>
)
}

export default Login
