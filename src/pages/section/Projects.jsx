import React from "react";
import { Slide } from "react-awesome-reveal";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import poke from "../../assets/ImageProject/poke.svg";
import mentutor from "../../assets/ImageProject/mentutor.svg";
import movies21 from "../../assets/ImageProject/movies21.svg";
import porto from "../../assets/ImageProject/porto.svg";
import CustomButton from "../../components/CustomButton";

const Projects = () => {
  const myProjects = [
    {
      name: "Mentutor",
      img: mentutor,
      link: "https://github.com/Dwifakhri/Mentutor",
    },
    {
      name: "Movies21",
      img: movies21,
      link: "https://github.com/Dwifakhri/movies21-app",
    },
    {
      name: "Pokemon",
      img: poke,
      link: "https://github.com/Dwifakhri/pokemon-app",
    },
    {
      name: "Myportofolio",
      img: porto,
      link: "https://github.com/Dwifakhri/my-portfolio",
    },
  ];
  return (
    <section
      id="project"
      className=" bg-primary h-auto w-full py-20 px-6 lg:px-14 text-white font-light"
    >
      <p className="font-medium text-5xl text-left">
        My Recent <span className="text-primary_blue">Projects</span>
      </p>
      <div className="lg:px-6 text-right my-12">
        <a
          href="https://github.com/Dwifakhri?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CustomButton label="Show All" id="Show" />
        </a>
      </div>
      <Slide direction="up" cascade triggerOnce={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center gap-x-10 gap-y-10 ">
          {myProjects.map((item, index) => (
            <div
              key={index}
              className="w-full h-[20rem] lg:w-64 lg:h-80 rounded-none bg-secondary"
            >
              <div className="">
                <img
                  className="h-56 w-full object-cover object-center"
                  src={item.img}
                />
              </div>
              <div className="h-20 p-4 space-y-2">
                <h2 className="card-title">{item.name}-App</h2>
                <div className="card-actions flex justify-end">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <BsArrowUpRightCircleFill size={25} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Projects;
