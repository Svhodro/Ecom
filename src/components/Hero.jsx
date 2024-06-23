import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-full bg-slate-700 bg-hero p-0">
      <div className="relative mt-16 bg-gradient-to-r from-purple-600 to-blue-600 h-[300px]  md:h-[600px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
            alt="Image"
            className="object-cover object-center w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-50" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-2xl md:text-4xl  font-bold leading-tight mb-4 px-4 sm:p-0">
            Welcome to Our Awesome Website
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Discover amazing features and services that await you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
