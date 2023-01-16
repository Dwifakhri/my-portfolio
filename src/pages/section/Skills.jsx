import React from "react";
import { Slide } from "react-awesome-reveal";
import { FaLaptopCode } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { CgIfDesign } from "react-icons/cg";

const Skills = () => {
  const mySkills = [
    "Javascript",
    "HTML & CSS",
    "Postman",
    "React JS",
    "Figma",
    "Adobe Photoshop",
    "VueJs",
    "Tailwind",
    "Adobe Premiere",
  ];
  return (
    <section
      id="skill"
      className=" bg-secondary h-auto w-full py-16 px-6 lg:px-14 text-white font-light"
    >
      <p className="font-medium text-5xl text-center">
        What <span className="text-primary_blue">Skills</span> I Have for You
      </p>
      <Slide direction="up" cascade triggerOnce={true}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center my-8 my-element ">
          <div className="bg-primary w-full p-6 h-auto text-left space-y-4">
            <div className="bg-[#4B5066] text-primary_blue rounded-full w-max p-4">
              <FaLaptopCode size={40} />
            </div>
            <p className="font-semibold text-xl">Front End Development </p>
            <p className="text-gray-300 text-sm">
              Developing and maintaining the user interface and experience of
              website with responsive implementation.
            </p>
          </div>
          <div className="bg-primary w-full p-6 h-auto text-left space-y-5">
            <div className="bg-[#4B5066] text-red-400 rounded-full w-max p-4">
              <HiCode size={40} />
            </div>
            <p className="font-semibold text-xl">Software Development </p>
            <p className="text-gray-300 text-sm">
              Writing Code to fulfill the requirements, following good patterns,
              fandling all the use cases, and improving all of them.
            </p>
          </div>
          <div className="bg-primary w-full p-6 h-auto text-left space-y-5">
            <div className="bg-[#4B5066] text-yellow-300 rounded-full w-max p-4">
              <CgIfDesign size={40} />
            </div>
            <p className="font-semibold text-xl">Graphic Design </p>
            <p className="text-gray-300 text-sm">
              Developing logos, vectors and other designs using a software based
              on requirements.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center my-element">
          {mySkills.map((index) => (
            <div key={index} className="flex space-x-10 items-center w-full">
              <div className="w-5 h-5 bg-primary_blue" />
              <p>{index}</p>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Skills;
