const Skills = () => {
  return (
    <div>
      <section className="skills " id="skills">
        <h2 className="heading">
          My <span>Skills</span>
        </h2>
        <div className="skills-row">
          <div className="skills-colum">
            <h3 className="title">Coding Skills</h3>
            <div className="skills-box">
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
            </div>
          </div>
          <div className="skills-colum">
            <h3 className="title">Professional Skills</h3>
            <div className="skills-box">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
