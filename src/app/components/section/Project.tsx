import { ArrowRight } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  contribution: string;
  url: string;
  githubUrl?: string;
  image: string;
  technologies: string[];
}

const projects: ProjectItem[] = [
  {
    title: 'XerveLab',
    description: 'Web platform for managing laboratory-related workflows and records through a clean, responsive interface.',
    contribution: 'Built and integrated full stack features, focusing on maintainable UI patterns, API integration, and reliable data handling.',
    url: 'https://xervelab.online',
    image: 'https://xervelab.online/images/xl-logo.png',
    technologies: ['Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    title: 'San Vicente BIS',
    description: 'Barangay information system designed to streamline local records, requests, and day-to-day administrative processes.',
    contribution: 'Implemented responsive pages and reusable components to improve usability across desktop and mobile devices.',
    url: 'https://san-vicente-bis.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    technologies: ['Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    title: 'Scanify',
    description: 'QR-based web utility that supports quick scanning and interaction with external or internal resource links.',
    contribution: 'Developed a lightweight React interface with API-driven behavior and a clear, task-focused user flow.',
    url: 'https://scanify-qr.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    technologies: ['React.js', 'TypeScript', 'API'],
  },
  {
    title: "Gijey's Diner",
    description: 'Restaurant-style web experience showcasing menu and brand presentation with a modern responsive interface.',
    contribution: 'Built frontend views with attention to layout consistency, readable content hierarchy, and smooth interactions.',
    url: 'https://gijeys-diner.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
  },
];

export default function Project() {
  return (
    <div className="container mx-auto max-w-8xl px-4">
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Projects</h2>
          <p className="text-center text-gray-600 dark:text-zinc-400 mb-10 max-w-3xl mx-auto">
            Selected full stack and frontend projects. More repositories are available on my{' '}
            <a
              href="https://github.com/glenndalemagbanua"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              GitHub Profile
            </a>
            .
          </p>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-5 sm:p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors"
                >
                  <div className="mb-3 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl border border-zinc-800 bg-zinc-900/70 overflow-hidden flex items-center justify-center">
                      <img
                        className="w-full h-full object-contain p-1.5 sm:p-2"
                        src={project.image}
                        alt={`${project.title} project logo`}
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-semibold mb-2 text-emerald-400 wrap-anywhere">{project.title}</h3>
                      <p className="text-zinc-400 mb-2.5 text-sm leading-relaxed">{project.description}</p>
                      <p className="text-zinc-300 mb-3 text-sm leading-relaxed"><span className="font-semibold text-zinc-200">My contribution:</span> {project.contribution}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      Live Demo <ArrowRight size={16} className="ml-1" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        GitHub Repository <ArrowRight size={16} className="ml-1" />
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center">
              <a
                href="https://github.com/glenndalemagbanua"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View more work on GitHub <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
