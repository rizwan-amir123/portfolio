import React from "react";
import vidmonster_img from "../assets/vidmonster.png";
import furnix_img from "../assets/furnix.png";
import ts_img from "../assets/ts.png";

const Projects = () => {
  const img_array = [furnix_img, vidmonster_img, ts_img];
  const projects = [
    {
      img: img_array[0],
      title: "Furnix",
      desc: " An e-commerce website for buying various types of furniture online. ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
      stack: ["Next.js", "Postgres", "Tailwind"],
    },
    {
      img: img_array[1],
      title: "VidMonster",
      desc: "A streaming website for watching videos of your favorite content creators.",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
      stack: ["Next.js", "Tailwind"],
    },
    {
      img: img_array[2],
      title: "Task Supervisor",
      desc: "A web app for managing tasks assigned to various people in an organization.",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
      stack: ["Next.js", "Node", "Express", "MongoDB", "Tailwind"],
    },
  ];

  return (
    <section className="bg-indigo-900 text-white px-10 py-32" id="projects">
      <div className="container mx-auto items-center md:justify-between">
        <div className="mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="pb-5 text-lg">
            These are some of my web app projects. Check them out.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              

<div className="max-w-sm rounded-lg shadow-lg bg-zinc-700 hover:bg-zinc-900">
    <a href="#">
        <img className="rounded-t-lg" src={img_array[i].src} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{project.title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-300">{project.desc}</p>
        <div className="flex flex-row mb-2 py-3 overflow-auto">
          {project.stack.includes("Tailwind") ? <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Tailwind</span> :<p>false</p>}
          {project.stack.includes("Next.js") ? <span className="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Next.js</span>:null}
          {project.stack.includes("Postgres") ? <span className="bg-pink-100 text-pink-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-pink-900 dark:text-pink-300">Postgres</span>:null}
          {project.stack.includes("Node") ? <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Node</span>:null}
          {project.stack.includes("Express") ? <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Express</span>:null}
          {project.stack.includes("MongoDB") ? <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">MongoDB</span>:null}
        </div>
        <a
            href="https://drive.google.com/file/d/1Yq9e9o_LGZibYc6pW_iDXvPWMXulUeio/view?usp=share_link"
            className="mr-2 bg-accent border-2 border-[#7477FF] text-white px-5 py-2 
            hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-text"
          >
            Code
          </a>
          <a
            href="https://drive.google.com/file/d/1Yq9e9o_LGZibYc6pW_iDXvPWMXulUeio/view?usp=share_link"
            className="bg-accent border-2 border-[#7477FF] text-white px-5 py-2 
            hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-text"
          >
            Live
          </a>
    </div>
</div>

            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
