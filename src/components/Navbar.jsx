import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full text-white bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="container px-4 mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-500 hover:from-purple-600 hover:to-blue-500">
            Hasen
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-6 md:flex">
            {["Home", "About ", "Projects", "Contact "].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="relative py-2 text-gray-300 transition-colors duration-300 hover:text-white group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <div className="relative w-6 h-6">
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? "rotate-45 top-3" : "top-1"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 top-3 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-full bg-white transform transition-all duration-300 ${
                  isOpen ? "-rotate-45 top-3" : "top-5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "py-4 max-h-64 opacity-100"
              : "overflow-hidden max-h-0 opacity-0"
          }`}
        >
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block px-4 py-2 text-gray-300 rounded-lg transition-colors duration-300 hover:text-white hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
