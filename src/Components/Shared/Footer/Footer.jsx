import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer h-24 flex items-center bg-[--second-bg-color] px-11 justify-between">
      <div className="footer-text">
        <p className="text-lg">
          Copyright &copy; 2023 by Codehal | All Rights Reserved.
        </p>
      </div>
      <div className="footer-iconTop ">
        <Link className="px-4 text-xl py-4 hover:bg-[--bg-color] z-10 hover:text-[--main-color]  duration-500 transition-all "><FaArrowUp/></Link>
      </div>
    </footer>
  );
};

export default Footer;
