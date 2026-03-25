import {motion, type Variants} from "motion/react";
import {ArrowDownIcon, GithubLogoIcon, LinkedinLogoIcon, EnvelopeSimpleIcon} from "@phosphor-icons/react";

export default function Hero() {
    const container: Variants = {
        hidden: {opacity: 0},
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const item: Variants = {
        hidden: {opacity: 0, y: 30},
        show: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 50}},
    };

    return (
        <section id="hero"
                 className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-20">

            {/* Background decoration - optional subtle glow */}
            <div
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-spring-green/5 rounded-full blur-3xl -z-10 pointer-events-none"/>

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="max-w-4xl px-6 text-center z-10"
            >
                <motion.p variants={item} className="text-spring-green font-mono text-lg mb-4">
                    Hi, my name is
                </motion.p>

                <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-gray-100 mb-4 tracking-tight">
                    Rere.
                </motion.h1>

                <motion.h2 variants={item} className="text-4xl md:text-6xl font-bold text-gray-400 mb-8">
                    I build things for the internet.
                </motion.h2>

                <motion.p variants={item}
                          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                    I'm a freelance developer and Minecraft modder with a passion for creating unique digital
                    experiences.
                    From powerful backend systems to engaging frontend interfaces, I love bringing ideas to life.
                </motion.p>

                {/* Call to Action Buttons */}
                <motion.div variants={item} className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded border border-spring-green text-spring-green font-mono hover:bg-spring-green/10 transition-colors duration-300"
                    >
                        Check out my work!
                    </a>

                    <div className="flex gap-6 md:ml-6 mt-4 md:mt-0">
                        <a href="https://github.com/TheSmoothRere" target="_blank" rel="noopener noreferrer"
                           className="text-gray-300 hover:text-spring-green hover:-translate-y-1 transition-all duration-300">
                            <GithubLogoIcon size={32}/>
                        </a>
                        <a href="https://www.linkedin.com/in/raehan-damai-putra/" target="_blank"
                           rel="noopener noreferrer"
                           className="text-gray-300 hover:text-spring-green hover:-translate-y-1 transition-all duration-300">
                            <LinkedinLogoIcon size={32}/>
                        </a>
                        <a href="mailto:thesmoothrere@gmail.com"
                           className="text-gray-300 hover:text-spring-green hover:-translate-y-1 transition-all duration-300">
                            <EnvelopeSimpleIcon size={32}/>
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, y: [0, 10, 0]}}
                transition={{delay: 1.5, duration: 1.5, repeat: Infinity}}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
            >
                <div className="flex flex-col items-center gap-2">
                    <span className="text-xs font-mono rotate-90 origin-left translate-y-8 translate-x-2">SCROLL</span>
                    <div className="w-px h-24 bg-linear-to-b from-transparent via-spring-green to-transparent"/>
                    <ArrowDownIcon size={24} className="text-spring-green"/>
                </div>
            </motion.div>

        </section>
    );
}
