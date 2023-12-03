const Skills = () => {
  return (
    <div>
      <div className="skills " id="skills">
        <h2 className="heading relative ">
          My <span>Skills</span>
          <span
            className="animate about-head absolute "
            style={{ "--i": "1" }}
          ></span>
        </h2>
        <div className="skills-row">
          <div className="skills-colum">
            <h3 className="title relative">
              Coding Skills{" "}
              <span
                className="animate about-head absolute "
                style={{ "--i": "2" }}
              ></span>
            </h3>
            <div className="skills-box relative">
              <div className="skills-content">
                <div className="progres">
                  <h3>
                    HTML <span>95%</span>
                  </h3>
                  <div className="bar">
                    {" "}
                    <span className="w-[95%]"></span>
                  </div>
                </div>
                <div className="progres">
                  <h3>
                    CSS <span>82%</span>
                  </h3>
                  <div className="bar">
                    <span className="w-[82%]"></span>
                  </div>
                </div>
                <div className="progres">
                  <h3>
                    Javascript<span>65%</span>
                  </h3>
                  <div className="bar">
                    <span className="w-[65%]"></span>
                  </div>
                </div>
              </div>
              <span
                className="animate about-head absolute "
                style={{ "--i": "3" }}
              ></span>
            </div>
          </div>
          <div className="skills-colum">
            <h3 className="title relative">
              Professional Skills{" "}
              <span
                className="animate about-head absolute "
                style={{ "--i": "5" }}
              ></span>
            </h3>
            <div className="skills-box relative">
              <div className="skills-content">
                <div className="progres">
                  <h3>
                    Web Design <span>80%</span>
                  </h3>
                  <div className="bar">
                    {" "}
                    <span className="w-[80%]"></span>
                  </div>
                </div>
                <div className="progres">
                  <h3>
                    Web Development <span>85%</span>
                  </h3>
                  <div className="bar">
                    <span className="w-[85%]"></span>
                  </div>
                </div>
                <div className="progres">
                  <h3>
                    Authentication<span>65%</span>
                  </h3>
                  <div className="bar">
                    <span className="w-[65%]"></span>
                  </div>
                </div>
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
