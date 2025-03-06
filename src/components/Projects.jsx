import React from "react";
import Travel from "../assets/Travel.png";
import Pharma from "../assets/pharma1.png";
import Blog3 from "../assets/blog3.png";
import Expense1 from "../assets/expense1.png";

import { FaGithub, FaReact, FaLaravel, FaStripe } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiFilament, SiLivewire } from "react-icons/si";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Ethio-travel",
      image: Travel,
      description:
        "A  Travel platform with real-time update, payment processing, and user authentication.",
      longDescription:
        "A travel platform that allows users to explore and book tours, view detailed destination information, and seamlessly plan their trips to Ethiopia. The site Features an intuitive interface for discovering packages and stripe payment processing with a focus on user experience and ease of navigation.",
      technologies: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaStripe />, name: "Stripe" },
      ],
      github: "https://github.com/hasen38/Ethio-travel",
    },
    {
      title: "Pharmacy-manegment-system",
      image: Pharma,
      description:
        "A comprehensive pharmacy management system.",
      longDescription:
        "A robust pharmacy management system featuring inventory tracking, sales management, and reporting capabilities. Built with Laravel and Filament, it offers a seamless experience for pharmacy staff to manage their daily operations efficiently.",
      technologies: [
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <SiTailwindcss />, name: "Tailwind" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <SiFilament />, name: "Filament" },
      ],
      github: "https://github.com/hasen38/Pharmacy-inventory-system",
    },
    {
      title: "Blog App",
      image: Blog3,
      description:
        "A modern blog platform built with React and Laravel.",
      longDescription:
        "A feature-rich blogging platform that combines React's dynamic frontend with Laravel's powerful backend. Includes features like rich text editing, real-time comments, and social sharing capabilities.",
      technologies: [
        { icon: <SiTailwindcss />, name: "Tailwindcss" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
      github: "https://github.com/hasen38/Blog-app",
    },
    {
      title: "Expense Tracker",
      image: Expense1,
      description:
        "A modern expense tracking platform with real-time monitoring and insights",
      longDescription:
        "Expense Tracker is designed to assist you in meticulously monitoring your personal finances. Built with Laravel and Livewire, it empowers you to effortlessly record and oversee your expenses, classify them by account type (such as cash or bank), and generate insightful reports to gain valuable insights into your financial habits and trends. ",

      technologies: [
        { icon: <SiLivewire />, name: "Livewire" },
        { icon: <SiTailwindcss />, name: "Tailwindcss" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <SiMysql />, name: "MySQL" },
      ],
      github: "https://github.com/hasen38/expense_tracker",
    },
  ];

  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-gray-50" id="projects">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden aspect-w-16 aspect-h-9">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1 text-sm bg-gray-100 px-3 py-1 rounded-full"
                    >
                      <span className="text-gray-600">{tech.icon}</span>
                      <span className="text-gray-700">{tech.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
