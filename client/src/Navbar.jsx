import React from 'react';
import './Navbar.css';
import logo from '../src/assets/LOGO.png'; 
import down_arrow from '../src/assets/down-arrow.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div id="i1">
                <img src={logo} alt="" />
            </div>
            <div id="i2">
                <li className="sides">
                    <p className='courses-text'>Explore Courses</p>
                    <img src={down_arrow} alt="" className="down-arrow" />
                </li>
                <li className="sides">Success Stories</li>
                <li className="sides">Blogs</li>
                <li className="sides">Events</li>
            </div>
            <div id="i3">
                <a type="button" className="login" to="/login">Log in</a>
                <a type="button" className="signup" to="/signup">Start Free Trial</a>
            </div>
        </div>
    );
};

export default Navbar;
