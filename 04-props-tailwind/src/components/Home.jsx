// src/components/Home.js
import React from "react";

const Home = ({title}) => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center p-6 bg-purple-700"
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="bg-purple-900 relative z-10 p-10 rounded-lg shadow-lg max-w-lg text-white">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="mt-4 text-lg">
          Your partner in innovative web development solutions.
        </p>
        <button className="mt-6 px-8 py-3 bg-white text-purple-700 rounded-full hover:bg-gray-200 transition duration-300 shadow-md">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Home;
