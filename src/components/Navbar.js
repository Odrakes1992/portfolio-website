import React from "react";
import { ArrowRightIcon } from "@heroicons/react/solid";
import { FaGithubSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            Osneil Drakes
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="https://github.com/Odrakes1992/Odrakes1992"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Github
          <FaGithubSquare className="w-4 h-4 ml-1" />
        </a>
        <a
          href="https://www.linkedin.com/in/osneil-drakes-cta-07909068/"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Linkedin
          <AiFillLinkedin className="w-4 h-4 ml-1" />
        </a>
        <a
          href="mailto:osneil-drakes@hotmail.com"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact
          <MdOutlineMarkEmailUnread className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
