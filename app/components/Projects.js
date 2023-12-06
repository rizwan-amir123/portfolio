import React from "react";
import css_img from "../assets/proj1.png";

const Projects = () => {
  const projects = [
    {
      img: css_img,
      title: "devlog",
      desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
      live: "https://devlogg.onrender.com/",
      code: "https://github.com/Coderamrin/devlog",
    },
    {
      img: css_img,
      title: "uilogs",
      desc: "Free website template directory for SaaS and Degital Agency. Built with Bootstrap, JQuery and JavaScript",
      live: "https://uilogs.xyz/",
      code: "https://github.com/Coderamrin/html-templates",
    },
    {
      img: css_img,
      title: "css projects",
      desc: "Frontend Mentor challange directory, solved with vanilla CSS",
      live: "https://build-10-css-projects.netlify.app/",
      code: "https://github.com/Coderamrin/build-10-css-projects",
    },
  ];

  return (
    <section className="bg-indigo-900 text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>
          <p className="pb-5">
            These are some of my software projects. I have built these with MERN. Check them out.
          </p>
        </div>
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => {
          return (
            <div className="relative" key={i}>
              <img src={project.img.src} alt={project.title}/>
              <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] 
              h-[90%] opacity-0 duration-500 justify-center flex-col 
              hover:opacity-100 bg-purple-400">
                <p className="py-5 text-center font-bold px-2 text-white">
                  {project.desc}
                </p>
                <div className="mx-auto">
                  <a
                    href={project.live}
                    className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                  >
                    Live
                  </a>
                  <a
                    href={project.code}
                    className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                  >
                    Code
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
