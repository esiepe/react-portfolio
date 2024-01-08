import React from "react";
import { FiMapPin, FiMail } from "react-icons/fi";

const Contact = () => {
  const contact = [
    {
      id: 1,
      icon: <FiMail />,
      title: "Have a question?",
      subtitle: "Email me at obwangitowen@gmail.com",
    },
    {
      id: 2,
      icon: <FiMapPin />,
      title: "Current Location",
      subtitle: "Nakuru, Kenya",
    },
  ];

  return (
    <div name="contact" className="h-screen">
      <div className="flex flex-col p-4 justify-center mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-medium inline border-b-4 border-cyan-500 dark:text-gray-300">
            Contact
          </p>
          <p className="py-6 dark:text-gray-50">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map(({ id, icon, title, subtitle }) => (
              <div className="flex flex-col lg:flex-row gap-x-4" key={id}>
                <div
                  className="text-teal-600 rounded-sm w-14 h-14 flex items-start 
                justify-center mt-2 mb-4 lg:mb-0 text-2xl"
                >
                  {icon}
                </div>
                <div className="">
                  <h4 className="text-xl mb-1 dark:text-gray-50">{title}</h4>
                  <p className="mb-1 text-teal-600">{subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <form action="" className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input bg-transparent dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="bg-transparent input dark:text-white"
              />
            </div>
            <textarea
              name="message"
              placeholder="Enter your message"
              className="textarea bg-transparent dark:text-white"
            ></textarea>
            <button className="text-white bg-gradient-to-r from-cyan-500 to-teal-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md button">
              Let&apos;s talk
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default Contact;
