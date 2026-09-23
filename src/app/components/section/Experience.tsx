import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
  technologies: string[];
}

const VISIBLE_RESPONSIBILITIES_COUNT = 3;

const experiences: ExperienceItem[] = [
  {
    id: 'getcare',
    title: 'Front-end Developer & SEO Specialist',
    company: 'Z Getcare Systems Inc.',
    period: 'Jan 2025 – Present',
    responsibilities: [
      'Develop responsive, user-friendly frontend layouts and interfaces using Vue.js, React.js, JavaScript, HTML, and CSS based on provided design mockups and requirements.',
      'Implement application functionality and perform content/field mapping according to development requirements, ensuring accurate page structure and information presentation.',
      'Apply frontend development practices that support SEO-friendly and accessible web pages, including proper page structure, semantic markup, responsive layouts, and user-focused interfaces.',
      'Resolve bugs, UI issues, and layout problems while improving website usability, accessibility, responsiveness, and overall user experience.',
      'Work with PHP, Laravel, Vue.js, React.js, and JavaScript in developing and maintaining web applications, with consideration for performance and maintainability.',
      'Work with MySQL and PostgreSQL databases and SQL scripts/functions to support application functionality and data-driven web content.',
      'Use Ubuntu as the local development environment for application development, testing, and issue replication.',
      'Use Git and GitLab for source control, branch management, merge requests, code collaboration, and version tracking.',
      'Participate in GitLab CI/CD processes supporting automated testing, builds, and deployment workflows.',
      'Use Jira for task tracking, sprint planning, issue management, and development coordination.',
      'Use Confluence for technical documentation, knowledge sharing, and team collaboration.',
      'Collaborate with team members to translate design, content, and technical requirements into optimized, responsive, and user-friendly web experiences.',
    ],
    technologies: ['Vue.js', 'React.js', 'JavaScript', 'HTML', 'CSS', 'PHP', 'Laravel', 'MySQL', 'PostgreSQL', 'SQL', 'Git', 'GitLab', 'CI/CD', 'Ubuntu', 'Jira', 'Confluence'],
  },
  {
    id: 'inari',
    title: 'Programmer',
    company: 'Inari Amertron Inc.',
    period: 'Aug 2023 – Dec 2024',
    responsibilities: [
      'Developed standalone applications supporting company business transactions.',
      'Maintained and enhanced existing systems by identifying and resolving software issues and bugs.',
      'Supported large-scale ERP, MES, and PSIS platforms used within the organization.',
      'Collaborated with fellow developers to build, maintain, and enhance business applications.',
      'Applied programming, debugging, database management, and system troubleshooting skills in an enterprise environment.',
    ],
    technologies: ['PHP', 'JavaScript', 'Visual Basic', 'MySQL', 'ERP', 'MES', 'PSIS'],
  },
  {
    id: 'arcen',
    title: 'Full Stack Developer (OJT)',
    company: '2nd ARCEN Philippine Air Force',
    period: 'March 2023 – June 2023',
    responsibilities: [
      'Developed the Philippine Air Force Reservist Management System.',
      'Integrated the system with Infocast to support reservist management processes.',
      'Contributed to both frontend and backend development as part of the development team.',
    ],
    technologies: ['JavaScript', 'Laravel', 'MySQL', 'Full Stack Development'],
  },
];

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleResponsibilities = exp.responsibilities.slice(0, VISIBLE_RESPONSIBILITIES_COUNT);
  const hiddenResponsibilities = exp.responsibilities.slice(VISIBLE_RESPONSIBILITIES_COUNT);
  const hasHiddenResponsibilities = hiddenResponsibilities.length > 0;
  const detailsId = `experience-${exp.id}`;

  return (
    <article className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-5 sm:p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-1">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-emerald-400 break-words">{exp.title}</h3>
          <p className="text-gray-600 dark:text-zinc-400 break-words">{exp.company}</p>
        </div>
        <p className="text-sm text-gray-600 dark:text-zinc-500 mt-1 md:mt-0">{exp.period}</p>
      </div>

      <ul className="list-disc list-inside space-y-2 mb-3 text-gray-600 dark:text-zinc-300">
        {visibleResponsibilities.map((item) => (
          <li key={item} className="text-sm leading-relaxed">{item}</li>
        ))}
      </ul>

      <div
        id={detailsId}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[1400px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="list-disc list-inside space-y-2 mb-3 text-gray-600 dark:text-zinc-300">
          {hiddenResponsibilities.map((item) => (
            <li key={item} className="text-sm leading-relaxed">{item}</li>
          ))}
        </ul>
      </div>

      {hasHiddenResponsibilities && (
        <button
          type="button"
          aria-expanded={isExpanded}
          aria-controls={detailsId}
          onClick={() => setIsExpanded((prev) => !prev)}
          className="mb-5 inline-flex items-center gap-1 text-sm text-emerald-400 hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/80 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-900 rounded-sm transition-colors"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              See More <ChevronDown size={16} />
            </>
          )}
        </button>
      )}

      <div className="flex flex-wrap gap-2">
        {exp.technologies.map((tech) => (
          <span key={tech} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-20">
      <div className="container mx-auto px-4">
        <h2 id="experience-heading" className="text-4xl font-bold mb-12 dark:text-white text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
