import React from "react";
import AboutImg from "../assets/about.png";

const About = () => {
  return (
    <section className="bg-stone-700 text-white px-10 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            About Me
          </h2>

          <p className="pt-3 pb-2 text-justify">
            Hi, I have been working in the software industry for over two years, but my experience of working with software is longer.
            Software Developer.
          </p>
          <p className="pb-2 text-justify">
            While working in academia at the start of my career I worked in fields of embedded systems, approximate computing, optimization, image processing, control, power electronics and machine learning. Worked with various different microcontrollers, and taught verilog, C, Assembly.
          </p>
          <p className="pb-2 text-justify">My experience in software industry comprises of full-stack development, devops, cloud, micro-service development, technical documentation and writing libraries for an in-house developed programming language.</p>
          <div className="flex flex-row mt-4 space-x-2 ">
          <div className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow 
          dark:bg-gray-800 dark:border-gray-700">

<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Languages</h5>
<div className="flex flex-row py-2">
<span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Javascript</span>
<span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Python</span>
</div>
<div className="flex flex-row py-2">
<span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Golang</span>
<span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">C</span>
</div>
</div>

<div className="block max-w-sm p-3 bg-white border border-gray-200 rounded-lg shadow 
dark:bg-gray-800 dark:border-gray-700">

<h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Frameworks & Softwares</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">
<div className="flex flex-row py-2">
<span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">React</span>
<span className="bg-gray-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Next.js</span>
<span className="bg-red-100 text-red-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">Node</span>
<span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Express</span>
</div>
<div className="flex flex-row py-2">
<span className="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Postgres</span>
<span className="bg-indigo-100 text-indigo-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">MongoDB</span>
<span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300">Bash</span>
<span className="bg-pink-100 text-pink-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Ansible</span>
<span className="bg-lime-100 text-lime-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-lime-900 dark:text-lime-300">Git</span>
</div>
</p>
</div>
</div>
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
