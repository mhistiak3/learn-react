// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 iA Coder. All rights reserved.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-200">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
