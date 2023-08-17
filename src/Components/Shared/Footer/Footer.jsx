import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer h-24 flex items-center bg-[--second-bg-color] px-11 justify-between">
      <div className="footer-text">
        <p className=" text-base lg:text-xl">
          Copyright &copy; 2023 by Codehal | All Rights Reserved.
        </p>
      </div>
      <div className="footer-iconTop ">
        <a
          href="#home"
          className="px-3 text-xl py-3 hover:bg-[--bg-color] z-10 hover:text-[--main-color]  duration-500 transition-all "
        >
          <FaArrowUp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
