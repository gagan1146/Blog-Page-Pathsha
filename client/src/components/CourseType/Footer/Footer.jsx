import React from 'react';
import './Footer.css';
import { FaFacebook, FaYoutube, FaLinkedin, FaTelegram, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <p className="footer-link">About Us</p>
            <p className="footer-link">Success Stories</p>
            <p className="footer-link">Blogs</p>
            <p className="footer-link">Events</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">COURSES</h4>
            <p className="footer-link">Renaissance for Top Tech Companies</p>
            <p className="footer-link">Low Level Design and Concurrency</p>
            <p className="footer-link">Crash Course in Data Structures & Algorithms</p>
            <p className="footer-link">Backend Development with Java Spring Boot</p>
            <p className="footer-link">Begin with Programming in C++</p>
            <p className="footer-link">Become a Python Expert</p>
            <p className="footer-link">System Design for professionals</p>
            <p className="footer-link">Be a Data Engineer</p>
            <p className="footer-link">Full Stack Development in MERN</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">SERVICES</h4>
            <p className="footer-link">Get Scholarship</p>
            <p className="footer-link">Teach with us</p>
            <p className="footer-link">Join Our Community</p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">PRIVACY POLICY</h4>
            <p className="footer-link">Terms & Conditions</p>
            <p className="footer-link">Refund Policy</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">All Right Reserved with @Programming Pathshala</p>
          <div className="footer-socials">
            <div className="icon"><FaFacebook /></div>
            <div className="icon"><FaYoutube /></div>
            <div className="icon"><FaLinkedin /></div>
            <div className="icon"><FaTelegram /></div>
            <div className="icon"><FaInstagram /></div>
            <div className="icon"><FaTwitter /></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;