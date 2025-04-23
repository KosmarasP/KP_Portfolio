import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code,
  MonitorSmartphone,
  Palette,
  Database,
  MessageCircle,
  ScrollText,
  Award,
  BookOpen,
  Code2,
  ShieldCheck,
  Globe,
} from 'lucide-react';
import { LiaSchoolSolid } from 'react-icons/lia';
import { GraduationCap, Rocket, Github, Linkedin } from 'lucide-react';
import { Mail, MapPin, Phone } from "lucide-react";


const Home = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const skills = [
    {
      icon: <Code className="h-8 w-8 text-blue-500" />,
      title: 'Clean Code',
      description: 'Modern, maintainable, and performant web architecture.',
    },
    {
      icon: <MonitorSmartphone className="h-8 w-8 text-blue-500" />,
      title: 'Responsive Design',
      description: 'Beautiful layouts on any device, mobile-first approach.',
    },
    {
      icon: <Palette className="h-8 w-8 text-blue-500" />,
      title: 'UI/UX Design',
      description: 'Thoughtfully crafted designs with user-first principles.',
    },
    {
      icon: <Database className="h-8 w-8 text-blue-500" />,
      title: 'Backend & APIs',
      description: 'RESTful APIs, Firebase, Node.js, and cloud deployment.',
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-blue-500" />,
      title: 'Team Player',
      description: 'Great communication and project collaboration skills.',
    },
  ];

  const certificates = [
    { title: "Problem Solving Skills", issuer: "IBMI", year: "2024", Icon: Award },
    { title: "Entrepreneurship Seminar", issuer: "Athens University of Economics and Business", year: "2023", Icon: BookOpen },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023", Icon: Code2 },
    { title: "Introduction to Cybersecurity", issuer: "Simplilearn", year: "2022", Icon: Globe },
    { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2022", Icon: ShieldCheck },
    // Duplicate to simulate infinite effect
    { title: "Problem Solving Skills", issuer: "IBMI", year: "2024", Icon: Award },
    { title: "Entrepreneurship Seminar", issuer: "Athens University of Economics and Business", year: "2023", Icon: BookOpen },
    { title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023", Icon: Code2 },
    { title: "Introduction to Cybersecurity", issuer: "Simplilearn", year: "2022", Icon: Globe },
    { title: "Introduction to Cybersecurity", issuer: "Cisco Networking Academy", year: "2022", Icon: ShieldCheck },
  ];

  return (
  <div className=" font-sans">
    {/* Hero Section */}
    <section className="relative h-screen flex items-center justify-center text-center px-4">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1950&q=80"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-white max-w-6xl w-full px-4">
        {/* LEFT: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:text-left text-center md:max-w-xl"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Hi, I’m <span className="text-blue-400">Kosmas Papadopoulos</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
            className="text-xl md:text-2xl mb-8"
          >
            Software Engineer · Full Stack Developer · UI/UX Designer · Tech Enthusiast
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ delay: 0.6, duration: 1.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="https://www.linkedin.com/in/kosmas-papadopoulos-5995631b9/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href="https://github.com/KosmarasP"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Image container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
          className="mt-8 md:mt-0 md:ml-8 flex flex-col items-center justify-center"
        >
          <div className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
            <img
              src="/images/me.jpg"
              alt="Kosmas Papadopoulos"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>

    {/* OBJECTIVE */}
    <section id="objective" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:w-1/2 text-3xl font-bold text-white mb-6 md:mb-0"
        >
          Objective
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:w-1/2 text-lg text-gray-300"
        >
          Software and Computer Engineer with a strong interest in software development, system modeling, and data-driven solutions. Passionate about technology, aiming to apply my skills, but also ready to learn, adapt, and contribute to innovative projects.
        </motion.p>
      </div>
    </section>

    {/* Journey Section */}
    <section className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">My Journey</h2>
        <div className="relative flex flex-col items-center">
          <div className="absolute w-1 bg-gray-700 shadow-md h-full left-1/2 transform -translate-x-1/2" />

          {[{
            icon: <LiaSchoolSolid className="w-7 h-7 text-blue-500" />,
            time: '2014 — 2017',
            title: 'High School Diploma',
            text: '3rd High School of Nea Smyrni — Completed strong foundations in mathematics, physics, and early programming logic.',
            side: 'left'
          }, {
            icon: <GraduationCap className="w-7 h-7 text-blue-500" />,
            time: '2018 — 2024',
            title: 'MSc Computer Engineering & Informatics',
            text: 'University of West Attica — Focused on advanced software design, algorithms, and system modeling for real-world tech solutions.',
            side: 'right'
          }, {
            icon: <Rocket className="w-7 h-7 text-blue-500" />,
            time: 'Future',
            title: 'Always Learning & Growing',
            text: 'Continuously expanding my knowledge in web technologies, software architecture, and modern development practices.',
            side: 'left'
          }].map(({ icon, time, title, text, side }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.2 }}
              className={`mb-12 w-full flex justify-${side === 'left' ? 'start' : 'end'} items-center`}
            >
              {side === 'left' && (
                <div className="w-full md:w-1/2 pr-8 text-right">
                  <div className="flex justify-end mb-2">{icon}</div>
                  <span className="text-sm text-yellow-400 font-semibold">{time}</span>
                  <h3 className="text-2xl font-bold mt-2">{title}</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">{text}</p>
                </div>
              )}
              <div className="relative z-10">
                <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 shadow-lg" />
              </div>
              {side === 'right' && (
                <div className="w-full md:w-1/2 pl-8 text-left">
                  <div className="flex justify-start mb-2">{icon}</div>
                  <span className="text-sm text-yellow-400 font-semibold">{time}</span>
                  <h3 className="text-2xl font-bold mt-2">{title}</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">{text}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Certificates Section */}
    <section id="certificates" className="py-24 bg-gray-950 overflow-hidden">
      <div className=" mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center gap-3 text-3xl md:text-4xl font-bold mb-14 text-white"
        >
          Professional Certificates
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <div className="flex gap-6 animate-infinite-scroll">
            {certificates.map(({ title, issuer, year, Icon }, index) => (
              <div
                key={index}
                className="w-[280px] h-[270px] shrink-0 bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4 z-10">
                  <Icon className="h-6 w-6 text-blue-300" />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <h3 className="relative text-lg font-semibold text-white mb-2 z-10">{title}</h3>
                  <p className="relative text-sm text-gray-400 z-10">
                    Issued by <span className="text-white font-medium">{issuer}</span>
                  </p>
                  <p className="relative text-sm text-gray-400 z-10">{year}</p>
                </div>
              </div>
            ))}
            {/* Duplicate certificates for smooth scrolling */}
            {certificates.map(({ title, issuer, year, Icon }, index) => (
              <div
                key={`duplicate-${index}`}
                className="w-[280px] h-[270px] shrink-0 bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative flex items-center justify-center w-12 h-12 bg-gray-700 rounded-full mx-auto mb-4 z-10">
                  <Icon className="h-6 w-6 text-blue-300" />
                </div>
                <div className="flex flex-col justify-between h-full">
                  <h3 className="relative text-lg font-semibold text-white mb-2 z-10">{title}</h3>
                  <p className="relative text-sm text-gray-400 z-10">
                    Issued by <span className="text-white font-medium">{issuer}</span>
                  </p>
                  <p className="relative text-sm text-gray-400 z-10">{year}</p>
                </div>
              </div>
            ))}
          </div>
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
      transition={{ duration: 0.8 }}
      className="text-2xl md:text-3xl font-bold text-center mb-6"
    >
      Personal Skills
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

export default Home;