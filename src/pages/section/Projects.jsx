import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { myProjects } from "../../utils/projects";

const Projects = () => {
  const [limit] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const totalCard = [];
  for (let index = 1; index <= myProjects.length / limit; index++) {
    totalCard.push(index * limit);
  }
  if (myProjects.length % limit) {
    totalCard.push(myProjects.length);
  }

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalCard.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalCard.length - 1 : prev - 1));
  };

  const openModal = (project) => {
    setModalProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalProject(null);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  const stackImage = (stack) => {
    const stackIcons = {
      "nuxt js": "/icon/nuxtjs.svg",
      "react js": "/icon/reactjs.svg",
      "next js": "/icon/nextjs.svg",
    };

    return (
      <img
        src={stackIcons[stack] || `/icon/${stack}.svg`}
        alt={stack}
        width={20}
        height={20}
        className="mr-1"
      />
    );
  };

  return (
    <section
      id="project"
      className="bg-primary h-auto w-full py-20 px-6 lg:px-14 text-white font-light">
      <p className="font-medium text-4xl text-center mb-10">
        Projects and Products
      </p>
      <Slide direction="up" cascade triggerOnce={true}>
        <div className="grid grid-cols-12 lg:mx-[5rem]">
          {currentSlide !== 0 && (
            <div className="col-span-1 col-start-1 flex items-center justify-center">
              <img
                onClick={handlePrev}
                src="/icon/arrow-left.svg"
                alt="Previous Slide"
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
                <div key={i} className="w-full flex-shrink-0 px-1">
                  {myProjects.map(
                    (item, index) =>
                      index < itemx &&
                      index >= itemx - limit && (
                        <div key={index} className="mb-10 lg:mb-4">
                          <div className="grid grid-cols-12 lg:grid-cols-11 lg:items-center">
                            <div
                              onClick={() => openModal(item)}
                              className={`block col-span-12 mb-4 lg:col-span-5 ${
                                index % 2 !== 0 ? "lg:col-start-7" : ""
                              } cursor-pointer`}>
                              <img
                                className="cover rounded-lg hover:opacity-60"
                                src={`/ImageProject/${item.img}.jpg`}
                                alt={item.img}
                              />
                            </div>
                            <div
                              className={`col-span-12 text-left lg:col-span-5 ${
                                index % 2 !== 0
                                  ? "lg:order-first "
                                  : "lg:col-start-7"
                              }`}>
                              <div>
                                <div className="flex gap-x-3 items-center mb-2">
                                  <div className="font-bold text-xl">
                                    {item.name}
                                  </div>
                                  <div
                                    className={`text-[10px] text-white mb-0 rounded-md px-2 py-1 font-medium capitalize h-fit ${
                                      item.status === "active"
                                        ? "bg-[#FFAB2E]"
                                        : "bg-[#1FCB69]"
                                    }`}>
                                    {item.status}
                                  </div>
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
                                <div className="lg:mt-2">
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" rounded-full px-5 py-2 border border-white hover:bg-white hover:text-black hover:font-medium text-[12px]">
                                    <button>See detail</button>
                                  </a>
                                </div>
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
                alt="Next Slide"
                width={30}
                height={30}
                className="opacity-70 hover:opacity-100 cursor-pointer"
              />
            </div>
          )}
        </div>
      </Slide>
      {modalOpen && modalProject && (
        <div className="fixed top-50 inset-0 bg-black h-full bg-opacity-70 flex justify-center items-center z-50 top-1/2 transform -translate-y-1/2">
          <div className="bg-dark-50 p-6 rounded-lg lg:max-w-5xl text-black relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-black">
              ✕
            </button>
            <img
              src={`/ImageProject/${modalProject.img}.jpg`}
              alt={modalProject.name}
              className="w-full rounded-lg mb-4"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
