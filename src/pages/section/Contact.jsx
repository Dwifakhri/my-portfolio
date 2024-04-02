import React, { useRef } from "react";
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GrMapLocation, GrInstagram } from "react-icons/gr";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gygnqb9",
        "template_fvzrifs",
        form.current,
        "R95Hf_Bfguy6qS-K7"
      )
      .then((result) => {
        alert("Message Sent");
        e.target.reset();
      });
  };
  return (
    <>
      <section
        id="contact"
        className=" bg-secondary h-auto w-full py-20 px-6 lg:px-14 text-white">
        <p className="font-medium text-5xl text-left mb-8">
          <span className="text-primary_blue">Contact</span> Me
        </p>
        <div className="lg:flex lg:flex-row w-full lg:h-full lg:justify-center space-y-20 lg:space-y-0 lg:space-x-10 text-white font-light break-words">
          <div className="lg:w-1/2 lg:pr-10 ">
            <p className="mb-10">
              You may feel free to send me a message if you have questions that
              I might be able to answer about the projects or anything (email
              preferred).
            </p>
            <div className="space-y-10 text-gray-300">
              <div className="flex space-x-5 items-center">
                <div className="bg-primary_blue w-max p-3">
                  <AiOutlineMail color="black" size={35} />
                </div>
                <a>fakhri.chusaini01@gmail.com </a>
              </div>
              <div className="flex space-x-5 items-center">
                <div className="bg-primary_blue w-max p-3">
                  <GrMapLocation size={35} />
                </div>
                <a>Gresik, East Java, Indonesia </a>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-1/2 lg:pl-10 space-y-4 font-light text-md">
            <div className="flex space-x-4">
              <CustomInput
                type="text"
                placeholder="Name"
                id="Name"
                name="name"
              />
              <CustomInput
                type="email"
                placeholder="Email"
                id="Email"
                name="email"
              />
            </div>
            <CustomInput
              type="text"
              placeholder="Subject"
              id="Subject"
              name="subject"
            />
            <textarea
              required
              type="text"
              name="message"
              id="Message"
              placeholder="Message"
              rows="1"
              className="w-full h-40 p-3 focus:outline-none bg-primary focus:border-gray-500 focus:border"
            />

            <div className="text-right">
              <CustomButton label="Submit" id="Submit" />
            </div>
          </form>
        </div>
      </section>
      <div className="w-full h-16 bg-[#4c5061] p-4 flex flex-row justify-center items-center">
        <div className="flex flex-row justify-center items-center space-x-3">
          <div className="bg-white text-primary_grey rounded-full w-max p-2">
            <a
              href="https://www.linkedin.com/in/dwi-fakhri-chusaini-5a114518a/"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillLinkedin size={22} color="#0A66C2" />
            </a>
          </div>
          <div className="bg-white text-black rounded-full w-max p-2">
            <a
              href="https://github.com/Dwifakhri"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillGithub size={22} />
            </a>
          </div>
          <div className="bg-white text-[#F25A6C] rounded-full w-max p-2">
            <a
              href="https://www.instagram.com/dwifakhri01/"
              target="_blank"
              rel="noopener noreferrer">
              <GrInstagram size={22} />
            </a>
          </div>
          <div className="w-0 border-2 h-10 "></div>
          <p className="text-white text-[0.7rem] text-light text-left">
            <span>&copy;</span> 2022 All Rights Reserved By,{" "}
            <span className="font-semibold">
              {" "}
              <br></br> Dwi Fakhri C
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contact;
