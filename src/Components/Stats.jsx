import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section
      className="stats-section text-center py-5 rounded"
      style={{ backgroundColor: "rgb(34, 73, 109)" }}
    >
      <div className="container" ref={ref}>
        <div className="row g-4">
          <div className="col-md-3 col-6">
            <h2>{inView && <CountUp end={7} duration={5} />} +</h2>
            <p>Months of experience</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>{inView && <CountUp end={100} duration={4} />} %</h2>
            <p>Passion</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>{inView && <CountUp end={92} duration={4} />} %</h2>
            <p>Positive feedback</p>
          </div>
          <div className="col-md-3 col-6">
            <h2>{inView && <CountUp end={86} duration={4} />} %</h2>
            <p>Projects completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
