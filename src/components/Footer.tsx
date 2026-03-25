import {CoffeeIcon, FacebookLogoIcon, GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon} from "@phosphor-icons/react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="py-8 text-center bg-obsidian border-t border-gray-800/50 relative z-10 flex flex-col items-center">
            <div className="flex justify-center gap-6 mb-4">
                <a
                    href="https://github.com/TheSmoothRere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-spring-green hover:-translate-y-1 transition-all duration-300"
                    aria-label="GitHub"
                >
                    <GithubLogoIcon size={24}/>
                </a>
                <a
                    href="https://www.linkedin.com/in/raehan-damai-putra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-spring-green hover:-translate-y-1 transition-all duration-300"
                    aria-label="LinkedIn"
                >
                    <LinkedinLogoIcon size={24}/>
                </a>
                <a
                    href="https://www.facebook.com/61576495942050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-spring-green hover:-translate-y-1 transition-all duration-300"
                    aria-label="Facebook"
                >
                    <FacebookLogoIcon size={24}/>
                </a>
                <a
                    href="https://www.instagram.com/thesmoothrere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-spring-green hover:-translate-y-1 transition-all duration-300"
                    aria-label="Instagram"
                >
                    <InstagramLogoIcon size={24}/>
                </a>
                <a
                    href="https://ko-fi.com/thesmoothrere"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-spring-green hover:-translate-y-1 transition-all duration-300"
                    aria-label="Instagram"
                >
                    <CoffeeIcon size={24}/>
                </a>
            </div>

            <a
                href="https://github.com/TheSmoothRere/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-gray-500 hover:text-spring-green transition-colors block mb-2"
            >
                Designed & Built by TheSmoothRere
            </a>

            <p className="font-mono text-[10px] text-gray-600">
                &copy; {currentYear} All Rights Reserved.
            </p>
        </footer>
    );
}
