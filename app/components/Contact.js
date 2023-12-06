import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";

const Contact = () => {
  return (
    <section className="bg-pink-800 px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a software developer role. 
          <br/>If you
          want to discuss about that feel free to email me at
        </p>
        <p className="py-2">
          <span className="font-bold">rizwan.amir121@gmail.com</span> 
        </p>
        <div className="flex py-5 justify-center">
          <a
            href="https://twitter.com/CoderAmrin"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            <AiOutlineTwitter size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/rizwan-amir-40505520b/"
            className="pr-4 inline-block text-accent hover:text-white"
          >
            <AiOutlineLinkedin size={40} />{" "}
          </a>
         </div>
      </div>

      
    </section>
  );
};

export default Contact;
