import {
  BriefcaseIcon,
  CaretRightIcon,
  EnvelopeIcon,
  GithubLogoIcon,
  GlobeIcon,
  GraduationCapIcon,
  LinkedinLogoIcon,
  MapPinIcon,
  MedalIcon,
  PhoneIcon,
  PrinterIcon,
  StarIcon,
} from "@phosphor-icons/react";
import React from "react";

// Types for our CV Data
interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

interface Language {
  lang: string;
  level: string;
  pct: number;
}

interface CvData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Record<string, string[]>;
  languages: Language[];
  achievements: string[];
}

const cvData: CvData = {
  name: "Raehan Damai Putra",
  title: "Full-Stack Developer & Open Source Contributor",
  contact: {
    email: "raehanputra1261@gmail.com",
    phone: "+62 851 71662112",
    location: "Cirebon, West Java",
    website: "thesmoothrere-portfolio.pages.dev", // Updated to match your GitHub handle
    linkedin: "linkedin.com/in/raehan-damai-putra",
    github: "github.com/TheSmoothRere",
  },
  summary:
    "Result-driven Freelance Developer specialized in building scalable web applications and performance-optimized Java applications. Proven track record in open-source development, maintaining projects with 100k+ downloads. Expert in bridging the gap between complex backend logic and modern, responsive frontend interfaces.",
  experience: [
    {
      id: 1,
      role: "Full-Stack Developer (Freelance)",
      company: "Self-Employed",
      period: "March 2024 - Present",
      location: "Remote",
      bullets: [
        "Engineered high-performance Minecraft mods using Java, achieving 100,000+ unique downloads through community-driven feature updates and rigorous debugging.",
        "Architected custom Discord automation bots for large-scale communities, optimizing API interactions to handle high-concurrency event listeners.",
        "Developed and deployed responsive web using Next.js and Tailwind CSS.",
      ],
    },
    {
      id: 2,
      role: "Administrative Operations",
      company: "CV. Rejeki Dua Putra",
      period: "April 2025 - July 2025",
      location: "Cirebon, West Java",
      bullets: [
        "Streamlined digital communications and documentation workflows, reducing internal response times for incoming/outgoing correspondence.",
        "Coordinated social media strategy and content distribution, enhancing the company’s digital presence and professional brand image.",
        "Maintained meticulous digital archives and records management to ensure 100% compliance with internal auditing standards.",
      ],
    },
  ],
  education: [
    {
      id: 1,
      degree: "Vocational High School - Computer and Network Engineering",
      institution: "SMK PGRI 1 Palimanan",
      period: "2020 - 2023",
      detail:
        "Focused on Network Infrastructure, Systems Administration, and Hardware Troubleshooting.",
    },
  ],
  skills: {
    Frontend: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
    Backend: [
      "Node.js",
      "Java (Forge/Fabric)",
      "Spring Boot",
      "REST APIs",
      "PostgreSQL",
      "Redis",
    ],
    "DevOps & Cloud": [
      "Docker",
      "CI/CD (GitHub Actions)",
      "Cloudflare",
      "Railway",
    ],
    Tools: ["Git", "Postman", "IntelliJ IDEA", "VS Code"],
  },
  languages: [
    { lang: "Indonesian", level: "Native", pct: 100 },
    { lang: "English", level: "Professional Working", pct: 85 },
  ],
  achievements: [
    "Lead Developer of open-source Minecraft projects with >100,000 global downloads.",
    "Certified Computer & Network Technician (Vocational Competency).",
  ],
};

