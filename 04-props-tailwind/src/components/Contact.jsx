// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-purple-700 py-20 px-6 text-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-xl mx-auto">
        <h2 className="text-4xl font-bold text-purple-700 mb-6">Contact Us</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          />
          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
          ></textarea>
          <button
            type="submit"
            className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
