import { FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  return (
    <div className="education">
      <h1 className="heading">
        My <span>Journey</span>
      </h1>
      <div className="education-row">
        <div className="education-colum">
          <h3 className="title">Education</h3>
          <div className="education-box">
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
          </div>
        </div>
        <div className="education-colum">
          <h3 className="title">Experience</h3>
          <div className="education-box">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
