import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import poke from "../../assets/ImageProject/poke.svg";
import mentutor from "../../assets/ImageProject/mentutor.svg";
import movies21 from "../../assets/ImageProject/movies21.svg";
import social from "../../assets/ImageProject/social.svg";
import circlenity from "../../assets/ImageProject/circlenity.svg";
import nouncer from "../../assets/ImageProject/nouncer.svg";
import CustomButton from "../../components/CustomButton";

const Projects = () => {
  const [current, setCurrent] = useState(1);
  const [limit] = useState(4);

  const myProjects = [
    {
      name: "Circlenity",
      img: circlenity,
      link: "https://github.com/Dwifakhri/circlenity-app",
      desc: "A web application which user can create a new friend or post in their circle or community.",
    },
    {
      name: "Mentutor",
      img: mentutor,
      link: "https://github.com/Dwifakhri/Mentutor",
      desc: "A web application which user can manage the task or submission for mentor and mentee.",
    },
    {
      name: "Sosialta",
      img: social,
      link: "https://github.com/Dwifakhri/sosialta-media",
      desc: "A web application which user can create and comment a post to each others.",
    },
    {
      name: "Nouncer",
      img: nouncer,
      link: "https://github.com/Dwifakhri/nouncer-app",
      desc: "A web application for finding the mean of the word like dictionary.",
    },
    {
      name: "Pokemon",
      img: poke,
      link: "https://github.com/Dwifakhri/pokemon-app",
      desc: "A web application that user can catch the pokemon as a game.",
    },
    {
      name: "Movies21",
      img: movies21,
      link: "https://github.com/Dwifakhri/movies21-app",
      desc: "A web application that user can see the popular movies in a list. ",
    },
  ];

  let temp = [];
  for (let i = 0; i < 2; i++) {
    temp.push(i);
  }

  const last = current * limit;
  const first = last - limit;
  const currentPojects = myProjects.slice(first, last);

  return (
    <section
      id="project"
      className=" bg-primary h-auto w-full py-20 px-6 lg:px-14 text-white font-light"
    >
      <p className="font-medium text-5xl text-left">
        My Recent <span className="text-primary_blue">Projects</span>
      </p>
      <div className="lg:px-6 text-right my-8 flex justify-end items-end space-x-2">
        {temp.map((index) => (
          <div
            onClick={() => setCurrent(index + 1)}
            key={index}
            className="w-10 h-2 bg-secondary active:bg-primary_blue hover:bg-primary_blue cursor-pointer "
          />
        ))}

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
          {currentPojects.map((item, index) => (
            <div
              key={index}
              className="group rounded-none bg-secondary relative transition-shadow hover:shadow-xl hover:shadow-black/30 flex flex-col items-center justify-center overflow-hidden"
            >
              <div className="h-72">
                <img
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                  src={item.img}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/50"></div>
              <div className="absolute inset-0 flex translate-y-52 flex-col items-center justify-start py-5 px-2 transition-all duration-500 group-hover:translate-y-20">
                <h1 className="text-2xl font-semibold text-white">
                  {item.name}
                </h1>
                <p className="mb-2 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.desc}
                </p>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-max rounded-full bg-black py-2 px-5 text-sm capitalize text-white shadow shadow-black/60"
                >
                  See More
                </a>
              </div>
            </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Projects;
