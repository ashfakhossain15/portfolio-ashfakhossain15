import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className="py-16 about">
        <h1 className="heading">
          About <span>Me</span>
        </h1>
        <div className="about-img">
          <img src="/1671526779462-01.jpeg" alt="" />
          <span className="circle-spin"></span>
        </div>

        <div className="about-content">
          <h2>Frontend Developer!</h2>
          <p>
            I am a Front-End Developer with a passion for creating captivating
            user experiences. My expertise in HTML, CSS, and JavaScript allows
            me to craft dynamic and responsive interfaces. With a keen eye for
            aesthetics and functionality, I consistently deliver clean,
            intuitive, and accessible web solutions. Keeping up with the latest
            industry trends and best practices, I am dedicated to continuous
            growth and improvement. As a detail-oriented problem solver, I
            relish challenges and take pride in my ability to create meaningful
            and impactful websites.
          </p>
          <div className="btn-box buttons">
            <Link className="button-box  my-4 px-5 py-2">
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
