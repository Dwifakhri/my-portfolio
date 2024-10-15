import React from "react"

const Home = () => {
  return (
    <section
      id="home"
      className="top-0 h-auto w-full py-20 px-6 flex flex-col justify-center text-center items-center text-white">
      <img
        src="/ImageProject/myphoto.jpg"
        alt="myphoto"
        className="rounded-full mb-2"
        width={80}
        height={80}
      />
      <h3 className="font-semibold mb-4">Hi, I'm Fakhri 👋</h3>
      <h2 className="font-medium text-4xl">Frontend Developer.</h2>
      <h3 className="mt-2 font-normal">
        Responsible for designing the responsive <br /> and interactive web
        application.
      </h3>
      <div className="flex mt-[5rem] items-center space-x-3 sm:flex-row flex-col">
        <p className="text-secondary text-sm">
          2+ years experience with Nuxt and Vue js
        </p>
        <a
          href="#"
          className="border-white rounded-md border px-3 py-2 text-sm hover:bg-white hover:text-black mt-2 md:mt-0">
          Get in touch
        </a>
        {/* </div> */}
      </div>
    </section>
  )
}

export default Home
