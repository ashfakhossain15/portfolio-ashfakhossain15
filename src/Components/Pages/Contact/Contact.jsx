import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="contact " id="contact">
        <h2 className="heading relative">
          Contact <span>Me!</span>{" "}
          <span
            className="animate about-head absolute "
            style={{ "--i": "1" }}
          ></span>
        </h2>
        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
            <span
              className="animate about-head absolute "
              style={{ "--i": "2" }}
            ></span>
          </div>

          {/*  */}
          <div className="input-box">
            <div className="input-field">
              <input type="number" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
            <span
            className="animate about-head absolute "
            style={{ "--i": "4" }}
          ></span>
          </div>
          <div className="textarea-field">
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
              className="text-xl"
              required
            ></textarea>
            <span className="focus"></span>
            <span
            className="animate about-head absolute "
            style={{ "--i": "6" }}
          ></span>
          </div>
          <div className="btn-box relative buttons cursor-pointer">
            <Link type="submit" className="button-box px-8 py-3">
              Submit
            </Link>
            <span
            className="animate about-head absolute "
            style={{ "--i": "8" }}
          ></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
