import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layers, Server, Zap, Award } from 'lucide-react';
import CountUp from 'react-countup';

import { CiBookmarkCheck } from 'react-icons/ci';
import { FaRegLightbulb } from 'react-icons/fa';  // Import new icon for Planning
import { PiStrategyDuotone } from "react-icons/pi";
import {IoMdCodeWorking,} from 'react-icons/io';

// Reference images directly from the public directory
const herobackground = '/images/wallpaperhero.jpg';
const ecommerceImage = '/images/bgturbotech.png';
const dashboardImage = '/images/bgadminturbotech.png';
const museumImage = '/images/bgmuseum.png';
const VHDLImage = '/images/bgvhdl.png';
const portfolioImage = '/images/portfoliobgimage.png';
const EduplanImage = '/images/bgeduplan.png';
const realestateImage = '/images/bgrealestate.png';

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      title: "TurboTech Eshop",
      category: "Full Stack",
      image: ecommerceImage,
      description: "A dynamic e-commerce site built with React JS, Tailwind CSS, Firebase Cloud, and Stripe payment integration.",
      techStack: ["React", "Tailwind CSS", "Firebase", "Stripe"],
      stats: { duration: "3 months", repo: "Private" }
    },
    {
      title: "TurboTech Admin Panel",
      category: "Backend + UI",
      image: dashboardImage,
      description: "An admin dashboard for the TurboTech eshop, allowing dynamic management of categories, products, and detailed analytics.",
      techStack: ["React", "Tailwind CSS", "Firebase"],
      stats: { duration: "2 months", repo: "Private" }
    },
    {
      title: "Virtual Museum on UE4",
      category: "Interactive Simulation",
      image: museumImage,
      description: "An immersive 3D museum with free movement, interactive NPC dialogs, and engaging AI behaviors built in Unreal Engine.",
      techStack: ["Unreal Engine", "C++", "AI", "Blueprints"],
      stats: { duration: "3 weeks", repo: "Private" }
    },
    {
      title: "Eduplan Learning App",
      category: "Desktop Application",
      image: EduplanImage,
      description: "A C# desktop application designed for learning C# with structured lessons, quizzes, video content, and interactive exercises.",
      techStack: ["C#", ".NET", "WPF"],
      stats: { duration: "2 weeks", repo: "Private" }
    },
    {
      title: "Digital Systems Design",
      category: "Hardware Design",
      image: VHDLImage,
      description: "A VHDL-based digital design project featuring modules like register file, control units, and testbenches.",
      techStack: ["VHDL", "ModelSim", "Testbench"],
      stats: { duration: "1 week", repo: "Private" }
    },
    {
      title: "Property Purchase Process",
      category: "Real Estate",
      image: realestateImage,
      description: "A guide to purchasing property through a real estate agency, covering key steps and essential info.",
      techStack: ["UML", "IDEF3", "ER Diagram", "Transactions"],
      stats: { duration: "1 week", repo: "Private" }
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      image: portfolioImage,
      description: "A fully responsive personal portfolio built with modern design principles, showcasing full stack and UI/UX work.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      stats: { duration: "1 week", repo: "Private" }
    },
  ];
  
  const stats = [
    { icon: <Code className="h-8 w-8 text-blue-500" />, value: 35, label: 'Projects Delivered' },
    { icon: <Layers className="h-8 w-8 text-blue-500" />, value: 12, label: 'Tech Stacks Mastered' },
    { icon: <Server className="h-8 w-8 text-blue-500" />, value: 99, label: 'Positive Feedback' },
    { icon: <Zap className="h-8 w-8 text-blue-500" />, value: 50, label: 'Deployments Completed' },
    { icon: <Award className="h-8 w-8 text-blue-500" />, value: 5, label: 'Awards / Recognitions' }
  ];

  return (
    <div className="font-jetbrains">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={herobackground}
            alt="Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-blue-500">Work</span>
            </h1>
            <p className="text-xl text-gray-300">
              Full Stack Development • Software Engineering • UI/UX Designer
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-gray-950" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {stats.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 3, delay: idx * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-3xl font-bold text-white">
                  {inView ? <CountUp start={1} end={item.value} duration={3} /> : '0'}+
                </h3>
                <p className="text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1.2, delay: index * 0.4 }}
                className="group relative overflow-hidden rounded-xl bg-gray-900 hover:scale-[1.01] transition-transform duration-500"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-obtain"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <span className="text-blue-500 text-sm font-semibold uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

                  <div className="text-xs text-gray-400 mt-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Info */}
                  <div className="mt-4 border-t border-gray-700 pt-4 text-sm flex justify-between items-center text-gray-400">
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-white">Duration:</span>
                      <span>{project.stats.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-white">Repo:</span>
                      <span>
                        GitHub –{" "}
                        {project.stats.repo === "Private" ? (
                          <span className="text-red-500 font-medium">Private</span>
                        ) : (
                          <span className="text-green-400 font-medium">Public</span>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Work Process*/}
      <section className="bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Work Process
            <motion.span
              className="block h-[2px] bg-blue-500 mt-2 mx-auto"
              initial={{ width: "0%" }}
              whileInView={{ width: "50%" }} // Adjust this width as needed
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A streamlined process to deliver high-quality solutions every time.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 xs:grid-cols-2 gap-8">
          {[
            { icon: <FaRegLightbulb className="w-8 h-8" />, title: 'Planning', description: 'We strategize and create actionable plans to meet project goals effectively.' },
            { icon: <PiStrategyDuotone className="w-8 h-8" />, title: 'Consultation', description: 'Engaging in discussions with clients to understand requirements and offer advice.' },
            { icon: <IoMdCodeWorking className="w-8 h-8" />, title: 'Development', description: 'This is where the technical magic happens, transforming ideas into working solutions.' },
            { icon: <CiBookmarkCheck className="w-8 h-8" />, title: 'Delivery', description: 'Delivering the final product after thorough testing and adjustments.' },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 bg-gray-900 rounded-2xl shadow-lg"
            >
              <div className="mb-4 text-white">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 bg-cover bg-center relative"
        style={{ backgroundImage: 'url("https://example.com/background-image.jpg")' }}
      >
        <div className="absolute inset-0 bg-gray-950"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-center mb-6"
          >
            Personal Skills
            <motion.span
              className="block h-[2px] bg-blue-500 mt-2 mx-auto"
              initial={{ width: "0%" }}
              whileInView={{ width: "50%" }} // A bit bigger
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.h2>

          <ul className="space-y-4 text-center text-lg sm:text-xl">
            {[
              "Self-Improvement, Continuous Learning",
              "Problem-Solving, Analytical & Critical Thinking",
              "Teamwork, Attention to Detail, Time Management",
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <li className="text-gray-300">• {skill}</li>
              </motion.div>
            ))}
          </ul>
        </div>

      </section>
    </div>
  );
};

export default Projects;
