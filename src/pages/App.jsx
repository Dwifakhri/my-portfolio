import React from "react";
import Home from "../pages/section/Home";
import Skills from "../pages/section/Skills";
import Projects from "../pages/section/Projects";
import Contact from "../pages/section/Contact";
import Navbar from "../components/Navbar";
// import { useTitle } from "../utils/useTitle";

const App = () => {
  // useTitle("Dwifakhri - Portfolio");
  return (
    <>
      <Navbar />
      <div className="w-full overflow-auto">
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
