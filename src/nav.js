import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './index.css'
import './pic/logo.png'


const nav = () => {
    return (
        //nav bar mx auto to make in the center 
        <nav className='relative container mx-auto py-3 px-1'>
            {/* flex container */}
            <div className="flex items-center justify-between">
                {/* logo */}
                <div className="pt-2">
                    <Link to="/landingpage">
                        <img id='log' src={require("./pic/logo.png")} width="85" height="70" /> </Link>
                </div>





                {/* menu items */}
                <div className="hidden md:flex space-x-6">
                    <Link to="/landingpage"><a href="" className='hover:opacity-50'>Home    </a ></Link>
                    <Link to="/explore"><a href="" className='hover:opacity-50'>Explore </a></Link>
                    <Link to="/extra"><a href="" className='hover:opacity-50'>Artist  </a></Link>
                    <Link to="/login"><a href="" className='hover:opacity-50'>Myprofile</a></Link>
                </div>


            </div>

        </nav >
    )
}

export default nav