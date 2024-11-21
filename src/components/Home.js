import React from 'react';

const Home = () => {
  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-500 animate-pulse">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold tracking-wide animate__fadeIn">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl font-medium animate__zoomIn animate__delay-1s">
          Explore my work and achievements in web development and design.
        </p>
      </div>
    </section>
  );
};

export default Home;
