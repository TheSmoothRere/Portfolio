import {motion} from "motion/react";
import {GithubLogoIcon, ArrowSquareOutIcon, FolderIcon} from "@phosphor-icons/react";
import portfolioThumbnail from "@/assets/projects/portfolio-hero.png"

const PROJECTS = [
    {
        title: "Portfolio Website",
        description: "The website you're looking at right now! Built with a modern frontend stack to showcase my skills and projects.",
        tech: ["React", "Vite", "TypeScript", "Tailwind CSS", "Framer Motion"],
        github: "https://github.com/TheSmoothRere",
        image: portfolioThumbnail,
        demo: undefined
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-6xl">

                {/* Section Header */}
                <motion.div
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    className="flex items-center gap-4 mb-16"
                >
                    <span className="text-spring-green font-mono text-xl">03.</span>
                    <h2 className="text-3xl font-bold text-gray-100">Featured Projects</h2>
                    <span className="h-px bg-gray-700 grow max-w-50"></span>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            className="group relative bg-obsidian rounded-xl border border-gray-800 hover:border-spring-green/50 transition-colors duration-300 flex flex-col h-full"
                        >
                            {/* "Connection" Line Decoration */}
                            <div
                                className="absolute -top-8 left-8 w-px h-8 bg-gray-800 group-hover:bg-spring-green transition-colors duration-500"></div>
                            <div
                                className="absolute -top-1.25 left-7.25 w-1.5 h-1.5 rounded-full bg-gray-800 group-hover:bg-spring-green transition-colors duration-500"></div>

                            {/* Project Header / Image Placeholder */}
                            <div
                                className="h-48 bg-gray-900 rounded-t-xl overflow-hidden relative border-b border-gray-800">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center text-gray-700 group-hover:text-spring-green/50 transition-colors">
                                        <FolderIcon size={64} weight="thin"/>
                                    </div>
                                )}
                                {/* Overlay on hover */}
                                <div
                                    className="absolute inset-0 bg-spring-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-spring-green transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed mb-6 grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <ul className="flex flex-wrap gap-3 text-xs font-mono text-gray-500 mb-6">
                                    {project.tech.map((t) => (
                                        <li key={t} className="bg-gray-800/50 px-2 py-1 rounded text-spring-green/80">
                                            {t}
                                        </li>
                                    ))}
                                </ul>

                                {/* Links */}
                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-400 hover:text-spring-green transition-colors"
                                        aria-label="GitHub Repo"
                                    >
                                        <GithubLogoIcon size={24}/>
                                    </a>
                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-spring-green transition-colors"
                                            aria-label="Live Demo"
                                        >
                                            <ArrowSquareOutIcon size={24}/>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Show More Button */}
                <div className="mt-16 text-center">
                    <a href="https://github.com/TheSmoothRere" target="_blank"
                       className="inline-block px-8 py-4 border border-spring-green text-spring-green font-mono rounded hover:bg-spring-green/10 transition-all duration-300">
                        View Full Project Archive
                    </a>
                </div>
            </div>
        </section>
    );
}
