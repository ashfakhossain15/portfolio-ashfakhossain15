import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
const Home = () => {
  return (
    <div>
      <Header />
      <section className=" home-content">
        <div>
          <h1 className="text-6xl home-name  ">
            Hi I'm <span className="text-[#00abf0]">Ashfak Hossain</span>
          </h1>
          <h2 className="text-animate">FontEnd Developer</h2>
          <p>
            I am a skilled and passionate Front-End Developer, harnessing the
            power of code and design to create captivating user experiences.
            With a keen eye for aesthetics and functionality, I bring websites
            to life, seamlessly blending creativity and technology. I am adept
            at converting design concepts into pixel-perfect realities,
            optimizing site performance, and ensuring cross-browser
            compatibility. Constantly seeking growth, I stay updated on the
            latest industry trends and best practices. As a detail-oriented
            problem solver, I relish challenges and take pride in delivering
            clean, intuitive, and accessible web solutions that make a lasting
            impact.
          </p>
          <div className="flex gap-x-8 mt-5">
            <button className="text-white bg-[#00abf0] px-5 py-3  rounded-md">
              <Link>Hire me</Link>
            </button>
            <button className="text-white bg-[#00abf0] px-5 py-3 rounded-md">
              <Link>Lets Talk</Link>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
