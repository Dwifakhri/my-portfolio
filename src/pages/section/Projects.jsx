import React, { useState } from "react"
import { Slide } from "react-awesome-reveal"

const Projects = () => {
  const [current, setCurrent] = useState(1)
  const [limit] = useState(6)

  const myProjects = [
    {
      name: "Bantul Mapan",
      img: "siekodig",
      link: "https://bantulmapan.kab-bantul.id/",
      desc: "A web application which aims to analyze and present statistical data of Micro, Small, and Medium Enterprises (MSMEs) in Bantul District, Indonesia.",
      stack: ["nuxt js", "bootstrap", "rest"],
    },
    {
      name: "CV Generator",
      img: "cvgen",
      link: "https://cv-builder-jade.vercel.app/",
      desc: "A web application is used to create an ATS resume or curriculum vitae. It assists users in creating professional resumes or CVs tailored to their specific needs",
      stack: ["vue", "bootstrap", "localstorage"],
    },
    {
      name: "Mentutor",
      img: "mentutor",
      link: "https://github.com/Dwifakhri/Mentutor",
      desc: "A web application which user can manage the task or submission for mentor and mentee. It helps to monitor the students report/activity for mentor and easy to use.",
      stack: ["react js", "tailwind", "rest"],
    },
    // {
    //   name: "Nouncer",
    //   img: "nouncer",
    //   link: "https://nouncer-app.vercel.app/",
    //   desc: "A web application for finding the mean of the word like dictionary. Dive into a world of words, definitions, synonyms, antonyms, and more, curated to enhance your understanding and appreciation of language.",
    //   stack: ["react js", "tailwind", "rest"],
    // },
    // {
    //   name: "Movies21",
    //   img: "movies21",
    //   link: "https://movies21-five.vercel.app/",
    //   desc: "A web application that user can see the popular movies in a list. Explore an extensive library of films, discover hidden gems, and stay up-to-date with the latest releases, all from the comfort of your web browser. ",
    //   stack: ["react js", "tailwind", "rest"],
    // },
    // {
    //   name: "Pokemon Gatcha",
    //   img: "poke",
    //   link: "https://pokemon-app-mauve.vercel.app/",
    //   desc: "A web application that user can catch the pokemon as a game. Many pokemons that you can catch and collect into favorites pokemon",
    //   stack: ["react js", "tailwind", "rest"],
    // },
  ]

  const stackImage = (stack) => {
    switch (stack) {
      case "nuxt js":
        return (
          <img
            src="/icon/nuxtjs.svg"
            alt="vue js"
            width={20}
            height={20}
            className="mr-1"
          />
        )

      case "react js":
        return (
          <img
            src="/icon/reactjs.svg"
            alt="react js"
            width={20}
            height={20}
            className="mr-1"
          />
        )

      default:
        return (
          <img
            src={`/icon/${stack}.svg`}
            alt={stack}
            width={20}
            height={20}
            className="mr-1"
          />
        )
    }
  }

  let temp = []
  for (let i = 0; i < 2; i++) {
    temp.push(i)
  }

  const last = current * limit
  const first = last - limit
  const currentPojects = myProjects.slice(first, last)

  return (
    <section
      id="project"
      className="bg-primary h-auto w-full py-20 px-6 lg:px-14 text-white font-light">
      <p className="font-medium text-4xl text-center mb-10">
        Projects and Products
      </p>
      {/* <div className="text-right mb-4 flex justify-end items-end space-x-2"> */}
      {/* <a
          href="https://github.com/Dwifakhri?tab=repositories"
          target="_blank"
          rel="noopener noreferrer">
          <CustomButton label="Show All" id="Show" />
        </a> */}
      {/* </div> */}
      <Slide direction="up" cascade triggerOnce={true}>
        <div className="grid grid-cols-12">
          <div className="col-span-1 col-start-1 flex items-center justify-center">
            <img
              src="/icon/arrow-left.svg"
              alt="arrow-left"
              width={30}
              height={30}
            />
          </div>
          <div className="col-span-10 col-start-2">
            <div className="grid grid-cols-1 text-center">
              {currentPojects.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-3 lg:mb-0">
                  <div className="grid grid-cols-12 lg:items-center">
                    <div
                      className={`col-span-12 lg:col-span-6 mb-4 ${
                        index === 1 || index === 4 ? "lg:ml-10" : ""
                      }`}>
                      <img
                        className="h-auto w-auto cover rounded-lg"
                        src={`/ImageProject/${item.img}.png`}
                        alt={item.img}
                      />
                    </div>
                    <div
                      className={`col-span-12 lg:col-span-6 text-left ${
                        index === 1 || index === 4
                          ? "lg:order-first"
                          : "lg:ml-10"
                      }`}>
                      <div>
                        <div className="font-bold text-lg mb-2">
                          {item.name}
                        </div>
                        <p className="text-secondary text-[14px]">
                          {item.desc}
                        </p>
                        <div className="pb-2">
                          <p className="flex mb-2 text-[13px] mt-2 text-secondary flex-wrap">
                            <strong className="pr-1">Stack : </strong>
                            {item.stack.map((stack, index) => (
                              <span
                                key={index}
                                className="capitalize pr-1 flex items-center">
                                {stackImage(stack)} {stack}
                              </span>
                            ))}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-1 col-start-12 flex justify-center items-center">
            <img
              src="/icon/arrow-right.svg"
              alt="arrow-left"
              width={30}
              height={30}
            />
          </div>
        </div>
      </Slide>
    </section>
  )
}

export default Projects
