import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Hitup() {
  return (
    <>
    <div className="container mx-auto px-4 py-12 md:py-24 items-start">
      <h2 className="mb-12 text-4xl font-bold text-center">
        My Approach
      </h2>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100"
        >

          <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-inner">
            <span className="text-indigo-600 font-bold text-lg">1</span>
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Planning Strategy</h4>
          <p className="text-gray-600 leading-relaxed">Outline project goals, create wireframes, and define tech stack.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100"
        >
          <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-inner">
            <span className="text-purple-600 font-bold text-lg">2</span>
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Development & Progress</h4>
          <p className="text-gray-600 leading-relaxed">Implement core features, conduct regular code reviews, and track milestones.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="p-6 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100"
        >
          <div className="w-12 h-12 mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-inner">
            <span className="text-green-600 font-bold text-lg">3</span>
          </div>
          <h4 className="text-xl font-semibold text-gray-800 mb-2">Launch & Optimize</h4>
          <p className="text-gray-600 leading-relaxed">Finalize testing, optimize performance, and prepare for deployment.</p>
        </motion.div>
      </motion.div>
      </div>


      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="p-8 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border border-gray-100 shadow-xl md:p-10"
      >
        <h2 className="mb-6 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 md:text-5xl">
          Let's Connect!
        </h2>
        <p className="mb-10 text-lg text-gray-600 leading-relaxed">
          I'm always excited to collaborate on new projects and opportunities.
          Feel free to reach out!
        </p>

        <div className="flex flex-col gap-4 mt-8 pt-8 mx-auto max-w-md">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="mailto:hasengalate.@gmail.com"
            className="flex gap-4 justify-center items-center p-4 font-medium text-gray-700 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
          >
            <FaEnvelope className="text-xl transition-transform duration-300 group-hover:scale-110" />
            <span>Email</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://linkedin.com/in/hasen38"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 justify-center items-center p-4 font-medium text-gray-700 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
          >
            <FaLinkedin className="text-xl transition-transform duration-300 group-hover:scale-110" />
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/hasen38"
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 justify-center items-center p-4 font-medium text-gray-700 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
          >
            <FaGithub className="text-xl transition-transform duration-300 group-hover:scale-110" />
            <span>GitHub</span>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}

export default Hitup;