export default function CvPage() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 print:py-0 print:px-0 print:bg-white">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none">
        {/* Header - Optimized for No Photo */}
        <div className="bg-linear-to-r from-slate-800 to-slate-700 text-white px-10 py-12">
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-white mb-2">
              {cvData.name}
            </h1>
            <p className="text-slate-300 text-xl mb-6 font-medium">
              {cvData.title}
            </p>
            <div className="flex flex-wrap justify-center sm:justify-StarIcont gap-x-6 gap-y-3 text-slate-300 text-sm">
              <ContactItem
                icon={<EnvelopeIcon size={18} />}
                label={cvData.contact.email}
              />
              <ContactItem
                icon={<PhoneIcon size={18} />}
                label={cvData.contact.phone}
              />
              <ContactItem
                icon={<MapPinIcon size={18} />}
                label={cvData.contact.location}
              />
              <ContactItem
                icon={<GlobeIcon size={18} />}
                label={cvData.contact.website}
              />
              <ContactItem
                icon={<LinkedinLogoIcon size={18} />}
                label={cvData.contact.linkedin}
              />
              <ContactItem
                icon={<GithubLogoIcon size={18} />}
                label={cvData.contact.github}
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Column */}
          <div className="lg:w-2/3 px-8 py-8 space-y-8 border-r border-slate-100">
            <Section title="Professional Summary">
              <p className="text-slate-600 leading-relaxed text-sm">
                {cvData.summary}
              </p>
            </Section>

            <Section
              title="Work Experience"
              icon={<BriefcaseIcon size={20} weight="duotone" />}
            >
              <div className="space-y-8">
                {cvData.experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="relative pl-6 border-l-2 border-slate-200"
                  >
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-slate-700 border-2 border-white shadow" />
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <div>
                        <h3 className="text-slate-800 font-bold text-base">
                          {exp.role}
                        </h3>
                        <p className="text-slate-500 text-sm font-medium">
                          {exp.company} — {exp.location}
                        </p>
                      </div>
                      <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-3 py-1 rounded-full whitespace-nowrap self-StarIcont sm:self-center">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {exp.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-slate-600 leading-snug"
                        >
                          <CaretRightIcon
                            size={14}
                            className="mt-1 text-slate-400 shrink-0"
                            weight="bold"
                          />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              title="Education"
              icon={<GraduationCapIcon size={20} weight="duotone" />}
            >
              <div className="space-y-6">
                {cvData.education.map((edu) => (
                  <div
                    key={edu.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                  >
                    <div>
                      <h3 className="text-slate-800 font-bold">{edu.degree}</h3>
                      <p className="text-slate-500 text-sm">
                        {edu.institution}
                      </p>
                      <p className="text-slate-400 text-xs mt-0.5">
                        {edu.detail}
                      </p>
                    </div>
                    <span className="text-xs bg-slate-100 text-slate-500 px-3 py-1 rounded-full whitespace-nowrap self-StarIcont sm:self-center">
                      {edu.period}
                    </span>
                  </div>
                ))}
              </div>
            </Section>

            <Section
              title="Achievements"
              icon={<MedalIcon size={20} weight="duotone" />}
            >
              <ul className="grid grid-cols-1 gap-3">
                {cvData.achievements.map((a, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm text-slate-600 items-StarIcont"
                  >
                    <StarIcon
                      size={18}
                      weight="fill"
                      className="text-amber-400 shrink-0"
                    />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Section>
          </div>

          {/* Right Column */}
          <div className="lg:w-1/3 bg-slate-50 px-7 py-8 space-y-8">
            <Section title="Technical Skills">
              <div className="space-y-5">
                {Object.entries(cvData.skills).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                      {category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs bg-slate-700 text-white px-2.5 py-1 rounded-md font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Languages">
              <div className="space-y-4">
                {cvData.languages.map((l) => (
                  <div key={l.lang}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-700 font-medium">
                        {l.lang}
                      </span>
                      <span className="text-slate-400 text-xs">{l.level}</span>
                    </div>
                    <div className="h-1.5 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-slate-700 rounded-full transition-all duration-500"
                        style={{ width: `${l.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <div className="print:hidden pt-6">
              <button
                onClick={() => window.print()}
                className="w-full flex items-center justify-center gap-2 bg-slate-800 hover:bg-black text-white text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-lg active:scale-95"
              >
                <PrinterIcon size={20} />
                Download / Print CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Helper Components ---

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

function Section({ title, icon, children }: SectionProps) {
  return (
    <section>
      <div className="flex items-center gap-2 mb-5">
        {icon && <span className="text-slate-700">{icon}</span>}
        <h2 className="text-slate-800 font-bold uppercase tracking-[0.2em] text-[11px] border-b-2 border-slate-100 pb-1 w-full">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
}

function ContactItem({ icon, label }: ContactItemProps) {
  return (
    <span className="flex items-center gap-2">
      <span className="text-slate-400">{icon}</span>
      <span className="hover:text-white transition-colors cursor-default">
        {label}
      </span>
    </span>
  );
}
