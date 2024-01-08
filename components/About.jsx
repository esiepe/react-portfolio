import React from "react";
import htmlIcon from "@/public/html.png";
import cssIcon from "@/public/css.png";
import jsIcon from "@/public/js.png";
import pythonIcon from "@/public/python.png";
import reactIcon from "@/public/react.png";
import nodeIcon from "@/public/node.png";
import mongoIcon from "@/public/mongo.png";
import tailwindIcon from "@/public/tailwind.png";
import Image from "next/image";
import heroImage from "@/public/esiepe.jpg";

const About = () => {
  const skills = [
    {
      id: 1,
      src: htmlIcon,
    },
    {
      id: 2,
      src: cssIcon,
    },
    {
      id: 3,
      src: jsIcon,
    },
    {
      id: 4,
      src: pythonIcon,
    },
    {
      id: 5,
      src: reactIcon,
    },
    {
      id: 6,
      src: nodeIcon,
    },
    {
      id: 7,
      src: mongoIcon,
    },
    {
      id: 8,
      src: tailwindIcon,
    },
  ];
  return (
    <div name="about" className="h-screen">
      <div className="max-w-screen-lg p-4 mx-auto justify-center flex flex-col w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-medium inline border-b-4 border-cyan-500 dark:text-gray-300">
            About
          </p>
          <div className="grid sm:grid-cols-2 gap-5 px-6 sm:px-0">
            <div className="mx-auto sm:mx-0 w-60 h-60 mt-10 md:w-80 md:h-80">
              <Image src={heroImage} alt="hero" className="rounded-lg" />
            </div>
            <div className="flex flex-col">
              <p className="text-md text-justify py-6 leading-7 text-gray-800 md:text-xl md:py-3 dark:text-gray-50 mt-10 sm:mt-20">
                I am a Computer Science graduate from Kabarak University who
                loves turning complex problems into sleek web apps. With three
                years of hands-on experience, I&apos;m all about JavaScript,
                C/C++ and Python and I also tinker with MongoDB, ReactJS and
                NodeJS. Plus, I get my hands dirty with IoT and machine
                learning.
              </p>
              <div className="flex flex-row mx-auto">
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded-md mt-auto sm:px-4 sm:py-2 text-md mx-5 sm:mx-10 button"
                  href="#"
                >
                  Resume
                </a>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-1 rounded-md mt-auto sm:px-4 sm:py-2 text-md mx-5 sm:mx-10 button"
                  href="#"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6 sm:px-0">
          <div className="grid grid-cols-8 gap-3 md:grid-flow-row">
            {skills.map(({ id, src }) => (
              <div
                key={id}
                className=" h-5 w-5 md:h-12 md:w-12 flex items-center justify-center"
              >
                <Image src={src} alt="icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
