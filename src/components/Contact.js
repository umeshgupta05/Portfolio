import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 container mx-auto text-center fade-in">
      <h2 className="text-4xl font-bold mb-6 text-white">Contact Me</h2>
      <form className="max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 bg-gray-800 text-white rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 bg-gray-800 text-white rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 mb-4 bg-gray-800 text-white rounded"></textarea>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 w-full p-3 rounded transform transition-transform duration-300 hover:scale-105">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
