import React from "react";
// import "./Stats.css"; // Custom styles

const Stats = () => {
  return (
    <section
      className="stats-section text-center py-5 rounded"
      style={{ backgroundColor: "rgb(34, 73, 109)" }}
    >
      <div className="container">
        <div className="row g-4">
          <div className="col-md-3 col-6">
            <h2>6 + </h2>
            <p>Months of experience</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>100 %</h2>
            <p>Passion</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>92 %</h2>
            <p>Positive feedback</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>86 %</h2>
            <p>Projects completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
