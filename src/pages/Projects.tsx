import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layers, Server, Zap, Award } from 'lucide-react';
import CountUp from 'react-countup';

// Reference images directly from the public directory
const herobackground = '/images/wallpaperhero.jpg';
const ecommerceImage = '/images/turbotechbgimage.jpg';
const portfolioImage = '/images/portfoliobgimage.png';
const dashboardImage = '/images/adminbgimage.jpg';
const museumImage = '/images/museum.jpg';
const jobappImage = '/images/jobapp.jpg';

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
      title: "Art Gallery Virtual Museum on Unreal Engine",
      category: "Interactive Simulation",
      image: museumImage,
      description: "An immersive 3D museum with free movement, interactive NPC dialogs, and engaging AI behaviors built in Unreal Engine.",
      techStack: ["Unreal Engine", "C++", "AI", "Blueprints"],
      stats: { duration: "3 weeks", repo: "Private" }
    },
    {
      title: "Eduplan Learning App",
      category: "Desktop Application",
      image: jobappImage,
      description: "A C# desktop application designed for learning C# with structured lessons, quizzes, video content, and interactive exercises.",
      techStack: ["C#", ".NET", "WPF"],
      stats: { duration: "2 weeks", repo: "Private" }
    },
    {
      title: "Portfolio Website",
      category: "Frontend",
      image: portfolioImage,
      description: "A fully responsive personal portfolio built with modern design principles, showcasing full stack and UI/UX work.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      stats: { duration: "1 week", repo: "Private" }
    },
    {
      title: "Digital Systems Design",
      category: "Hardware Design",
      image: jobappImage,
      description: "A VHDL-based digital design project featuring modules like register file, control units, and testbenches.",
      techStack: ["VHDL", "ModelSim", "Testbench"],
      stats: { duration: "1 week", repo: "Private" }
    }
  ];
  
  const stats = [
    { icon: <Code className="h-8 w-8 text-blue-500" />, value: 35, label: 'Projects Delivered' },
    { icon: <Layers className="h-8 w-8 text-blue-500" />, value: 12, label: 'Tech Stacks Mastered' },
    { icon: <Server className="h-8 w-8 text-blue-500" />, value: 99, label: 'Positive Feedback' },
    { icon: <Zap className="h-8 w-8 text-blue-500" />, value: 50, label: 'Deployments Completed' },
    { icon: <Award className="h-8 w-8 text-blue-500" />, value: 5, label: 'Awards / Recognitions' }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={herobackground}
            alt="Hero"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }}>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
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
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
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
    </div>
  );
};

export default Projects;
