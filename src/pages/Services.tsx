import React from 'react';
import { motion } from 'framer-motion';
import { useInView as useVisibility } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaLinux, FaPython,
  FaJava
} from 'react-icons/fa';
import {
  SiTypescript, SiTailwindcss, SiFramer, SiUml, SiFirebase, SiGoogle, SiMysql, SiC,
  SiCplusplus, SiEclipseide, SiIntellijidea
} from 'react-icons/si';
import {
  IoIosCloud, IoMdCodeWorking, IoLogoAndroid, IoLogoWindows
} from 'react-icons/io';
import { CiBookmarkCheck } from 'react-icons/ci';
import { VscVscodeInsiders } from 'react-icons/vsc';
import { FaRegLightbulb } from 'react-icons/fa';  // Import new icon for Planning
import { PiStrategyDuotone } from "react-icons/pi";

const skillCategories = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', icon: <FaJava className="text-red-500 w-6 h-6" /> },
      { name: 'C (Basics)', icon: <SiC className="text-gray-300 w-6 h-6" /> },
      { name: 'C++ (Basics)', icon: <SiCplusplus className="text-blue-300 w-6 h-6" /> },
      { name: 'HTML', icon: <FaHtml5 className="text-orange-500 w-6 h-6" /> },
      { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 w-6 h-6" /> },
      { name: 'JavaScript', icon: <FaJs className="text-yellow-400 w-6 h-6" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600 w-6 h-6" /> },
      { name: 'Python (Basics)', icon: <FaPython className="text-blue-500 w-6 h-6" /> },
    ]
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { name: 'ReactJS', icon: <FaReact className="text-sky-400 w-6 h-6" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 w-6 h-6" /> },
      { name: 'Framer Motion', icon: <SiFramer className="text-pink-500 w-6 h-6" /> },
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MySQL', icon: <SiMysql className="text-blue-600 w-6 h-6" /> },
    ]
  },
  {
    category: 'Cloud & Backend',
    skills: [
      { name: 'NodeJS', icon: <FaNodeJs className="text-green-500 w-6 h-6" /> },
      { name: 'Firebase Auth', icon: <SiFirebase className="text-yellow-500 w-6 h-6" /> },
      { name: 'Firestore', icon: <SiFirebase className="text-orange-500 w-6 h-6" /> },
      { name: 'Google Cloud', icon: <SiGoogle className="text-blue-600 w-6 h-6" /> },
      { name: 'RESTful APIs', icon: <IoIosCloud className="text-green-400 w-6 h-6" /> },
    ]
  },
  {
    category: 'Networks & Cryptography',
    skills: [
      { name: 'TCP/IP', icon: <IoMdCodeWorking className="text-green-600 w-6 h-6" /> },
      { name: 'HTTP', icon: <IoLogoAndroid className="text-red-500 w-6 h-6" /> },
      { name: 'DNS', icon: <IoIosCloud className="text-blue-300 w-6 h-6" /> },
      { name: 'AES', icon: <IoIosCloud className="text-purple-300 w-6 h-6" /> },
      { name: 'RSA', icon: <IoIosCloud className="text-purple-400 w-6 h-6" /> },
    ]
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-orange-600 w-6 h-6" /> },
      { name: 'GitHub', icon: <FaGithub className="text-white w-6 h-6" /> },
      { name: 'VS Code', icon: <VscVscodeInsiders className="text-blue-500 w-6 h-6" /> },
      { name: 'Eclipse', icon: <SiEclipseide className="text-yellow-200 w-6 h-6" /> },
      { name: 'IntelliJ IDEA', icon: <SiIntellijidea className="text-pink-400 w-6 h-6" /> },
      { name: 'UML', icon: <SiUml className="text-purple-600 w-6 h-6" /> },
    ]
  },
  {
    category: 'Operating Systems',
    skills: [
      { name: 'Windows', icon: <IoLogoWindows className="text-blue-600 w-6 h-6" /> },
      { name: 'Linux (Basics)', icon: <FaLinux className="text-yellow-500 w-6 h-6" /> },
      { name: 'Bash & Command Line', icon: <FaLinux className="text-white w-6 h-6" /> },
    ]
  },
  {
    category: 'System Modeling',
    skills: [
      { name: 'UML', icon: <SiUml className="text-purple-600 w-6 h-6" /> },
      { name: 'IDEF', icon: <SiUml className="text-gray-500 w-6 h-6" /> },
      { name: 'DFD', icon: <SiUml className="text-pink-300 w-6 h-6" /> },
    ]
  },
];

const Services = () => {
  const [viewRef, isInView] = useVisibility({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="font-jetbrains">
      <section className="py-24 bg-gray-950 relative overflow-hidden" ref={viewRef}>
        {/* 🔘 Content (Unchanged) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Title for the section */}
          <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          >
            Services
          </motion.div>

          {/* Skill Categories */}
          <div className="flex flex-wrap justify-center gap-6 px-2">
            {skillCategories.map((block, i) => (
              <motion.div
                key={block.category}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="text-white relative p-3 rounded-xl border border-gray-800 hover:border-white transition-colors duration-500 bg-gradient-to-b from-gray-900 via-gray-950 to-black w-full sm:w-[45%] lg:w-[30%] min-w-[280px]"
              >
                <h2 className="absolute -top-3 left-3 px-1 text-white text-base font-semibold mt-2 bg-black">
                  {block.category}
                </h2>
                <div className="flex flex-wrap justify-center gap-2 pt-6">
                  {block.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        boxShadow: '0 6px 18px rgba(255, 255, 255, 0.12)',
                        backgroundColor: 'rgba(55, 65, 81, 0.7)',
                      }}
                      whileTap={{
                        scale: 0.97,
                        y: 0,
                        boxShadow: '0 3px 10px rgba(255, 255, 255, 0.08)',
                      }}
                      transition={{
                        scale: { type: 'spring', stiffness: 260, damping: 24 },
                        y: { type: 'spring', stiffness: 260, damping: 24 },
                        default: { duration: 0.4 },
                      }}
                      className="flex items-center gap-1 px-2.5 py-1.5 bg-gray-800 rounded-full border border-gray-700 text-xs shadow-sm backdrop-blur-sm transition-colors duration-500 ease-in-out cursor-pointer"
                    >
                      {skill.icon}
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>
    </div>
  );
};

export default Services;
