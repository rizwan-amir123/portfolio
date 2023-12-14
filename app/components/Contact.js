import React from "react";

const Contact = () => {
  return (
    <section className="bg-pink-800 px-5 py-32 text-lg" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2 ">
          Contact Me
        </h2>
        <div className="mt-5 pt-5">
        <p>
          I am currently open for a software developer role. 
          <br/>If you
          want to discuss about that, feel free to email me at
        </p>
        <p className="py-2">
          <span className="font-bold">rizwan.amir121@gmail.com</span> 
        </p>
        <div className="flex py-5 justify-center">
          <a
            href="/"
            className="p-3 bg-gray-900 rounded-full mr-2 text-accent hover:animate-text hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"/>
  </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/rizwan-amir-40505520b/"
            className="p-3 bg-gray-900 rounded-full inline-block text-accent hover:text-white hover:animate-text hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          >
          <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
    <path fillRule="evenodd" d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" clipRule="evenodd"/>
    <path d="M3 5.012H0V15h3V5.012Z"/>
  </svg>
          </a>
         </div>
         </div>
      </div>

      
    </section>
  );
};

export default Contact;
