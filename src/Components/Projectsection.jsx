import React from "react";
import ProjectCards from "./Projectcards";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="container text-white">
          <h1 className="text-center fw-semibold mb-3">Projects Portfolio</h1>
          <h4 className="text-center lead mt-3">
            View my projects and dive into my portfolio.
          </h4>
        </div>
        <div className="row">
          <ProjectCards
            title="Luxons Ecomerce Store"
            type="Web Application"
            image={"project1.png"}
          />
          <ProjectCards
            title="German Gateway Acadmy"
            type="Web Application"
            image={"Project2.jpg"}
          />
          <ProjectCards
            title="Weather App"
            type="Web Application"
            image={"project3.PNG"}
          />
        </div>
        <div className="container d-flex justify-content-center mt-5">
          <Link to="/projects">
            <button
              className="btn text-white fs-5 fw-600 px-3 py-2"
              style={{ backgroundColor: "#6366f1" }}
            >
              More Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
