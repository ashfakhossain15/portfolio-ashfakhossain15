const Header = () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");
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
  return (
    <header className="flex items-center z-50 fixed top-0 justify-between transition-all duration-700 py-5 px-24  w-full   header">
      <h2 className="text-4xl  name font-primary tracking-wider font-semibold">
        .ashfak
      </h2>
      <nav className="nav space-x-8 pr-4">
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
