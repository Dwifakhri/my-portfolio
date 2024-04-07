import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [background, setBackground] = useState(false);

  var pos = window.scrollY;
  window.addEventListener("scroll", function name() {
    if (pos > window.scrollY && window.scrollY > 48) {
      setBackground(true);
      console.log("ok");
    } else {
      setBackground(false);
    }
    pos = window.scrollY;
  });

  useEffect(() => {
    activeMenu();
  });

  const activeMenu = () => {
    const list = document.querySelectorAll("li");
    const section = document.querySelectorAll("section");
    let len = section.length;
    while (--len && window.scrollY + 97 < section[len]?.offsetTop) {}
    list?.forEach((item) => item?.classList.remove("active"));
    list[len]?.classList.add("active");
  };
  activeMenu();
  window.addEventListener("scroll", activeMenu);

  return (
    <div
      className={`${
        background
          ? "bg-secondary transition-transform duration-500 easy-in-out top-[-32px] fixed translate-y-[32px]"
          : "absolute"
      } w-full px-0 lg:py-4 lg:px-20 flex flex-col lg:flex-row justify-between z-10 bg-primary shadow-lg`}>
      <div className="flex justify-between items-center">
        <div className=" p-2 px-6 lg:p-0 ">
          <h1 className="text-2xl font-bold">
            <span className="text-white">dwi</span>
            <span className="text-primary_blue">fakhri</span>
          </h1>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden p-2 px-6 lg:p-0 cursor-pointer">
          {!isOpen ? <BiMenu size={25} /> : <RxCross1 size={20} />}
        </div>
      </div>
      <div
        className={`${
          !isOpen ? "hidden" : "block"
        } lg:flex flex-col space-y-2 px-6 p-2 lg:p-0 lg:flex-row lg:space-y-0 lg:items-center lg:space-x-10 text-white text-md font-normal`}>
        <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="#skill">
            Skill
          </Link>
        </li>
        <li>
          <Link smooth to="#project">
            Project
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
