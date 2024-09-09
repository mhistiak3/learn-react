// src/components/Services.js
import React from "react";
import { Card } from "./Card";

const Services = () => {
  return (
    <section
      id="services"
      className="bg-purple-700 py-20 px-6 text-white text-center"
    >
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Web Development", "App Development", "Digital Marketing"].map(
          (service, idx) => (
            <Card service={service} idx={idx}/>
          )
        )}
      </div>
    </section>
  );
};

export default Services;
