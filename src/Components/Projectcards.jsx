import React from "react";
const ProjectCards = ({ title, type, image }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mt-5 shadow">
      <div
        className="card h-100 border-start border-3"
        style={{ backgroundColor: "#1e3851" }}
      >
        <div className="card-header text-center text-white">
          <h5>{type}</h5>
        </div>
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title text-white">{title}</h5>
        </div>
        <div className="card-footer d-flex justify-content-center gap-2">
          <a href="" className="btn btn-primary">
            Live Demo
          </a>
          <a href="" className="btn btn-primary">
            Github Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
