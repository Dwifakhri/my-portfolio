import React, { useRef } from "react"

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary h-auto w-full py-20 px-6 lg:px-14 text-white">
      <p className="font-medium text-4xl text-center mb-[5rem]">Contact Me</p>
      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 font-light flex space-x-3 space-y-2 justify-center items-center font-sm">
          <img src="/icon/email.svg" alt="email" />
          <a>fakhri.chusaini01@gmail.com </a>
        </div>
        <div className="col-span-12 md:col-span-6 font-light flex space-x-3 space-y-2 justify-center items-center font-sm">
          <img src="/icon/location.svg" alt="location" />
          <a>Gresik, East Java, Indonesia </a>
        </div>
      </div>

      <div className="col-span-12 flex space-x-1 justify-center mt-7">
        <a
          href="https://www.linkedin.com/in/dwi-fakhri-chusaini-5a114518a/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-[#30324C] w-[50px] h-[50px] flex justify-center items-center hover:bg-[#474A6A]">
          <img src="/icon/linkedin.svg" alt="linkedin" />
        </a>
        <a
          href="https://github.com/Dwifakhri"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-[#30324C] w-[50px] h-[50px] flex justify-center items-center hover:bg-[#474A6A]">
          <img src="/icon/github.svg" alt="github" />
        </a>
        <a
          href="https://www.instagram.com/dwifakhri01/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-3 bg-[#30324C] w-[50px] h-[50px] flex justify-center items-center hover:bg-[#474A6A]">
          <img src="/icon/instagram.svg" alt="instagram" />
        </a>
      </div>
      <p className="text-white text-[0.7rem] text-light text-center mt-2 font-light">
        <span>&copy;</span> 2024 All Rights Reserved By,{" "}
        <span className="font-semibold">Dwi Fakhri C</span>
      </p>
    </section>
  )
}

export default Contact
