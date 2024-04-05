import React from "react";
import Home from "../pages/section/Home";
import Skills from "../pages/section/Skills";
import Projects from "../pages/section/Projects";
import Contact from "../pages/section/Contact";
import Navbar from "../components/Navbar";

const App = () => {
  return (
    <>
      <div className="w-full overflow-auto">
      <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
