import React from 'react'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Header() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header>
    <Link to="/" className='logo'>MY BLOG</Link>
    <nav>
    <FaBars id ='bagger' onClick={() => {
        setNavOpen(!navOpen);
      }}/>
      <div className='links'>
      <div className={navOpen? "nav-open":'logor'}>
      <Link to="/">HOME</Link>
      {/* <Link to="/create">WRITE</Link> */}
      <Link to="/login" >LOGIN</Link>
      <Link to ="/register">REGISTER</Link>
      </div>
      </div>
    </nav>
  </header>
  )
}

export default Header  