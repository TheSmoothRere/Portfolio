import {useState} from "react";
import {motion, useMotionValueEvent, useScroll} from "motion/react";
import {ListIcon, XIcon} from "@phosphor-icons/react";

const NAV_ITEMS = [
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-obsidian/80 backdrop-blur-md border-b border-spring-green/20 py-4"
                    : "bg-transparent py-6"
            }`}
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{duration: 0.5}}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#"
                   className="text-2xl font-mono font-bold tracking-tighter hover:text-spring-green transition-colors">
                    <span className="text-spring-green">&lt;</span>
                    TheSmoothRere
                    <span className="text-spring-green">/&gt;</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8">
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="relative text-sm font-mono text-gray-300 hover:text-spring-green transition-colors group"
                        >
                            <span className="text-spring-green mr-1">0{NAV_ITEMS.indexOf(item) + 1}.</span>
                            {item.name}
                            <span
                                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-spring-green transition-all duration-300 group-hover:w-full"/>
                        </a>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-spring-green transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <XIcon size={28}/> : <ListIcon size={28}/>}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{opacity: 0, y: -20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    className="absolute top-full left-0 right-0 bg-obsidian border-b border-spring-green/20 p-6 md:hidden flex flex-col gap-4 shadow-xl"
                >
                    {NAV_ITEMS.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-lg font-mono text-gray-300 hover:text-spring-green transition-colors block py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="text-spring-green mr-2">0{NAV_ITEMS.indexOf(item) + 1}.</span>
                            {item.name}
                        </a>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}
