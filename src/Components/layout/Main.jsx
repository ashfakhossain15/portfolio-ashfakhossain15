import Header from "../Shared/Header/Header";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Education from "../Pages/Education/Education";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Shared/Footer/Footer";
import { useState, useEffect } from "react";

const Main = () => {
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 190;
      const sectionHeight = section.clientHeight;
      if (
        window.scrollY >= sectionTop &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        setActiveSection(section.id);
      }
    });
  };

  useEffect(() => {
    if (activeSection) {
      document
        .querySelector(`#${activeSection}`)
        .classList.add("show-animation");
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-content">
      <div className="bg-[--bg-color] ">
        <Header {...{ activeSection }} />
        <section className={`home h-[100vh]`} id="home">
          <Home />
        </section>
        <section className={`about`} id="about">
          <About />
        </section>
        <section className={`education`} id="education">
          <Education />
        </section>
        <section className={`skills`} id="skills">
          <Skills />
        </section>
        <section className={`contact`} id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
