import React from 'react';
import './Navbar.css';
import logo from '../../assets/LOGO.png';
import down_arrow from '../../assets/down-arrow.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div id="i1">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <ul id="i2">
        <li className="sides">
          <span className="courses-text">Explore Courses</span>
          <img src={down_arrow} alt="Down Arrow" className="down-arrow" />
        </li>
        <li className="sides">Success Stories</li>
        <li className="sides">Blogs</li>
        <li className="sides">Events</li>
      </ul>

      <div id="i3">
        <a href="/login" className="login">Log In</a>
        <a href="/signup" className="signup">Start Free Trial</a>
      </div>
    </div>
  );
};

export default Navbar;
