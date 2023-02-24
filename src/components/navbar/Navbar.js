import React from 'react'
import {NavLink} from "react-router-dom"
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <img src='./images/logo.jpg' alt='logo' width='150px'></img>
        </div>
        <div className="menu">
                {/* <a href="#">Find Reservation </a>
                <a href="#">Package  </a>
                <a href="#">About Lakshadweep</a>
                <a href="#">Gol  </a>
                <a href="#">Support</a> */}
            <ul>
                <li>Find Reservation</li>
                <li>Package</li>
                <li>About Lakshadweep</li>
                <li>Gol</li>
                <li>Support</li>
            </ul>    
                    
        </div>
        <div className="login_signup">

        {/* <NavLink to ="#" className="login">
            Login
        </NavLink>   */}
        <a href="#">Login</a>
        <a href="#" id='sg1'>SignUp</a>

            

        </div>
    </nav>
    </>
  )
}

export default Navbar