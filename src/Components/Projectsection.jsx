import React from "react";
import ProjectCards from "./Projectcards";
import p1img from "../assets/webproject.jpg";

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
            title="Google Health Platform"
            type="Web Application"
            image={p1img}
          />
          <ProjectCards
            title="Google Health Platform"
            type="Web Application"
            image={p1img}
          />
          <ProjectCards
            title="Google Health Platform"
            type="Web Application"
            image={p1img}
          />
          <ProjectCards
            title="Google Health Platform"
            type="Web Application"
            image={p1img}
          />
          <ProjectCards
            title="Google Health Platform"
            type="Web Application"
            image={p1img}
          />
          <ProjectCards
            title="Google Health Platform"
            type="Web Application"
            image={p1img}
          />
        </div>
        <div className="container d-flex justify-content-center mt-5">
          <button
            className="btn text-white fs-5 fw-600 px-3 py-2"
            style={{ backgroundColor: "#6366f1" }}
          >
            More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
