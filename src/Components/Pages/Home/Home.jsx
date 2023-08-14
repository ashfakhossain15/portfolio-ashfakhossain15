import { Link } from "react-router-dom";
import Header from "./../../Shared/Header/Header";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import BgAnimation from "../../Shared/Animation/BgAnimation";
import About from "../About/About";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
const Home = () => {
  return (
    <div>
      <Header />
      <section className="home">
        <div className=" home-content">
          <div>
            <h1 className="text-6xl home-name  ">
              Hi I'm <span className="text-[#00abf0]">Ashfak Hossain</span>
            </h1>
            <div className="text-animate">
              <h1>FontEnd Developer</h1>
            </div>{" "}
            <p className="py-6 content-bio mr-5">
              I am a skilled and passionate Front-End Developer, harnessing the
              power of code and design to create captivating user experiences.
              With a keen eye for aesthetics and functionality, I bring websites
              to life, seamlessly blending creativity and technology. Constantly
              seeking growth, I stay updated on the latest industry trends and
              best practices.
            </p>
            <div className="btn-box">
              <button className="button-box text-white bg-[#00abf0] px-7 py-3  rounded-md">
                <Link>Hire me</Link>
              </button>
              <button className="button-box text-white bg-[#00abf0] px-7 py-3 ">
                <Link>Lets Talk</Link>
              </button>
            </div>
          </div>
          <div className="home-sci">
            <Link
              to={"https://web.facebook.com/ashfakhossain175"}
              className="link-icon"
            >
              <FaFacebookF />
            </Link>{" "}
            <Link
              to={"https://github.com/ashfakhossain15"}
              className="link-icon"
            >
              <FaGithub />
            </Link>{" "}
            <Link
              className="link-icon"
              to={"https://www.linkedin.com/in/ashfakhossain15/"}
            >
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="home-img">
            <div className="absolute w-full right-0  sm:-right-32 top-50">
              <BgAnimation />
            </div>
          </div>
        </div>
      </section>
      <section>
        <About />
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
