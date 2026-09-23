import { ArrowRight } from 'lucide-react';

interface ProjectItem {
  title: string;
  description: string;
  contribution: string;
  url: string;
  githubUrl?: string;
  image: string;
  imageAlt: string;
  technologies: string[];
}

const SITE_URL = 'https://glenndale.vercel.app';
const GITHUB_PROFILE_URL = 'https://github.com/glenndalemagbanua';

const projects: ProjectItem[] = [
  {
    title: 'XerveLab',
    description: 'Web platform for managing laboratory-related workflows and records through a clean, responsive interface.',
    contribution: 'Built and integrated full stack features, focusing on maintainable UI patterns, API integration, and reliable data handling.',
    url: 'https://xervelab.online',
    image: 'https://xervelab.online/images/xl-logo.png',
    imageAlt: 'XerveLab logo — full stack laboratory workflow web platform built with Laravel and React',
    technologies: ['Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    title: 'San Vicente BIS',
    description: 'Barangay information system designed to streamline local records, requests, and day-to-day administrative processes.',
    contribution: 'Implemented responsive pages and reusable components to improve usability across desktop and mobile devices.',
    url: 'https://san-vicente-bis.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    imageAlt: 'San Vicente BIS logo — barangay information system built with Laravel and React',
    technologies: ['Laravel', 'React.js', 'TypeScript', 'Tailwind CSS', 'MySQL'],
  },
  {
    title: "Gijey's Diner",
    description: 'Restaurant-style web experience showcasing menu and brand presentation with a modern responsive interface.',
    contribution: 'Built frontend views with attention to layout consistency, readable content hierarchy, and smooth interactions.',
    url: 'https://gijeys-diner.vercel.app/',
    image: 'https://san-vicente-bis.vercel.app/favicon.svg',
    imageAlt: "Gijey's Diner logo — responsive restaurant web experience built with React",
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS'],
  },
];

const projectsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Projects by Glenn Dale Magbanua',
  description: 'Selected full stack and frontend web development projects built by Glenn Dale Magbanua.',
  url: `${SITE_URL}/#projects`,
  numberOfItems: projects.length,
  itemListElement: projects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      url: project.url,
      image: project.image,
      keywords: project.technologies.join(', '),
      creator: {
        '@type': 'Person',
        name: 'Glenn Dale Magbanua',
        url: SITE_URL,
      },
    },
  })),
};

export default function Project() {
  return (
    <div className="container mx-auto max-w-8xl px-4">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsStructuredData) }}
      />
      <section id="projects" aria-labelledby="projects-heading" className="py-20">
        <div className="container mx-auto px-4">
          <h2 id="projects-heading" className="text-4xl font-bold mb-12 dark:text-white text-center">
            Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-zinc-400 mb-10 max-w-3xl mx-auto">
            Selected full stack and frontend projects. More repositories are available on my{' '}
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Glenn Dale Magbanua's GitHub profile"
              className="text-emerald-500 hover:text-emerald-400 transition-colors"
            >
              GitHub Profile
            </a>
            .
          </p>
          <div className="max-w-7xl mx-auto space-y-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0">
              {projects.map((project) => {
                const headingId = `project-${project.title.replace(/[^a-z0-9]+/gi, '-').toLowerCase()}`;
                return (
                  <li key={project.title}>
                    <article
                      aria-labelledby={headingId}
                      className="h-full backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-5 sm:p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors"
                    >
                      <div className="mb-3 flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 shrink-0 rounded-xl border border-zinc-800 bg-zinc-900/70 overflow-hidden flex items-center justify-center">
                          <img
                            className="w-full h-full object-contain p-1.5 sm:p-2"
                            src={project.image}
                            alt={project.imageAlt}
                            width="128"
                            height="128"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 id={headingId} className="text-xl font-semibold mb-2 text-emerald-400 wrap-anywhere">
                            {project.title}
                          </h3>
                          <p className="text-zinc-400 mb-2.5 text-sm leading-relaxed">{project.description}</p>
                          <p className="text-zinc-300 mb-3 text-sm leading-relaxed">
                            <span className="font-semibold text-zinc-200">My contribution:</span> {project.contribution}
                          </p>
                        </div>
                      </div>
                      <ul className="flex flex-wrap gap-2 mb-3 list-none p-0 m-0" aria-label={`Technologies used in ${project.title}`}>
                        {project.technologies.map((tech) => (
                          <li key={tech} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">
                            {tech}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View the live demo of ${project.title} (opens in a new tab)`}
                          className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          Live Demo <ArrowRight size={16} className="ml-1" aria-hidden="true" />
                        </a>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View the GitHub repository for ${project.title} (opens in a new tab)`}
                            className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                          >
                            GitHub Repository <ArrowRight size={16} className="ml-1" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
            <div className="text-center">
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View more of Glenn Dale Magbanua's work on GitHub (opens in a new tab)"
                className="inline-flex items-center text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                View more work on GitHub <ArrowRight size={16} className="ml-1" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
