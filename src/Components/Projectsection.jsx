import React from "react";
import ProjectCards from "./Projectcards";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="container text-white">
          <h1 className="text-center fw-semibold mb-3">
            Projects <span className="highlighted-name">Portfolio</span>
          </h1>
          <h4 className="text-center lead mt-3">
            View my projects and dive into my portfolio.
          </h4>
        </div>
        <div className="row">
          <ProjectCards
            title="HELGRAY Ecomerce Store"
            type="Web Application"
            image={"project1.png"}
            Link="https://prestigetime.netlify.app/"
            Github="https://github.com/Atiq-Rehman37/EcomerceStore"
          />

          <ProjectCards
            title="Weather App"
            type="Web Application"
            image={"project3.PNG"}
            Link="https://github.com/Atiq-Rehman37/WeatherApp"
            Github="https://github.com/Atiq-Rehman37/WeatherApp"
          />
          <ProjectCards
            title="Spotify Music"
            type="Web Application"
            image={"project4.png"}
            Link="https://github.com/Atiq-Rehman37/Spotify-Music"
            Github="https://github.com/Atiq-Rehman37/Spotify-Music"
          />
        </div>
        <div className="container d-flex justify-content-center mt-5">
          <Link to="/projects">
            <button className="btn text-white fs-5 fw-600 px-3 btn-primary">
              More Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
