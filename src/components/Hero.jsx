import React from "react";
import { motion } from "framer-motion"; // You'll need to install framer-motion

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-white to-purple-200 opacity-80"></div>

      <div className="flex relative flex-col justify-center items-center px-4 py-20 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-6xl"
        >
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Decorative element */}
            <div className="mb-6 w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg font-medium text-indigo-600"
            >
              Welcome to my portfolio
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="max-w-3xl text-5xl font-bold leading-tight text-gray-800"
            >
              Crafting Innovative Solutions{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                with Elegant Code
              </span>{" "}
              🚀
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="max-w-2xl text-xl text-gray-600"
            >
              Hi, I'm Hasen, a Full Stack Developer based in Asella, Ethiopia
            </motion.p>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex mb-8 space-x-6"
            >
             
            </motion.div>

            {/* Download CV Button */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/path-to-your-cv.pdf"
              download
              className="px-8 py-4 font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:opacity-90"
            >
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
