import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.png'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand " href="#">
                    <div className="logo">
                        <img className="imgLogo mt-3" src={logo} alt="" />
                        <p className='NavLogo'>Garden<span className='text-primary NavbarGO'>Go</span></p>
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active mr-4">
                            <a class="NavLink nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active mr-4">
                            <a class="NavLink nav-link" href="#">Shop <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active mr-4">
                            <a class="NavLink nav-link " href="#">Products <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active mr-4">
                            <a class="NavLink nav-link" href="#">Contact Us <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active mr-4">
                            <a class="NavLink nav-link btn btn-primary text-white pl-3 pr-3" href="#">Login <span class="sr-only">(current)</span></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
