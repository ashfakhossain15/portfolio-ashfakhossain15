import { IoLogoHtml5, IoLogoCss3, IoLogoReact } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import {
  SiTailwindcss,
  SiMongodb,
  SiDaisyui,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiReactrouter,
} from "react-icons/si";
import { FaSass } from "react-icons/fa";

// SiCss3, FaReact, FaBootstrap
const Skills = () => {
  return (
    <div>
      <div className="skills " id="skills">
        <h2 className="heading relative mb-8 ">
          My <span>Skills</span>
          <span
            className="animate about-head absolute "
            style={{ "--i": "1" }}
          ></span>
        </h2>
        <div className="skills-row">
          <div className="skills-colum">
            <div className="skills-box relative grid grid-cols-2 sm:gird-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <IoLogoHtml5 size={30} />
                HTML
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <IoLogoCss3 size={30} />
                CSS
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                {/* <h1 className="text-5xl"> */}
                <SiTailwindcss size={30} />
                {/* </h1> */}
                Tailwined
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <FaBootstrap size={30} />
                Bootstrap
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <IoLogoReact size={30} />
                React Js
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <FaSass size={30} />
                SASS
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <SiDaisyui oReact size={30} />
                DaisyUI
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <SiTypescript size={30} />
                TypeScript
              </div>

              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <SiNextdotjs size={30} />
                Next.Js
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <SiReactrouter size={30} />
                React Router
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <SiRedux size={30} />
                Redux
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <IoLogoReact size={30} />
                Recharts
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <SiExpress size={30} />
                Express.Js
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <IoLogoReact size={30} />
                JSON Web Tokens
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <IoLogoReact size={30} />
                RESTful APIs
              </div>
              <div
                className="gap-2 py-3 px-10 flex items-center rounded-md"
                style={{ border: "1px solid #00abf0" }}
              >
                <SiMongodb size={30} />
                MongoDB
              </div>

              <span
                className="animate about-head absolute "
                style={{ "--i": "6" }}
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;