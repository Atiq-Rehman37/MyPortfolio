import React from "react";
// import "./About.css"; // External CSS for styling
import profileImage from "../assets/profile_pic.png";

const Aboutsection = () => {
  return (
    <div className="container about-container my-5 pt-3">
      <div className="row g-5">
        {/* Image Section */}
        <div className="col-md-3 text-center">
          <img
            src={profileImage}
            alt="Profile"
            className="img-fluid rounded profile-img"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-9">
          <h2 className="mb-3 highlighted-name">Frontend Web Developer</h2>
          <p>
            I’m a passionate Frontend Web Developer skilled in building
            responsive, modern, and accessible web interfaces. <br></br> I focus
            on clean design, performance, and creating a seamless user
            experience across all devices.
          </p>
          <p>
            With expertise in the following technologies, I build fast and
            interactive websites:
          </p>
          <ul className="skill-list">
            <li>HTML5 – Semantic, SEO-friendly structure</li>
            <li>CSS3 – Responsive design, Flexbox, Grid</li>
            <li>Bootstrap 5 – UI components, grid system</li>
            <li>JavaScript – DOM manipulation, ES6+, APIs</li>
            <li>React.js – Reusable components, hooks, routing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
