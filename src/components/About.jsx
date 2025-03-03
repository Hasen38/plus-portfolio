import React from "react";
import picfit from "../assets/picfit.jpg";

function AboutMe() {
  return (
    <div
      className="container px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 mx-auto bg-gradient-to-b from-gray-50 to-white"
      id="about"
    >
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
                As a full-stack developer, I craft elegant, scalable web
                solutions that bridge creativity and functionality. My expertise
                spans from designing intuitive React interfaces styled with
                Tailwind CSS to architecting robust Laravel back-ends powered by
                MySQL.
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

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center relative">
            <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-blue-500">
              Education
            </span>
          </h3>
          <div className="space-y-8">
            {[
              {
                degree: "Graduated in Bsc Computer Science",
                institution: "Madda Welabu University",
                period: " Sep 2019 - April 2023",
                details: [
                  //   "Dean's List all semesters",
                  //   "Senior Project: E-commerce Platform Development",
                  //   "Minor in Mathematics",
                ],
              },
            ].map((education, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {education.degree}
                    </h4>
                    <p className="text-blue-600">{education.institution}</p>
                  </div>
                  <p className="text-gray-600 mt-2 sm:mt-0">
                    {education.period}
                  </p>
                </div>
                {/* <ul className="list-disc list-inside space-y-2 text-gray-700"> */}
                {education.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
                {/* </ul> */}
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center relative">
            <span className="relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-blue-500">
              Work
            </span>
          </h3>
          <div className="space-y-8">
            {[
              {
                role: "Full Stack Developer",
                company: "Applause(Utest) Inc.",
                period: "May 2023 - Nov 2023",
                achievements: [
                  "developed enterprise-level web applications using React and Laravel",
                  "Improved application performance by 40% through optimization techniques",
                ],
              },
              {
                role: "Web Developer",
                company: "Vintage Technologies",
                period: "Dec 2023 - Feb 2025",
                achievements: [
                  "Developed responsive web applications for diverse client base",
                  "Integrated multiple third-party APIs and payment gateways",
                  "Implemented automated testing reducing bug reports by 30%",
                ],
              },
            ].map((experience, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">
                      {experience.role}
                    </h4>
                    <p className="text-blue-600">{experience.company}</p>
                  </div>
                  <p className="text-gray-600 mt-2 sm:mt-0">
                    {experience.period}
                  </p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
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
                skills: [
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "Vue.js",
                  "HTML5",
                  "CSS3",
                ],
                icon: "🎨",
              },
              {
                category: "Backend",
                skills: ["Laravel", "PHP", "MySQL", "MongoDB"],
                icon: "⚙️",
              },
              {
                category: "APIs & Tools",
                skills: ["RESTful APIs", "Git", "Docker", "CI/CD"],
                icon: "🛠️",
              },
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
                    <div key={skill} className="relative group">
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
              {
                title: "Web Development",
                icon: "🌐",
                description: "Custom web applications tailored to your needs",
              },
              {
                title: "API Integration",
                icon: "🔗",
                description: "Seamless integration of third-party services",
              },
              // { title: "UI/UX Design", icon: "🎨", description: "Intuitive and visually appealing user interfaces" },
              {
                title: "Database Design",
                icon: "💾",
                description: "Efficient and scalable database solutions",
              },
              {
                title: "Performance Optimization",
                icon: "⚡",
                description: "Boost your application's speed and efficiency",
              },
              {
                title: "Maintenance & Support",
                icon: "🛠️",
                description:
                  "Ongoing support to keep your project running smoothly",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {service.title}
                </h4>
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
