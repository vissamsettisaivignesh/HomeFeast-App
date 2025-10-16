import React from 'react';
import './Header.css'; 

// Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* // <div className="footer-social-links">
        // <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaYoutube/></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      </div> */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Home Feast. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;