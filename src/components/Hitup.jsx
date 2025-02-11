import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

function Hitup() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12 text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900"
        >
          My Approach
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100"
          >
            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-indigo-600 font-bold text-lg">1</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Planning Strategy</h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Outline project goals, create wireframes, and define tech stack.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100"
          >
            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-purple-600 font-bold text-lg">2</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Development & Progress</h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Implement core features, conduct regular code reviews, and track milestones.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="p-6 sm:p-8 bg-white rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl border border-gray-100"
          >
            <div className="w-12 h-12 mb-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center shadow-inner">
              <span className="text-green-600 font-bold text-lg">3</span>
            </div>
            <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Launch & Optimize</h4>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Finalize testing, optimize performance, and prepare for deployment.</p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-32 mx-auto max-w-4xl"
        >
          <div 
            className="p-6 sm:p-8 lg:p-12 text-center bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-3xl border border-gray-100 shadow-xl"
            id="contact"
          >
            <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Let's Connect!
            </h2>
            <p className="mb-8 sm:mb-10 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              I'm always excited to collaborate on new projects and opportunities.
              Feel free to reach out!
            </p>

            <div className="flex flex-col gap-4 mx-auto max-w-md">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:hasengalate.@gmail.com"
                className="flex gap-4 justify-center items-center p-4 text-sm sm:text-base font-medium text-gray-700 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
              >
                <FaEnvelope className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                <span>Email</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://linkedin.com/in/hasen38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 justify-center items-center p-4 text-sm sm:text-base font-medium text-gray-700 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
              >
                <FaLinkedin className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/hasen38"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-4 justify-center items-center p-4 text-sm sm:text-base font-medium text-gray-700 bg-white rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white group"
              >
                <FaGithub className="text-lg sm:text-xl transition-transform duration-300 group-hover:scale-110" />
                <span>GitHub</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hitup;
