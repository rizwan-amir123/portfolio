import React from "react";
import HeroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="bg-neutral-900 px-5 text-white py-32" id="hero">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl py-5 my-13 lg:text-6xl">
            Hi, <br />I am <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">  Rizwan  </span>
             <br />
            Software Engineer
          </h1>

          <p className="py-5">
            I am proficient in JavaScript, React.js, Next.js and Tailwind CSS
          </p>

          <a
            href="/#projects"
            className="bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-sky-700"
          >
            See Projects
          </a>
          <a
            href="https://drive.google.com/file/d/1Yq9e9o_LGZibYc6pW_iDXvPWMXulUeio/view?usp=share_link"
            className="mx-5 bg-accent border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-sky-700"
          >
            Download Resume
          </a>
        </div>
        <div className="hero-img">
          <img
            src={HeroImg.src}
            alt="coding illustration"
            className="lgw-[80%] ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
