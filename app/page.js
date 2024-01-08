'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";
import Portfolio from "@/components/Portfolio";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white px-10 md:px-10 lg:px-20 text-black dark:bg-gray-900">
        <div className="flex flex-col px-6 sm:px-0">
          <NavBar />
          <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:text-white mt-1"
          />
        </div>
        <HomePage />
        <About />
        <Education />
        <Portfolio />
        <Contact /> 
      </div>
      <Footer />
    </div>
  );
}
