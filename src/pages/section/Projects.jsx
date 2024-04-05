import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import poke from "../../assets/ImageProject/poke.svg";
import mentutor from "../../assets/ImageProject/mentutor.svg";
import movies21 from "../../assets/ImageProject/movies21.svg";
import cvgen from "../../assets/ImageProject/cvgen.svg";
import nouncer from "../../assets/ImageProject/nouncer.svg";
import siekodig from "../../assets/ImageProject/siekodig.svg";
import CustomButton from "../../components/CustomButton";
import { SiTailwindcss, SiNuxtdotjs } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaReact, FaVuejs, FaBootstrap, FaDatabase } from "react-icons/fa";

const Projects = () => {
  const [current, setCurrent] = useState(1);
  const [limit] = useState(4);

  const myProjects = [
    {
      name: "Bantul Mapan",
      img: siekodig,
      link: "https://bantulmapan.kab-bantul.id/",
      desc: "A web application which aims to analyze and present statistical data of Micro, Small, and Medium Enterprises (MSMEs) in Bantul District, Indonesia.",
      stack: ["nuxt js", "bootstrap", "rest"],
    },
    {
      name: "CV Generator",
      img: cvgen,
      link: "https://cv-builder-jade.vercel.app/",
      desc: "A web application is used to create an ATS resume or curriculum vitae",
      stack: ["vue js", "bootstrap", "localstorage"],
    },
    {
      name: "Mentutor",
      img: mentutor,
      link: "https://github.com/Dwifakhri/Mentutor",
      desc: "A web application which user can manage the task or submission for mentor and mentee.",
      stack: ["react js", "tailwind", "rest"],
    },
    {
      name: "Nouncer",
      img: nouncer,
      link: "https://github.com/Dwifakhri/nouncer-app",
      desc: "A web application for finding the mean of the word like dictionary.",
      stack: ["react js", "tailwind", "rest"],
    },
    {
      name: "Pokemon Gatcha",
      img: poke,
      link: "https://github.com/Dwifakhri/pokemon-app",
      desc: "A web application that user can catch the pokemon as a game.",
      stack: ["react js", "tailwind", "rest"],
    },
    {
      name: "Movies21",
      img: movies21,
      link: "https://github.com/Dwifakhri/movies21-app",
      desc: "A web application that user can see the popular movies in a list. ",
      stack: ["react js", "tailwind", "rest"],
    },
  ];

  const stackImage = (stack) => {
    switch (stack) {
      case "vue js":
        return <FaVuejs color="#42B883" />;

      case "nuxt js":
        return <SiNuxtdotjs color="#00DC82" />;

      case "bootstrap":
        return <FaBootstrap color="#6F2CF6" />;

      case "rest":
        return <TbApi color="#87BE40" />;

      case "localstorage":
        return <FaDatabase color="#DDDDDD" />;

      case "tailwind":
        return <SiTailwindcss color="#38BDF8" />;

      default:
        return <FaReact color="#149ECA" />;
    }
  };

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
      className=" bg-primary h-auto w-full py-20 px-6 lg:px-14 text-white font-light">
      <p className="font-medium text-5xl text-left mb-10">
        My Recent <span className="text-primary_blue">Projects</span>
      </p>
      {/* <div className="lg:px-6 text-right my-8 flex justify-end items-end space-x-2">
        {temp.map((index) => (
          <div
            onClick={() => {
              setCurrent(index + 1);
              changeActive(index);
            }}
            key={index}
            className={`${
              current === index + 1 ? "active-pro" : ""
            } w-10 h-2 bg-secondary active:bg-primary_blue hover:bg-primary_blue cursor-pointer`}
          />
        ))}

        <a
          href="https://github.com/Dwifakhri?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          <CustomButton label="Show All" id="Show" />
        </a>
      </div> */}
      <Slide direction="up" cascade triggerOnce={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-10">
          {currentPojects.map((item, index) => (
            <div key={index} className="overflow-hidden text-left">
              <img
                className="w-full h-[270px] lg:h-auto cover"
                src={item.img}
                alt="Sunset in the mountains"
              />
              <div className="py-4">
                <div className="font-bold text-lg mb-2">{item.name}</div>
                <p className="text-base text-[13px]">{item.desc}</p>
              </div>
              {/* <div className="pt-2 pb-2">
              <p className="flex mb-2 text-[14px]">
                   <strong className="pr-1">Stack : </strong>
                   {item.stack.map((stack, index) => (
                     <span key={index} className="capitalize pr-1 flex">
                       {stackImage(stack)} {stack}
                     </span>
                   ))}
                 </p>
              </div> */}
            </div>
            // <div
            //   key={index}
            //   className="cursor-pointer group rounded-none bg-secondary relative transition-shadow hover:shadow-xl hover:shadow-black/30 flex flex-col items-center justify-center overflow-hidden">
            //   <div className="h-72">
            //     <img
            //       className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
            //       src={item.img}
            //     />
            //   </div>
            //   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-secondary group-hover:from-black/50 group-hover:via-black/50 group-hover:to-black/70"></div>
            //   <div className="absolute inset-0 flex translate-y-52 flex-col items-center justify-start py-5 px-2 transition-all duration-500 group-hover:translate-y-20">
            //     <h1 className="text-2xl font-semibold text-white">
            //       {item.name}
            //     </h1>
            //     <p className="mb-1 text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            //       {item.desc}
            //     </p>
            //     <p className="flex mb-2 text-[13px]">
            //       <strong className="pr-1">Stack : </strong>
            //       {item.stack.map((stack, index) => (
            //         <span className="capitalize pr-1 flex">
            //           {stackImage(stack)} {stack}
            //         </span>
            //       ))}
            //     </p>
            //     <a
            //       href={item.link}
            //       target="_blank"
            //       rel="noopener noreferrer"
            //       className="w-max rounded-full bg-black py-2 px-5 text-sm capitalize text-white shadow shadow-black/60">
            //       See Detail
            //     </a>
            //   </div>
            // </div>
          ))}
        </div>
      </Slide>
    </section>
  );
};

export default Projects;
