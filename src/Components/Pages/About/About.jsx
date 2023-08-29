import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="py-16 about">
        <h1 className="heading">
          About <span>Me</span>
        </h1>
        <div className="flex flex-col  md:grid md:grid-cols-2 items-center md:justify-around  px-10 md:px-24 mt-8">
          <div className="about-img  md:ml-16 ">
            <img src="/1671526779462-01.jpeg" alt="" />
            <span className="circle-spin"></span>
          </div>

          <div className="about-content space-y-8  text-center md:text-left mt-8">
            <h2 className=" mb-4">Frontend Developer!</h2>
            <p className="text-base ">
              I am a Front-End Developer with a passion for creating captivating
              user experiences. My expertise in HTML, CSS, and JavaScript allows
              me to craft dynamic and responsive interfaces. With a keen eye for
              aesthetics and functionality, I consistently deliver clean,
              intuitive, and accessible web solutions. Keeping up with the
              latest industry trends and best practices, I am dedicated to
              continuous growth and improvement.
            </p>
            <div className="btn-box buttons ">
              <Link className="button-box  my-6 px-5 py-2">
                <button className="font-semibold">Read More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
