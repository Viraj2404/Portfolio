import React, { useRef } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Skill categories and logos
const skillData = [
  {
    category: "Languages",
    skills: [
      { name: "Java", logo: "/java-logo.png" },
      { name: "C#", logo: "/Csharp.png" },
      { name: "JavaScript", logo: "/javascript.png" },
      { name: "C++", logo: "/cpp.png" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", logo: "/reactjs.png" },
      { name: "HTML", logo: "/html.jpg" },
      { name: "CSS", logo: "/css.png" },
      { name: "Bootstrap", logo: "/bootstrap.jpg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", logo: "/springbootlogo.png" },
      { name: "Node.js", logo: "/nodejs.png" },
      { name: "ASPNET", logo: "/aspdotnet.png" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", logo: "/mongodb.png" },
      { name: "MySQL", logo: "/mysql.jpg" },
      { name: "MS-SQL", logo: "/mssql.jpg" },
    ],
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", logo: "/git.png" },
      { name: "Postman", logo: "/postman.jpg" },
    ],
  },
];

function Skills() {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-info min-vh-100 d-flex flex-column">
      <div className="bg-dark text-white px-4 py-3 shadow sticky-navbar">
        <Navbar onContactClick={scrollToFooter} />
      </div>

      <div className="container text-white my-4">
        <h2 className="text-center text-white fw-bold mb-5">Skills</h2>

        {skillData.map((group, index) => (
          <div key={index} className="mb-4 bg-primary align-items-center justify-content-center p-4 rounded-5 shadow">
            <h4 className="text-White align-items-center justify-content-center text-center p-3 mb-3">{group.category}</h4>
            <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
              {group.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded shadow p-2 d-flex flex-column align-items-center justify-content-center p-3 mb-3"
                  style={{ width: "100px", marginRight: "60px" }}
                >
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="img-fluid"
                    style={{ maxHeight: "40px", objectFit: "contain" }}
                  />
                  <small className="mt-2 text-dark text-center">{skill.name}</small>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default Skills;
