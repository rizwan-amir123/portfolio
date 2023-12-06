import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="bg-stone-700 text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pb-5">
            Hi, My name Is Rizwan. I am a
            Software Developer.
          </p>
          <p className="pb-5">
            I am proficient in skills like React.js, Tailwind CSS, and many more.
          </p>
          <p>In backend I know Node.js, Express.js, MongoDB, and Mongoose</p>
        </div>

        <div className="about-img">
          <img
            src={AboutImg.src}
            alt="coding illustration"
            className="lgw-[80%] md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;