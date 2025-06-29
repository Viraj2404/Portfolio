import { useState } from "react"; 
import React from "react";  
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {FaLinkedin, FaGithub, FaPhone, FaEnvelope} from 'react-icons/fa';

const Footer = React.forwardRef((props, ref) => (
    <footer 
    ref={ref}
    className="bg-dark text-white text-center py-3 shadow mt-auto">
      <div>

        <p className="mb-1 p-2 text-white">Connect on </p>

        <small>
           {" "}
          <a
            href="https://www.linkedin.com/in/viraj-shinde-46b714209/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-info text-decoration-none mb-3 p-2"
          >
            <FaLinkedin size={24} /> LinkedIn
          </a>{" "}
          |{" "}
          <a href="mailto:viraaj100shinde@gmail.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-info text-decoration-none mb-3 p-2"
          >
            <FaEnvelope size={24} /> <strong>Email</strong>-<i>viraaj100shinde@gmail.com</i>
          </a>
          {" "}|{" "}
          <a href="https://github.com/Viraj2404" 
           target="_blank"
           rel="noopener noreferrer"
          className="text-info text-decoration-none mb-3 p-2">
            <FaGithub size={24} /> Github
          </a>{" "}|{" "}
          <a className="text-info text-decoration-none mb-3 p-2">
            <FaPhone size={24} /> +91 7588452562
          </a>
          
        </small>
        <p className="text-info mb-0 p-2">
            <strong>Pune, Maharashtra, India</strong>
          </p>
        <p className="mb-0 p-2">© 2025 Viraj Shinde. All rights reserved.</p>
      </div>
    </footer>
  )
)


export default Footer;