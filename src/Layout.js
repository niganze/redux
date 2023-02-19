import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './pages/footer/Footer';
function Layout() {
  return (
    <main>
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  ); 
}
export default Layout 