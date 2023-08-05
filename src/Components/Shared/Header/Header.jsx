const Header = () => {
  return (
    <div className="flex items-center  justify-between py-6 px-28 fixed top-0 w-full ">
      <h2 className="text-4xl name font-primary tracking-wider font-semibold">
        .ashfak
      </h2>
      <nav className="space-x-8 pr-4">
        <a className="text-lg " href="/">
          Home
        </a>
        <a className="text-lg" href="/about">
          About
        </a>
        <a className="text-lg" href="/education">
          Education
        </a>
        <a className="text-lg" href="/skills">
          Skills
        </a>
        <a className="text-lg" href="/contact">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Header;
