import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us</li>
            <li>Success Stories</li>
            <li>Blogs</li>
            <li>Events</li>
          </ul>
        </div>

        <div>
          <h4>Courses</h4>
          <ul>
            <li>Renaissance for Top Tech Companies</li>
            <li>Low Level Design and Concurrency</li>
            <li>Crash Course in Data Structures & Algorithms</li>
            <li>Backend with Java Spring Boot</li>
            <li>Begin with Programming in C++</li>
          </ul>
        </div>

        <div>
          <h4>Services</h4>
          <ul>
            <li>Get Scholarship</li>
            <li>Teach with Us</li>
            <li>Join Our Community</li>
          </ul>
        </div>

        <div>
          <h4>Privacy Policy</h4>
          <ul>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>All Rights Reserved with @Programming Pathshala</p>
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;