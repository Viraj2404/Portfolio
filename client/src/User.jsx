import { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./navbar";
import Footer from "./footer";

function User() {

   const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    
    <div className="d-flex bg-info min-vh-100 flex-column ">
        <div className="bg-dark text-white px-4 py-3 p-0 shadow sticky-navbar">
        <Navbar onContactClick={scrollToFooter} />
      </div>

      <div className="d-flex bg-info vh-100 flex-md-row-reverse ">

      {/* Left White Box */}
      <div className="bg-white d-flex flex-column justify-content-center align-items-center p-5 rounded-end shadow" style={{ width: '35%' }}>
        <img src="./IMG_20230518_114602.jpg" alt="User Avatar" className="rounded-5 mb-3" style={{ width: '300px', height: '500px' }} />
      </div>
      
     <div className="bg-info flex-grow-1 d-flex justify-content-center align-items-center" style={{ width: '65%' }}>
        <div className="text-left p-5">
          <h1 className="text-white">Viraj Rajendra Shinde</h1>
          <h3 className="text-white mb-5">Software/Web-Application Developer</h3>

        <div className="text-left text-dark ">
            <p>A motivated and skilled software developer with a B.Tech and a Post Graduate Diploma in Advanced Computing. Proficient in Java, C#, HTML, CSS, React.js, Spring Boot and MS.NET . Experienced in developing web applications, with a strong focus on problem-solving and eager to apply technical expertise in a dynamic role. </p>
            <p className="mb-5"><i>Here you can find about my projects ,work and many more</i></p>
        </div>

        </div>

        
     </div>

     </div>

      <div>
        <Footer ref={footerRef} />
      </div>

    </div>
  );

}
export default User;