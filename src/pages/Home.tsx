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
import Services from '../pages/Services.tsx';
import Projects from '../pages/Projects.tsx';
import Contact from '../pages/Contact.tsx';


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
    <section id="home" className="relative h-screen flex items-center justify-center text-center px-4 overflow-hidden">
      <div className="absolute inset-0">
        <div className="w-full h-full object-cover bg-fixed bg-center bg-cover opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center text-white max-w-6xl w-full px-4">
  {/* LEFT ON DESKTOP / TOP ON MOBILE: Image container */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ delay: 0.9, duration: 1.2, ease: "easeOut" }}
    className="mb-8 md:mb-0 md:mr-8 flex flex-col items-center justify-center"
  >
    {/* WRAPPER */}
    <div className="relative w-60 h-60 md:w-[400px] md:h-[400px]">
      {/* BORDER */}
      <div className="absolute inset-0 m-6 rounded-full border-4 border-blue-400 pointer-events-none" />

      {/* IMAGE */}
      <div className="rounded-full overflow-hidden w-full h-full">
        <img
          src="/images/wp11889473-tulsa-king-wallpapers-removebg-preview.png"
          alt="Kosmas Papadopoulos"
          className="w-full h-full object-cover scale-110 md:scale-110 md:translate-x-[30px] md:translate-y-[-5px] transition-transform duration-500"
        />
      </div>
    </div>
  </motion.div>

  {/* RIGHT ON DESKTOP / BELOW ON MOBILE: Text content */}
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
      className="flex flex-row gap-4 mt-4 items-center md:justify-start justify-center"
    >
      <a
        href="https://www.linkedin.com/in/kosmas-papadopoulos-5995631b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg hover:scale-105 text-sm sm:text-base"
      >
        <Linkedin className="w-5 h-5" />
        LinkedIn
      </a>

      <a
        href="https://github.com/KosmarasP"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition duration-200 shadow-md hover:shadow-lg hover:scale-105 text-sm sm:text-base"
      >
        <Github className="w-5 h-5" />
        GitHub
      </a>
    </motion.div>
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
          className="md:w-1/2 text-4xl font-bold text-white mb-6 md:mb-0 text-center"
        >
          Objective
          <motion.span
            className="block h-[2px] bg-blue-500 mt-2 mx-auto"
            initial={{ width: "0%" }}
            whileInView={{ width: "50%" }} // Adjusted width as before
            transition={{ duration: 1, ease: "easeOut" }}
          />
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

          {[
            {
              icon: <LiaSchoolSolid className="w-7 h-7 text-blue-500" />,
              time: '2014 — 2017',
              title: 'High School Diploma',
              text: '3rd High School of Nea Smyrni — Completed strong foundations in mathematics, physics, and early programming logic.',
              side: 'left'
            },
            {
              icon: <GraduationCap className="w-7 h-7 text-blue-500" />,
              time: '2018 — 2024',
              title: 'MSc Computer Engineering & Informatics',
              text: 'University of West Attica — Focused on advanced software design, algorithms, and system modeling for real-world tech solutions.',
              side: 'right'
            },
            {
              icon: <Rocket className="w-7 h-7 text-blue-500" />,
              time: 'Future',
              title: 'Always Learning & Growing',
              text: 'Continuously expanding my knowledge in web technologies, software architecture, and modern development practices.',
              side: 'left'
            }
          ].map(({ icon, time, title, text, side }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.2 }}
              className={`mb-12 w-full flex justify-${side === 'left' ? 'start' : 'end'} items-center relative`}
            >
              {side === 'left' && (
                <div className="w-full md:w-1/2 pr-8 text-right">
                  <div className="flex justify-end mb-2">{icon}</div>
                  <span className="text-sm text-yellow-400 font-semibold">{time}</span>
                  <h3 className="text-2xl font-bold mt-2">{title}</h3>
                  <p className="text-gray-400 mt-2 leading-relaxed">{text}</p>
                </div>
              )}
              
              {/* Centered bullet on the vertical bar */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
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

        <div className="font-sans">
          {/* Services Section */}
          <section id="services" className="">
            <Services />
          </section>

          {/* Projects Section */}
          <section id="projects" className="">
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact" className="">
            <Contact />
          </section>
        </div>
    </div>
  );
};

export default Home;