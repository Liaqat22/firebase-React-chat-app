import React from 'react'
import { NavLink } from 'react-router-dom'
import {  useFireAuthContext } from '../context/fireAuthContext'
import NavbarRes from './NavbarRes'

function Header() {
  const fireAuthContext = useFireAuthContext()
  const handlelogOut =  () =>{
    fireAuthContext.logout()
  }
  return (
    <>

        <nav className="navbar navbar-expand-lg  " style={{background : "#023047"}}>
        <NavLink className="navbar-brand" to="#" style={{border : "none"}}><b >
    firebase chatting app </b></NavLink>
            <div className='ms-auto navres'>
   
    <NavbarRes/>
    </div>

    

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link "  to = "/">Home</NavLink>
        </li>
        {fireAuthContext.isLogin?  (
 <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/login" onClick={handlelogOut}>Logout</NavLink>
        </li>
        ):(
        <>
         <li className="nav-item">
          <NavLink className="nav-link " aria-current="page" to = "/login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to = "/register">Register</NavLink>
        </li>
        </>) 

       
        }
       
       
      </ul>
    </div>
</nav>

    </>
  )
}

export default Header
