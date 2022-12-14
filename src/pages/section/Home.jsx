import React from "react";
import photo from "../../assets/photo.svg";
import CustomButton from "../../components/CustomButton";

const Home = () => {
  return (
    <section id="home" className="top-0 bg-primary h-auto w-full py-20 px-6 ">
      <div className="lg:flex lg:flex-row w-full lg:h-full lg:justify-center items-center space-y-10 lg:space-x-10 text-white">
        <div className="lg:w-1/2 flex lg:justify-center items-center translate-y-6">
          <img src={photo} />
        </div>

        <div className="lg:w-1/2 flex flex-col justify-center space-y-10 font-light text-md">
          <div className="flex flex-col space-y-1 translate-y-6">
            <p className="font-medium text-5xl text-primary_blue">
              Frontend Developer.
            </p>
            <h1 className="font-medium text-5xl pb-8">
              Turn your design into a cool website
            </h1>
            <p className="lg:w-3/4 text-gray-300">
              Responsible for the development and management of Web design and
              interface. Also a graphic designer and video editor which had
              fluently in visual and principal design.
            </p>
          </div>
          <div className="flex flex-row space-x-5 items-center">
            <p className=" text-gray-300 font-regular w-1/2 md:w-1/4">
              Lets get closer to know about me
            </p>
            <a
              href="https://docs.google.com/document/d/1HlArPZAp2vw6_IKbBNWyo4yIFO8aneKk/edit?usp=sharing&ouid=113420268688163869452&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CustomButton label="View CV" id="View" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
