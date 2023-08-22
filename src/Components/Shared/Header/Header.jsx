import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const navLinks = [
  {
    name: "Home",
    to: "#home",
  },
  {
    name: "About",
    to: "#about",
  },
  {
    name: "Education",
    to: "#education",
  },
  { name: "Skills", to: "#skills" },
  { name: "Contact", to: "#contact" },
];

const Header = (props) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex items-center z-[100] fixed top-0 justify-between transition-all duration-700 py-5 sm:px-14 md:px-20 lg:px-24 bg-[--bg-color] px-9  w-full  header">
      <a href="#home">
        <h2 className="text-4xl name relative font-primary tracking-wider font-semibold">
          .ashfak
          <span className="animate absolute" style={{ "--i": "1" }}></span>
        </h2>
      </a>
      <div className="block relative navIcon  md:hidden">
        <button className="text-3xl" onClick={() => handleMenu()}>
          {menu ? <FaTimes /> : <FaBars />}
          <span className="animate absolute" style={{ "--i": "2" }}></span>
        </button>
      </div>

      {menu ? (
        <nav className="navbar flex flex-col absolute top-[100%] duration-300  transition-all left-0 w-[100%] px-[4rem] py-5 bg-[--bg-color] shadow-lg shadow-black z-10 divide-y divide-gray-400">
          {navLinks.map((item, index) => (
            <a
              key={item.name}
              className={`text-lg translate-x-[0] ${
                props.activeSection === item.name.toLowerCase()
                  ? "active show-animation"
                  : ""
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              href={item.to}
            >
              {item.name}
            </a>
          ))}
          <span className="absolute top-0 left- w-full h-full border-t-4 border-t-sky-400 bg-[--bg-color] -z-10 duration-700 ease-out "></span>
        </nav>
      ) : (
        <nav className="nav flex flex-col absolute top-[100%] duration-500 left-[-105%] w-[100%] px-[4rem] py-5 bg-[--bg-color] shadow-lg shadow-black ">
          {navLinks.map((item) => (
            <a
              key={item.name}
              className={`text-lg  translate-x-[-20rem] ${
                props.activeSection === item.name.toLowerCase() ? "active" : ""
              }`}
              href={item.to}
            >
              {item.name}
            </a>
          ))}

          <span className="absolute top-0 left-[-105%] w-full h-full border-t-4 border-t-sky-400 bg-[--main-color] -z-10 duration-500 ease-in transition-all  "></span>
        </nav>
      )}

      <nav className="nav relative hidden md:block space-x-8 pr-4">
        {navLinks.map((item) => (
          <a
            key={item.name}
            className={`text-lg ${
              props.activeSection === item.name.toLowerCase()
                ? "active"
                : ""
            }`}
            href={item.to}
          >
            {item.name}
          </a>
        ))}
        <span className="animate absolute" style={{ "--i": "2" }}></span>
      </nav>
    </header>
  );
};

export default Header;
