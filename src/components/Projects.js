import React from 'react';

const Projects = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-semibold mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
            <p className="text-sm mb-4">This is an example of a web development project.</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-pink-700">
              View Project
            </button>
          </div>
          {/* Card 2 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
            <p className="text-sm mb-4">Description of another project with interactive features.</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-pink-700">
              View Project
            </button>
          </div>
          {/* Card 3 */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300 ease-in-out">
            <h3 className="text-2xl font-semibold mb-4">Project 3</h3>
            <p className="text-sm mb-4">A unique project focusing on user interface design.</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-pink-700">
              View Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
