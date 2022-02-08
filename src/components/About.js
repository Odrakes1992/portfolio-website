import React from "react";
import picture from "../Images/picture-film.jpg";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Osneil.
            <br className="hidden lg:inline-block" />I was a Historian, then I
            became a Tax Advisor and now I am a Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I actually really enjoyed my history degree and to this day it still
            is a surprise that I am not in academia, but I was lured by a career
            in professional services. The books were a lot bigger this time but
            the processes still the same. Whilst the topics were very different,
            it was another opportunity to learn new stuff. And that's what I've
            discovered, I really like to learn new stuff and I put that down to
            the historian in me. My degree started me down a path of learning
            and here I am as a software developer, I also like to take photos -
            I recently picked up a Pentax point and shoot and have been enjoying
            35mm ever since.
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:osneil-drakes@hotmail.com"
              target="_blank"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" src={picture} />
        </div>
      </div>
    </section>
  );
}

export default About;
