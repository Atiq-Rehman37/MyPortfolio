import React from "react";
// import "./TechStack.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

const TechStack = () => {
  return (
    <section className="techstack-section text-center py-5 my-3">
      <div className="container">
        <h2 className="section-title mb-4 pb-3 highlighted-name">
          Tools I Use Every Day
        </h2>
        <div className="row justify-content-center gy-4">
          <div className="col-6 col-sm-4 col-md-3 tech-icon">
            <FaHtml5 className="icon html fs-1" color="#e34c26" />
            <p>HTML5</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 tech-icon">
            <FaCss3Alt className="icon css fs-1" color="#264de4" />
            <p>CSS3</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 tech-icon">
            <FaBootstrap className="icon bootstrap fs-1" color="#7952b3" />
            <p>Bootstrap 5</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 tech-icon">
            <FaJs className="icon js fs-1" color="#f0db4f" />
            <p>JavaScript</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 tech-icon">
            <FaReact className="icon react fs-1" color="	#61dafb" />
            <p>ReactJS</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 tech-icon">
            <FaGitAlt className="icon git fs-1" color="	#f1502f" />
            <p>Git</p>
          </div>
          <div className="col-6 col-sm-4 col-md-3 tech-icon">
            <FaGithub className="icon github fs-1" color="#5b5555ff" />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
