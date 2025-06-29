import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import Footer from "./footer";
import "./App.css";

const projectData = [
  {
    title: "Dynamic PDF Generation using Spring Boot",
    date: "October 2024",
    description: [
      "Automated PDF creation from HTML templates.",
      "Structured API data: seller/buyer details, items, pricing, totals.",
      "Tested using Postman and Swagger with TDD.",
      "Local storage of generated PDFs.",
      "Efficient backend service for document generation in enterprise apps."
    ],
    github: "https://github.com/Viraj2404/Dynamic-PDF-Generation",
    logo: "/springbootlogo.png",
  },
  {
    title: "CleanConnect – Housekeeping Services Platform",
    date: "May–August 2024",
    description: [
      "Backend using Node.js and Express.",
      "MongoDB with Mongoose for flexible data storage.",
      "User signup, login, booking, and payment integration.",
      "Responsive frontend with HBS and CSS.",
      "Complete full-stack development with user-centric design."
    ],
    github: "https://github.com/Viraj2404/CleanConnect",
    logo: "/MERN.jpg",
  },
  {
    title: "E-Commerce Backend API using Spring Boot",
    date: "September 2024",
    description: [
      "H2 in-memory database integration.",
      "Full CRUD operations for product management.",
      "Search feature for filtering products.",
      "RESTful API design with Spring Boot.",
      "Backend architecture for scalable e-commerce apps."
    ],
    github: "https://github.com/Viraj2404/ecommerce-Website--Springboot-API",
    logo: "/springbootlogo.png",
  },
  {
    title: "Login-Registration App",
    date: "March 2025",
    description: [
        "Developed a user-friendly app for managing personal tasks.",
        "Implemented features for adding, editing, and deleting tasks.",   
        "Utilized MS-SQL Server for data storage.",
        "CSHTML and CSS for responsive design."
    ],
    github: "https://github.com/Viraj2404/UsersApp",
    logo: "/aspdotnet.png",
  },
  {
    title: "MERN- crud app",
    date: "June 2025",
    description: [
        "Developed a full-stack CRUD application using the MERN stack.",
        "Implemented user authentication and authorization.",
        "MongoDB for data storage, Express.js for backend, React.js for frontend, and Node.js for server-side logic.",
        "Responsive design with Bootstrap and CSS."
    ],
    github: "https://github.com/Viraj2404/MERN-crud",
    logo: "/MERN.jpg",
  },
  {
    title: "Bloging Website",
    date: "September 2024",
    description: [
        "Created a blogging platform for sharing articles.",
        "Implemented React.js for dynamic user interface."
    ],
    github: "https://github.com/Viraj2404/Dojo-Blog",
    logo: "/reactjs.png",
  },
];

function Projects() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-info min-vh-100 d-flex flex-column">
      <div className="bg-dark text-white px-4 py-3 shadow sticky-top">
        <Navbar onContactClick={scrollToFooter} />
      </div>

      <div className="container  text-white my-4">
        <h2 className="text-center text-White fw-bold mb-5">Projects</h2>

        {projectData.map((project, index) => (
            
             <a
    key={index}
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="text-decoration-none"
  >

          <div
            key={index}
            className="card mb-5 shadow rounded-5 border-0 bg-white"
          >
            <div
              className={`row g-0 d-flex align-items-center ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
            >
              {/* Text */}
              <div className="col-md-8 p-4 bg-primary text-white rounded-5">
                <h5 className="card-title text-white fw-bold">{project.title}</h5>
                <h6 className="card-subtitle mb-3 text-white">{project.date}</h6>
                <ul className="ps-3">
                  {project.description.map((point, idx) => (
                    <li key={idx} className="text-white mb-1">{point}</li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className="col-md-4 text-center p-3">
                <img
                  src={project.logo}
                  alt="project-logo"
                  className="img-fluid"
                  style={{ maxHeight: "100px", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>

          </a>
        ))}
      </div>

      <div className="text-center text-white mb-5 decoration-none">
        <p>
            For more of my projects , Do visit my <a href="https://github.com/Viraj2404" target="_blank" rel="noopener noreferrer"><i>Github</i></a>  page
        </p>
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Projects;
