import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen" id="home">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-purple-200 opacity-80"></div>

      <div className="relative flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-20 min-h-screen">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
            {/* Decorative element */}
            <div className="mb-4 sm:mb-6 w-16 sm:w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>

            <p className="text-base sm:text-lg font-medium text-indigo-600">
              Welcome to my portfolio
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              Hi, I'm <span className="">Hasen</span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base md:text-lg text-gray-600">
              A passionate Full Stack Developer crafting beautiful and functional web experiences
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* <a
                href="#projects"
                className="px-6 py-3 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:opacity-90 transition-opacity"
              >
                View My Work
              </a> */}
              <a
                href="https://drive.google.com/file/d/1N_vsk-PvaRsa_AKoMSKFSnrsMJFhn93H/view?usp=drivesdk"
                className="px-6 py-3 text-sm sm:text-base font-semibold text-gray-700 border-2 border-gray-300 rounded-full hover:border-gray-400 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
