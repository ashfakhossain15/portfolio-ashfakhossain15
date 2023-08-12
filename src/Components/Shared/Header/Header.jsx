import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center z-50 sticky top-0 justify-between py-6 px-28  w-full ">
      <h2 className="text-4xl  name font-primary tracking-wider font-semibold">
        .ashfak
      </h2>
      <nav className="space-x-8 pr-4">
        <Link className="text-lg " to="/">
          Home
        </Link>
        <Link className="text-lg" to="/about">
          About
        </Link>
        <Link className="text-lg" to="/education">
          Education
        </Link>
        <Link className="text-lg" to="/skills">
          Skills
        </Link>
        <Link className="text-lg" to="/contact">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Header;
