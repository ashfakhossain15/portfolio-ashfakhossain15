import { Link } from "react-router-dom";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import BgAnimation from "../../Shared/Animation/BgAnimation";

const Home = () => {
  return (
    <div className=" home-content">
      <div>
        <h1 className="text-[25px] relative sm:text-[38px]  md:text-5xl lg:text-6xl xl:text-6xl home-name ">
          Hi I'm , <span className="text-[#00abf0]">Ashfak Hossain</span>
          <span className="animate absolute" style={{ "--i": "2" }}></span>
        </h1>
        <div className="text-animate ">
          <h1 className="text-[42px] md:text-5xl lg:text-6xl xl:text-6xl">
            FrontEnd Developer
 
          </h1>
          <span className="animate absolute" style={{ "--i": "3" }}></span>
        </div>
        <p className="py-6 relative content-bio mr-5">
          I am a skilled and passionate Front-End Developer, harnessing the
          power of code and design to create captivating user experiences. With
          a keen eye for aesthetics and functionality, I bring websites to life,
          seamlessly blending creativity and technology. Constantly seeking
          growth, I stay updated on the latest industry trends and best
          practices.
          <span className="animate absolute" style={{ "--i": "4" }}></span>

        </p>
        <div className="btn-box">
          <button className="button-box button-animate text-white bg-[#00abf0] px-7 py-3  rounded-md">
            <Link>Hire me</Link>
          </button>
          <button className="button-box button-animate text-white bg-[#00abf0] px-7 py-3 ">
            <Link>Lets Talk</Link>
          </button>
        </div>
      </div>
      <div className="home-sci">
        <Link
          to={"https://web.facebook.com/ashfakhossain175"}
          className="link-icon "
        >
          <FaFacebookF />
        </Link>{" "}
        <Link to={"https://github.com/ashfakhossain15"} className="link-icon">
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
  );
};

export default Home;
