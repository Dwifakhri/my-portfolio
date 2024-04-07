import React, { useState } from "react";
import photo from "../../assets/photo.png";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [loading, setloading] = useState(false);
  return (
    <section id="home" className="top-0 bg-primary h-auto w-full py-20 px-6">
      <div className="lg:flex lg:flex-row w-full lg:h-full lg:justify-center items-center space-y-10 lg:space-x-10 text-white">
        <div className="lg:w-1/2 flex lg:justify-center items-center translate-y-6">
          <div className="relative">
            <img src={photo} />
            <div className="absolute top-[80%] left-[26px] flex">
              <div className="slider-container">
                <div className="slider-text">
                  <div className="slider-item">
                    <p className="w-[260px]">1.5+ Years Experience</p>
                  </div>
                  <div className="slider-item">
                    <p className="w-[260px]">Creative Web Developer</p>
                  </div>
                  <div className="slider-item">
                    <p className="w-[260px]">10+ Total Projects</p>
                  </div>
                  <div className="slider-item">
                    <p className="w-[260px]">Focus on The Goals</p>
                  </div>
                  <div className="slider-item">
                    <p className="w-[260px]">1.5+ Years Experience</p>
                  </div>
                </div>
              </div>
              <a
                href="https://docs.google.com/document/d/1HlArPZAp2vw6_IKbBNWyo4yIFO8aneKk/edit?usp=sharing&ouid=113420268688163869452&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer">
                <div className="btn bg-primary rounded-none">
                  <FaArrowRight />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center space-y-10 font-light text-md">
          <div className="flex flex-col space-y-3 translate-y-6">
            <p className="font-medium text-5xl text-primary_blue">
              Frontend Developer.
            </p>
            <h1 className="font-medium text-4xl pb-4">
              Turn your design into a cool website
            </h1>
            <p className="lg:w-3/4 text-gray-300">
              Responsible for designing the responsive and interactive web
              application. <br />
              Also applying the principal of frontend standardarization in
              development, optimization, and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
