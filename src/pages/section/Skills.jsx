import React from "react"
import { loadSvg } from "../../utils/loadSvg"
import { Slide } from "react-awesome-reveal"

const Skills = () => {
  const frameWorks = [
    {
      frame: "nuxt",
      desc: "App dir , SSR and CSR mode, Middleware Auth, API Routing, Loading UI, and Layouts.",
    },
    {
      frame: "react",
      desc: "Single Page Application, Reusable Components, and Tailwind CSS.",
    },
    {
      frame: "sass",
      desc: "Extended CSS, Reusable CSS Variable, and Nested Structure.",
    },
    {
      frame: "figma",
      desc: "Integrate UI/UX, Design Pattern and Supporting Design Tool.",
    },
    {
      frame: "express",
      desc: "Backend Web Server, Micro Services and API development.",
    },
    {
      frame: "docker",
      desc: "Local Deployment, Containerized App with Kubernetes, and Setup Docker File.",
    },
  ]
  const techs = [
    "javascript",
    "vue",
    "laravel",
    "bootstrap",
    "tailwind",
    "git",
    "kubernetes",
  ]
  return (
    <section
      id="skill"
      className="bg-primary h-auto w-full py-20 px-6 lg:px-14 text-white font-light">
      <p className="font-medium text-4xl text-center mb-[2.5rem]">
        Frameworks & Tech
      </p>
      <Slide direction="up" cascade triggerOnce={true}>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 text-center my-8">
          {frameWorks.map((item, i) => (
            <div
              key={i}
              className={`${item.frame} skill border-[#353448] w-full p-6 h-auto text-left border rounded-m`}>
              {loadSvg(item.frame)}
              <p className="font-semibold text-xl capitalize">
                {item.frame === "nuxt" ||
                item.frame === "react" ||
                item.frame === "express"
                  ? `${item.frame}.js`
                  : item.frame}
              </p>
              <p className="text-secondary text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="mt-2 flex space-x-4 bg-darkBlue rounded-lg py-3 px-5 flex-wrap">
            {techs.map((item, i) => (
              <img key={i} src={`/icon/${item}.svg`} alt={item} />
            ))}
          </div>
        </div>
      </Slide>
    </section>
  )
}

export default Skills
