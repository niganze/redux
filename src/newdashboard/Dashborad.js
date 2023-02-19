import React from 'react'
import './Dashboard.css'
import {BsSearch} from 'react-icons/bs'
import {ImHome3} from 'react-icons/im'
import {TbSettings} from 'react-icons/tb'
import {FaUserAlt} from 'react-icons/fa'
import {AiTwotoneHome} from 'react-icons/ai'
import {FcManager} from 'react-icons/fc'
import {FcNews} from 'react-icons/fc'
import {RiLogoutBoxRFill} from 'react-icons/ri'

import { Link, Outlet } from 'react-router-dom'  
function Dashborad() {
  return (
    <div className="dashcontainer  container">
      <div className="dashleft">
        <div className='menu'>
          <h2>My BLOG</h2>
               <ul>
                <Link to="/dashboard" style={{color: 'inherit', textDecoration: 'inherit'}}><li className ="dashboardlinks" ><AiTwotoneHome/>HOME</li></Link>
                <Link to="/dashboard/manage" style={{color: 'inherit', textDecoration: 'inherit'}}> <li className ="dashboardlinks"><FcManager/>Manage</li></Link>
                <Link to="/dashboard/Create"style={{color: 'inherit', textDecoration: 'inherit'}}> <li className ="dashboardlinks"><FcNews/>CreateNewBlog</li></Link>
                <Link to="/" style={{color: 'inherit', textDecoration: 'inherit'}}><li className ="dashboardlinks"><RiLogoutBoxRFill/>logout</li></Link>
               </ul>
            </div>
            
      </div>
      <div className='right'>
      <div className="dashright">
      <div className="notify">
        <div className="search">
         <div className="searicon">
            <input type="search" placeholder="search"/>
          <div className="icon"> <BsSearch />  </div>
         </div>
        </div>
        <div className="setting"> 
          <ul className='white'>
            <li><ImHome3/></li> 
            <li><TbSettings/></li>
            <li><FaUserAlt/></li>
          </ul>
        </div>
      </div>
      </div>
      <div className=' outlet'><Outlet/></div>
      </div>
    </div>
  )
}

export default Dashborad
