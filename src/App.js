import './App.css';
import {Route,Routes} from 'react-router-dom';
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashborad from './newdashboard/Dashborad';
import SinglePost from './pages/singlepost/Singlepost';
import { useEffect, useState } from 'react';
import Manage from './newdashboard/Manage'
import Logout from './newdashboard/Logout'
import axios from 'axios';
import CreateNewblog from './newdashboard/CreateNewblog';
import HomeDash from './newdashboard/HomeDash';
function App() {
  const[AllBlogs, setAllBlogs] =useState([]);
  const fetchBlog = async ()=>{
  try{
      const response = await axios.get ('https://blogapi-uvr7.onrender.com/api/v1/blog/getAll')
      // console.log(response.data);
      setAllBlogs(response.data.data.AllBlogs);
      }catch(error){
        console.log(error.response)
      }
    }
    useEffect (()=>{
      fetchBlog();
    },[])
    console.log (AllBlogs)
  return (
   <Routes>
    <Route path="/"element={<Layout/>}>
      <Route index element ={<IndexPage AllBlogs={AllBlogs}/>} />
      <Route path={"/login"}element={<Login/>} />
      <Route path={"/register"}element={<Register/>} />
      <Route path={"/:blogId"}element={<SinglePost  AllBlogs={AllBlogs}/>} />
    </Route>

      <Route path="/dashboard" element={<Dashborad/>}>
      <Route index element={<HomeDash />} />
      <Route  path={"manage"} element={<Manage AllBlogs={AllBlogs}/>} />
      <Route path={"Create"} element={<CreateNewblog />} />
      <Route path={"logout"} element={<Logout />} />
      <Route path={"dashboardhome"} element={<Logout />} />
    </Route>
   </Routes>
   ); 
}

export default App;
