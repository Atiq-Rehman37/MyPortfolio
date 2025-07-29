import ProjectCards from "../Components/Projectcards";
const Project = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="container text-white">
            <h1 className="text-center fw-semibold mb-3">All Projects</h1>
            <h4 className="text-center lead mt-3">
              View my all projects and dive into my portfolio.
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
            <ProjectCards
              title="Spotify Music Clone"
              type="Web Application"
              image={"project4.png"}
            />
            <ProjectCards
              title="Netflix Clone"
              type="Web Application"
              image={"project5.png"}
            />
            <ProjectCards
              title="ManiStuff Ecomerce Store"
              type="Web Application"
              image={"project6.PNG"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
