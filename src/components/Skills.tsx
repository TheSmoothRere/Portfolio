import {motion} from "motion/react";
import {CodeIcon, CpuIcon, DatabaseIcon, GameControllerIcon, TerminalWindowIcon} from "@phosphor-icons/react";

const SKILL_CATEGORIES = [
  {
    id: "backend",
    title: "Backend & Core",
    icon: <DatabaseIcon size={32} />,
    skills: ["Java (Spring Boot)", "JDA (Discord Bots)", "PostgreSQL", "REST APIs"],
    color: "text-blue-400",
  },
  {
    id: "game-dev",
    title: "Game Modding",
    icon: <GameControllerIcon size={32} />,
    skills: ["Fabric API (Minecraft)", "Minecraft Modding", "Java"],
    color: "text-red-400",
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: <CodeIcon size={32} />,
    skills: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    color: "text-spring-green",
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: <TerminalWindowIcon size={32} />,
    skills: ["Git", "Docker", "Linux"],
    color: "text-purple-400",
  },
];

const EXPERIENCE = [
  {
    year: "2024 - Present",
    role: "Freelance Developer & Modder",
    company: "Self-Employed",
    description: "Building personal projects and tools, including Minecraft Fabric mods and Discord bots. Achieved over 100k+ users for Minecraft mods.",
  },
  {
    year: "2025 - Present",
    role: "Discord Bot Developer",
    company: "Personal Project",
    description: "Created and managed Discord bots using JDA, implementing custom commands and integrations for community engagement.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-spring-green font-mono text-xl">02.</span>
          <h2 className="text-3xl font-bold text-gray-100">Skills & Experience</h2>
          <span className="h-px bg-gray-700 grow max-w-50"></span>
        </motion.div>

        {/* The "Graph" Visualization */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
           {/* Connecting Lines (Desktop only for simplicity) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-800 -z-10"></div>
           
           {/* Center Stem */}
           <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-800 -z-10"></div>

          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-obsidian border border-gray-800 p-6 rounded-lg hover:border-spring-green/50 transition-colors group relative"
            >
              {/* Connector Dot */}
              <div className="hidden md:block absolute -top-4.25 left-1/2 -translate-x-1/2 w-3 h-3 bg-obsidian border-2 border-spring-green rounded-full z-10"></div>

              <div className={`mb-4 ${category.color} group-hover:scale-105 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center text-gray-400 font-mono text-sm">
                    <span className="w-1.5 h-1.5 bg-spring-green/50 rounded-full mr-3 group-hover:bg-spring-green transition-colors"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="mt-24">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
                <CpuIcon size={28} className="text-spring-green"/>
                Work History
            </h3>

            <div className="space-y-12 border-l-2 border-gray-800 ml-3 md:ml-10 pl-8 relative">
                {EXPERIENCE.map((job, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.2) }}
                        className="relative"
                    >
                        {/* Timeline Dot */}
                        <span className="absolute -left-10.25 top-1 w-5 h-5 bg-obsidian border-2 border-spring-green rounded-full"></span>
                        
                        <h4 className="text-xl font-bold text-white">{job.role} <span className="text-spring-green">@ {job.company}</span></h4>
                        <p className="font-mono text-sm text-gray-500 mb-2">{job.year}</p>
                        <p className="text-gray-400 max-w-2xl">{job.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
}
