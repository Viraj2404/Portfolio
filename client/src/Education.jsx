import React, { useRef } from "react";
import './App.css';
import Navbar from "./navbar";
import Footer from "./footer";
import 'bootstrap/dist/css/bootstrap.min.css';

const educationData = [
  {
    degree: "PG-Diploma in Advanced Computing",
    institute: "CDAC, Bengaluru",
    date: "August 2024",
    score: "57.63%",
    Img: "/cdac-logo.jpg",
  },
  {
    degree: "B.Tech in Mechanical Engineering",
    institute: "MIT World Peace University, Pune",
    date: "2023",
    score: "7.01 CGPA (Equivalent: 62.60%)",
    Img: "/mitwpu.jpg",
  },
  {
    degree: "HSC- 12th Science",
    institute: "Tatyasaheb Musale Jr. College, Ichalkaranji",
    date: "2019",
    score: "61.85%",
    Img: "/tmc-img.jpg",
  },
  {
    degree: "SSC- 10th",
    institute: "Nirmala Convent High School, Satara",
    date: "2017",
    score: "79.40%",
    Img: "/nchs-img.jpg",
  },
];

function Education() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="d-flex flex-column min-vh-100 bg-info">

      {/* Navbar */}
      <div className="bg-dark text-white px-4 py-3 shadow sticky-navbar">
        <Navbar onContactClick={scrollToFooter} />
      </div>

      {/* Title */}
      <h2 className="text-center my-4 text-white fw-bold mb-3 p-3">Educational Qualifications</h2>

      {/* Education Cards */}
      <div className="container mb-5">
        {educationData.map((edu, index) => (
          <div className="card mb-5 shadow border-0 rounded-5 bg-white p-0 " key={index}>
            <div className={`row g-0 d-flex align-items-center ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}>
              
              {/* Text Section */}
              <div className="col-md-8 p-5 mb-0 bg-primary rounded-5 text-white">
                <h5 className="fw-bold text-white">{edu.degree}</h5>
                <p className="mb-1"><strong>Institute:</strong> {edu.institute}</p>
                <p className="mb-1"><strong>Year:</strong> {edu.date}</p>
                <p><strong>Score:</strong> {edu.score}</p>
              </div>

              {/* Image Section */}
              <div className="col-md-4 text-center rounded-5 p-3 bg-white">
                <img
                  src={edu.Img}
                  alt={edu.institute}
                  className="img-fluid rounded"
                  style={{ maxHeight: '150px', objectFit: 'contain' }}    
                />
              </div>
            </div>
          </div>
        ))}
      </div>


      {/* Footer */}
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Education;
