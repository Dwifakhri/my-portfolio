import React, { useState } from "react"
import { Slide } from "react-awesome-reveal"
import { myProjects } from "../../utils/projects"

const Projects = () => {
  const [limit] = useState(3)
  const [currentSlide, setCurrentSlide] = useState(0)

  const totalCard = []
  for (let index = 1; index <= myProjects.length / limit; index++) {
    totalCard.push(index * limit)
  }
  if (myProjects.length % limit) {
    totalCard.push(myProjects.length)
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalCard.length - 1 ? 0 : prev + 1))
  }

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalCard.length - 1 : prev - 1))
  }

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
        <div className="grid grid-cols-12 lg:mx-[5rem]">
          {currentSlide !== 0 && (
            <div className="col-span-1 col-start-1 flex items-center justify-center">
              <img
                onClick={handlePrev}
                src="/icon/arrow-left.svg"
                alt="arrow-left"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 cursor-pointer"
              />
            </div>
          )}
          <div className="col-span-10 col-start-2 relative overflow-hidden">
            <div
              className="flex transition-transform ease-in-out duration-1000"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {totalCard.map((itemx, i) => (
                <div key={i} className="w-full flex-shrink-0">
                  {myProjects.map(
                    (item, index) =>
                      index < itemx &&
                      index >= itemx - limit && (
                        <div key={index} className="mb-3 lg:mb-0">
                          <div className="grid grid-cols-12 lg:items-center">
                            <div
                              className={`col-span-12 lg:col-span-6 mb-4 ${
                                index % 2 !== 0 ? "lg:ml-10" : ""
                              }`}>
                              <img
                                className="h-auto w-auto cover rounded-lg"
                                src={`/ImageProject/${item.img}.png`}
                                alt={item.img}
                              />
                            </div>
                            <div
                              className={`col-span-12 lg:col-span-6 text-left ${
                                index % 2 !== 0 ? "lg:order-first" : "lg:ml-10"
                              }`}>
                              <div>
                                <div className="font-bold text-xl mb-2">
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
                                <a
                                  href={item.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-[12px] text-secondary hover:text-white hover:underline">
                                  See detail
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                  )}
                </div>
              ))}
            </div>
          </div>
          {currentSlide !== totalCard.length - 1 && (
            <div className="col-span-1 col-start-12 flex justify-center items-center">
              <img
                onClick={handleNext}
                src="/icon/arrow-right.svg"
                alt="arrow-left"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 cursor-pointer"
              />
            </div>
          )}
        </div>
      </Slide>
    </section>
  )
}

export default Projects
