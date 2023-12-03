import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education">
      <h1 className="heading relative">
        My <span>Journey</span>
        <span
          className="animate about-head absolute "
          style={{ "--i": "1" }}
        ></span>
      </h1>
      <div className="education-row mt-9.">
        <div className="education-colum">
          <h3 className="title relative">
            Education{" "}
            <span
              className="animate about-head absolute "
              style={{ "--i": "2" }}
            ></span>
          </h3>
          <div className="education-box relative">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2019
                </div>

                <h3 className="" title="(Junior School Certificate)">
                  JSC - Bornamala School And College
                </h3>
                <p>
                  In 2019, I achieved a GPA of 3.86/5 in the JSC examination
                  from Bornamala School and College, marking a significant
                  academic accomplishment on my journey.
                </p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2020-2022
                </div>

                <h3 title="(Junior School Certificate) ">
                  SSC - Karihata High School
                </h3>
                <p>
                  I proudly graduated from Karihata High School in 2022,
                  achieving an impressive GPA of 4.50 out of 5 in the SSC
                  examination held between 2020-2022.
                </p>
              </div>
            </div>
            <span
              className="animate about-head absolute "
              style={{ "--i": "3" }}
            ></span>
          </div>
        </div>
        <div className="education-colum">
          <h3 className="title relative">
            Experience{" "}
            <span
              className="animate about-head absolute "
              style={{ "--i": "4" }}
            ></span>
          </h3>
          <div className="education-box relative">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2019
                </div>

                <h3>Web Developer - Company Name( None )</h3>
                <p>No Experience In this Section .</p>
              </div>
            </div>
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <FaCalendarAlt />
                  2020-2023
                </div>

                <h3>Web Developer - Company Name( None )</h3>
                <p>No Experience In this Section .</p>
              </div>
            </div>
            <span
              className="animate about-head absolute "
              style={{ "--i": "5" }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
