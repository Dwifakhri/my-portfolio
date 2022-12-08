import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-secondary px-0 lg:py-4 lg:px-20 flex flex-col lg:flex-row justify-between sticky top-0 z-10 shadow-lg">
      <div className="flex justify-between border-b lg:border-0 items-center">
        <div className=" p-2 px-6 lg:p-0 ">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              <span className="text-white">dwi</span>
              <span className="text-primary_blue">fakhri</span>
            </h1>
          </Link>
        </div>

        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden p-2 px-6 lg:p-0"
        >
          {isOpen ? <BiMenu size={25} /> : <RxCross1 size={20} />}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "hidden" : "block"
        } lg:flex flex-col space-y-2 px-6 p-2 lg:p-0 lg:flex-row lg:space-y-0 lg:items-center lg:space-x-10 text-white text-xl font-normal bg-secondary `}
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </div>
    </div>
  );
};

export default Navbar;
