import ProjectCards from "../Components/Projectcards";
const Project = () => {
  return (
    <div>
      <section className="py-5">
        <div className="container">
          <div className="container text-white">
            <h1 className="text-center fw-semibold mb-3">
              All <span className="highlighted-name">Projects</span>
            </h1>
            <h4 className="text-center lead mt-3">
              View my all projects and dive into my portfolio.
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
              title="Spotify Music Clone"
              type="Web Application"
              image={"project4.png"}
              Link="https://github.com/Atiq-Rehman37/Spotify-Music"
              Github="https://github.com/Atiq-Rehman37/Spotify-Music"
            />
            <ProjectCards
              title="Netflix Clone"
              type="Web Application"
              image={"project5.png"}
              Link="https://github.com/Atiq-Rehman37/Spotify-Music"
              Github="https://github.com/Atiq-Rehman37/Spotify-Music"
            />
            <ProjectCards
              title="ManiStuff Ecomerce Store"
              type="Web Application"
              image={"project6.PNG"}
              Link="https://github.com/Atiq-Rehman37/Project-1"
              Github="https://github.com/Atiq-Rehman37/Project-1"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
