import {motion} from "motion/react";
import {PaperPlaneRightIcon} from "@phosphor-icons/react";

export default function Contact() {
    return (
        <section id="contact" className="py-32 px-6 relative flex flex-col items-center text-center">

            {/* Background Decoration */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-spring-green/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="max-w-2xl mx-auto"
            >
                <p className="text-spring-green font-mono mb-4">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Get In Touch</h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                    I'm currently looking for new opportunities, and my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <a
                    href="mailto:thesmoothrere@gmail.com"
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-spring-green text-spring-green font-mono text-lg rounded hover:bg-spring-green/10 transition-all duration-300"
                >
                    <PaperPlaneRightIcon size={24}
                                         className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"/>
                    Say Hello
                </a>

            </motion.div>
        </section>
    );
}
