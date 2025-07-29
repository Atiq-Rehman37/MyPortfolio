import React from "react";

const ProjectCards = ({ title, type, image }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-2 mt-5">
      <div className="card h-100" style={{ backgroundColor: "#1e3851" }}>
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "fill" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title text-white">{title}</h5>
          <p className="card-text lead text-white">{type}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
