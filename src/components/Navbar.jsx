import React, { useEffect, useState } from "react"
import { HashLink as Link } from "react-router-hash-link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [background, setBackground] = useState(false)

  var pos = window.scrollY
  window.addEventListener("scroll", function name() {
    if (pos > window.scrollY && window.scrollY > 64) {
      setBackground(true)
    } else {
      setBackground(false)
    }
    pos = window.scrollY
  })

  useEffect(() => {
    activeMenu()
  })

  const activeMenu = () => {
    const list = document.querySelectorAll("li")
    const section = document.querySelectorAll("section")
    let len = section.length
    while (--len && window.scrollY + 97 < section[len]?.offsetTop) {}
    list?.forEach((item) => item?.classList.remove("active"))
    list[len]?.classList.add("active")
  }
  activeMenu()
  window.addEventListener("scroll", activeMenu)

  return (
    <div
      id="nav"
      className={`${
        background
          ? "bg-gray-800 bg-opacity-30 backdrop-blur-md transition-transform duration-500 easy-in-out top-[-32px] fixed translate-y-[32px]"
          : "absolute"
      } w-full px-0 lg:py-4 lg:px-20 flex flex-col lg:flex-row justify-between z-10`}>
      <div className="flex justify-between items-center ">
        <div className=" py-3 px-6 lg:p-0 ">
          <Link smooth to="#home">
            <h1 className="text-2xl font-bold">
              <span className="text-white">dwifakhri</span>
            </h1>
          </Link>
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="text-white lg:hidden p-2 px-6 lg:p-0 cursor-pointer">
          {!isOpen ? (
            <img src="/icon/menu.svg" alt="menu" height={20} width={20} />
          ) : (
            <img src="/icon/close.svg" alt="close" height={20} width={20} />
          )}
        </div>
      </div>
      <div
        className={`${
          !isOpen ? "hidden transition-all duration-500" : ""
        } lg:flex flex-col space-y-2 px-6 p-2 lg:p-0 lg:flex-row lg:space-y-0 lg:items-center lg:space-x-10 text-white text-md font-light`}>
        <li>
          <Link smooth to="#home">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="#skill">
            Skill
          </Link>
        </li>
        <li>
          <Link smooth to="#project">
            Project
          </Link>
        </li>
        <li>
          <Link smooth to="#contact">
            Contact
          </Link>
        </li>
      </div>
    </div>
  )
}

export default Navbar
