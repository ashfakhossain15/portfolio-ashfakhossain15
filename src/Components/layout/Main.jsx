import Header from "../Shared/Header/Header";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Education from "../Pages/Education/Education";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact";
import Footer from "../Shared/Footer/Footer";
import { useState, useEffect } from "react";

const Main = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = document.querySelectorAll("section"); // Assuming you're using <section> tags for sections
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-content">
      <div className="bg-[--bg-color] ">
        <Header {...{ activeSection }} />
        <section className={`home lg:h-[100vh] ${activeSection === 'home' ? 'show-animation':''}`} id="home">
          <Home />
        </section>
        <section className={`about  ${activeSection === 'about' ? 'show-animation':''}`} id="about">
          <About />
        </section>
        <section className={`education  ${activeSection === 'education' ? 'show-animation':''}`}  id="education">
          <Education />
        </section>
        <section className={`skills  ${activeSection === 'skills' ? 'show-animation':''}`}  id="skills">
          <Skills />
        </section>
        <section className={`contact  ${activeSection === 'contact' ? 'show-animation':''}`}  id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
