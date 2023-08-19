import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menu, setMenu] = useState(false);
  
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav a");
  window.onscroll = () => {
    sections.forEach((section) => {
      let top = window.scrollY;
      let offset = window.offset - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute("id");

      if (id >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a[href*=" + id + "]")
            .classList.add("active");
        });
      }
    });

    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);
  };
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex items-center z-50 fixed top-0 justify-between transition-all duration-700 py-5 sm:px-14 md:px-20 lg:px-24 px-9  w-full   header">
      <a href="#home">
        <h2 className="text-4xl  name font-primary tracking-wider font-semibold">
          .ashfak
        </h2>
      </a>
      <div className="block  md:hidden">
        <button className="text-3xl"  onClick={() => handleMenu()}>
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {menu ? (
        <nav className="navbar flex flex-col absolute top-[100%] duration-300  transition-all left-0 w-[100%] px-[4rem] py-5 bg-[--bg-color] shadow-lg shadow-black z-10 divide-y divide-gray-400">
          <a className="text-lg translate-x-[0] delay-200 " href="#home">
            Home
          </a>
          <a
            className="text-lg  translate-x-[0] ease-out delay-[400ms]"
            href="#about"
          >
            About
          </a>
          <a
            className="text-lg  translate-x-[0] ease-out delay-[600ms]"
            href="#education"
          >
            Education
          </a>
          <a
            className="text-lg  translate-x-[0] ease-out delay-[800ms]"
            href="#skills"
          >
            Skills
          </a>
          <a
            className="text-lg  translate-x-[0] ease-out delay-1000"
            href="#contact"
          >
            Contact
          </a>
          <span className="absolute top-0 left- w-full h-full border-t-4 border-t-sky-400 bg-[--bg-color] -z-10 duration-700 ease-out "></span>
        </nav>
      ) : (
        <nav className="navbar flex flex-col absolute top-[100%] duration-500 left-[-105%] w-[100%] px-[4rem] py-5 bg-[--bg-color] shadow-lg shadow-black ">
          <a className="text-lg  translate-x-[-20rem]" href="#home">
            Home
          </a>
          <a className="text-lg  translate-x-[-20rem]" href="#about">
            About
          </a>
          <a className="text-lg  translate-x-[-20rem]" href="#education">
            Education
          </a>
          <a className="text-lg  translate-x-[-20rem]" href="#skills">
            Skills
          </a>
          <a className="text-lg  translate-x-[-20rem]" href="#contact">
            Contact
          </a>

          <span className="absolute top-0 left-[-105%] w-full h-full border-t-4 border-t-sky-400 bg-[--main-color] -z-10 duration-500 ease-in transition-all "></span>
        </nav>
      )}

      <nav className="nav hidden md:block space-x-8 pr-4">
        <a className="text-lg " href="#home">
          Home
        </a>
        <a className="text-lg" href="#about">
          About
        </a>
        <a className="text-lg" href="#education">
          Education
        </a>
        <a className="text-lg" href="#skills">
          Skills
        </a>
        <a className="text-lg" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
