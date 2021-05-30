import React, { useContext } from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../../App'

const Navbar = () => {
    const [loggedInUser,setLoggedInUser] =useContext(UserContext)
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <Link class="navbar-brand " to="/">
                    <div className="logo">
                        <img className="imgLogo mt-3" src={logo} alt="" />
                        <p className='NavLogo'>Garden<span className='text-primary NavbarGO'>Go</span></p>
                    </div>
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mr-4">
                            <Link class="NavLink nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active mr-4">
                            <Link class="NavLink nav-link" to="/shop">Shop <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active mr-4">
                            <Link class="NavLink nav-link " to="Products">Products <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active mr-4">
                            <Link class="NavLink nav-link" to="/contact">Contact Us <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item active mr-4">
                            {
                                loggedInUser.email ?
                                <Link class="NavLink nav-link btn btn-primary text-white pl-3 pr-3" to="/login" onClick={()=>setLoggedInUser({})}>Log out <span class="sr-only">(current)</span></Link>:<Link class="NavLink nav-link btn btn-primary text-white pl-3 pr-3" to="/login">Login <span class="sr-only">(current)</span></Link>
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
