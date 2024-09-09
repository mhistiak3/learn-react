// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-purple-700 py-20 px-6 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <img
          src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="About Us"
          className="w-full md:w-1/2 rounded-lg shadow-md mb-8 md:mb-0"
        />
        <div className="md:ml-10">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="mt-4 leading-relaxed">
            At iA Coder, we specialize in creating dynamic, responsive, and
            user-friendly websites. Our mission is to help businesses establish
            a powerful online presence and deliver exceptional digital
            experiences.
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-purple-700 rounded-full hover:bg-gray-200 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
