import {motion} from "motion/react";

export default function About() {
    const container = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {opacity: 1, y: 0},
    };

    return (
        <section id="about" className="py-24 px-6 relative">
            <div className="container mx-auto max-w-4xl">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true, amount: 0.3}}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Text Content */}
                    <div className="flex-1">
                        <motion.h2 variants={item} className="flex items-center text-3xl font-bold text-gray-100 mb-8">
                            <span className="text-spring-green font-mono text-xl mr-4">01.</span>
                            About Me
                            <span className="h-px bg-gray-700 grow ml-6"></span>
                        </motion.h2>

                        <motion.div variants={item} className="text-gray-400 space-y-4 text-lg leading-relaxed">
                            <p>
                                Hello! My name is <span className="text-spring-green">Rere</span>. I'm a Java developer
                                with a deep interest in building things for the internet.
                            </p>
                            <p>
                                My journey began in 2024, sparked by a curiosity to build my own <span
                                className="text-spring-green">Minecraft mod</span>. As time went on, that curiosity
                                expanded into web development and creating Discord bots.
                            </p>
                            <p>
                                Today, I work as a <span className="text-spring-green">freelancer</span>, building my
                                own tools and projects. I've had the excitement of seeing my Fabric mods gain over <span
                                className="text-spring-green">100k+ users</span>. I'm comfortable working with Java
                                (Spring Boot), building JDA Discord bots, and crafting frontends with React, TypeScript,
                                and Tailwind CSS.
                            </p>
                            <p>
                                Here are a few technologies I've been working with recently:
                            </p>
                        </motion.div>

                        <motion.ul variants={item}
                                   className="grid grid-cols-2 gap-2 mt-6 font-mono text-sm text-gray-400">
                            {["Java (Spring Boot)", "Fabric API (Minecraft)", "JDA (Discord Bots)", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                                <li key={tech}
                                    className="flex items-center before:content-['▹'] before:text-spring-green before:mr-2">
                                    {tech}
                                </li>
                            ))}
                        </motion.ul>
                    </div>

                    {/* Image / Graphic Placeholder */}
                    <motion.div variants={item} className="w-64 h-64 md:w-80 md:h-80 relative group">
                        <div
                            className="absolute inset-0 border-2 border-spring-green rounded translate-x-4 translate-y-4 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <div
                            className="absolute inset-0 bg-spring-green/20 rounded mix-blend-multiply hover:bg-transparent transition-colors duration-300 z-10"></div>
                        {/* Replace src with your actual image path */}
                        <div
                            className="w-full h-full bg-gray-800 rounded overflow-hidden grayscale hover:grayscale-0 transition-all duration-300">
                            {/* Placeholder for Profile Image */}
                            {/*<div className="flex items-center justify-center h-full text-gray-600 font-mono text-xs text-center p-4">*/}
                            {/*  [Profile Image Placeholder]*/}
                            {/*  <br/>*/}
                            {/*  Put image in src/assets*/}
                            {/*</div>*/}
                            <img src="src/assets/profile-picture.jpg" alt="Profile" className="object-cover w-full h-full"/>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
