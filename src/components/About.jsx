import React from "react";
import picfit from "../assets/picfit.jpg";

function AboutMe() {
  return (
    <div className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mx-auto bg-gradient-to-b from-gray-50 to-white" id="about">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <div className="mb-12 sm:mb-16 lg:mb-24">
          <div className="grid items-center gap-8 sm:gap-12 lg:gap-16 md:grid-cols-2">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="relative text-3xl sm:text-4xl font-bold text-gray-800">
                <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-blue-500">
                  About Me
                </span>
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                As a full-stack developer, I craft elegant, scalable web solutions
                that bridge creativity and functionality. My expertise spans from designing
                intuitive React interfaces styled with Tailwind CSS to architecting robust
                Laravel back-ends powered by MySQL.
              </p>
            </div>

            <div className="relative">
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <img
                  src={picfit}
                  alt="Profile"
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 opacity-75"></div>
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>

         {/* Experience Section */}
         <div className="mb-20">
          <h3 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-16">
            Experience & Education
          </h3>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5">
              <div className="h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full opacity-30"></div>
            </div>

            {[
              {
                year: "2024 - Present",
                title: "Freelance Developer",
                description: "Working on various web development projects using modern technologies like React, Laravel, and Tailwind CSS.",
                icon: "💻",
                color: "from-blue-500 to-blue-600",
              },
              {
                year: "2023",
                title: "Web Development Internship",
                description: "Gained hands-on experience in full-stack development,Collaboration with a team and CICD .",
                icon: "🚀",
                color: "from-purple-500 to-purple-600",
              },
              {
                year: "2019 - 2023",
                title: "Computer Science Degree",
                description: "Bachelor's degree in Computer Science with focus on software engineering and web technologies.",
                icon: "🎓",
                color: "from-pink-500 to-pink-600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 
                    ? "md:ml-auto md:pl-8 md:w-1/2 pl-12"
                    : "md:mr-auto md:pr-8 md:w-1/2 pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div 
                  className={`absolute left-2.5 md:left-auto ${
                    index % 2 === 0 ? "md:-left-3" : "md:-right-3"
                  } top-5 w-4 h-4 rounded-full bg-white shadow-lg border-2 border-purple-400 z-10`}
                />

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className={`px-3 py-1 text-sm font-semibold bg-gradient-to-r ${item.color} text-white rounded-full`}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 text-transparent bg-clip-text mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        
        {/* Skills Section */}
        <div className="space-y-12 sm:space-y-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center relative">
            <span className="relative inline-block">
              Skills & Technologies
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            </span>
          </h3>
          
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                category: "Frontend", 
                skills: ["React", "JavaScript", "Tailwind CSS", "Vue.js", "HTML5", "CSS3"],
                icon: "🎨"
              },
              { 
                category: "Backend", 
                skills: ["Laravel", "PHP", "MySQL", "MongoDB"],
                icon: "⚙️"
              },
              { 
                category: "APIs & Tools", 
                skills: ["RESTful APIs", "Git", "Docker", "CI/CD"],
                icon: "🛠️"
              }
            ].map((group, groupIndex) => (
              <div
                key={group.category}
                className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl sm:text-3xl">{group.icon}</span>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {group.category}
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {group.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="relative group"
                    >
                      <div className="absolute inset-0 via-purple-500 to-pink-500 rounded-lg blur-sm opacity-75"></div>
                      <div className="relative p-3 bg-white rounded-lg border border-gray-100">
                        <p className="text-center text-sm sm:text-base font-medium text-gray-700">
                          {skill}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
             
       

        <div className="mt-16 space-y-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center">
            Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Development", icon: "🌐", description: "Custom web applications tailored to your needs" },
              { title: "API Integration", icon: "🔗", description: "Seamless integration of third-party services" },
              // { title: "UI/UX Design", icon: "🎨", description: "Intuitive and visually appealing user interfaces" },
              { title: "Database Design", icon: "💾", description: "Efficient and scalable database solutions" },
              { title: "Performance Optimization", icon: "⚡", description: "Boost your application's speed and efficiency" },
              { title: "Maintenance & Support", icon: "🛠️", description: "Ongoing support to keep your project running smoothly" }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
