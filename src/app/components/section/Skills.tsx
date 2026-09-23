import {
  Layout,
  Server,
  Database,
  Search,
  BarChart3,
  Sparkles,
  GitBranch,
  Kanban,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  iconColor: string;
  gradient: string;
  hoverBorder: string;
  chipColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
    icon: Layout,
    iconColor: 'text-purple-600 dark:text-purple-400',
    gradient: 'from-purple-500/20 via-purple-500/5 to-transparent',
    hoverBorder: 'hover:border-purple-500/50',
    chipColor: 'text-purple-700 dark:text-purple-300',
    skills: [
      'Vue.js',
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Tailwind CSS',
      'Responsive Web Design',
      'Semantic HTML',
      'Web Accessibility',
    ],
  },
  {
    title: 'Backend & Programming',
    icon: Server,
    iconColor: 'text-teal-600 dark:text-teal-400',
    gradient: 'from-teal-500/20 via-teal-500/5 to-transparent',
    hoverBorder: 'hover:border-teal-500/50',
    chipColor: 'text-teal-700 dark:text-teal-300',
    skills: ['Laravel', 'PHP', '.NET', 'Python', 'Node.js', 'Java', 'REST APIs'],
  },
  {
    title: 'Database',
    icon: Database,
    iconColor: 'text-orange-600 dark:text-orange-400',
    gradient: 'from-orange-500/20 via-orange-500/5 to-transparent',
    hoverBorder: 'hover:border-orange-500/50',
    chipColor: 'text-orange-700 dark:text-orange-300',
    skills: ['MySQL', 'PostgreSQL', 'SQL', 'Database Management'],
  },
  {
    title: 'SEO & AEO',
    icon: Search,
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    gradient: 'from-emerald-500/20 via-emerald-500/5 to-transparent',
    hoverBorder: 'hover:border-emerald-500/50',
    chipColor: 'text-emerald-700 dark:text-emerald-300',
    skills: [
      'Technical SEO',
      'On-Page SEO',
      'Keyword Research',
      'Search Intent',
      'Content Optimization',
      'AEO',
      'GEO',
      'Structured Data',
      'Schema Markup',
      'Internal Linking',
      'Core Web Vitals',
      'Website Accessibility',
      'Web Performance',
    ],
  },
  {
    title: 'SEO & Analytics Tools',
    icon: BarChart3,
    iconColor: 'text-red-600 dark:text-red-400',
    gradient: 'from-red-500/20 via-red-500/5 to-transparent',
    hoverBorder: 'hover:border-red-500/50',
    chipColor: 'text-red-700 dark:text-red-300',
    skills: [
      'Google Search Console',
      'Google Analytics 4',
      'Google Keyword Planner',
      'Google Trends',
      'Google PageSpeed Insights',
      'Google Rich Results Test',
      'Screaming Frog',
      'Semrush',
      'Ahrefs',
    ],
  },
  {
    title: 'AI Search Platforms',
    icon: Sparkles,
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    gradient: 'from-indigo-500/20 via-indigo-500/5 to-transparent',
    hoverBorder: 'hover:border-indigo-500/50',
    chipColor: 'text-indigo-700 dark:text-indigo-300',
    skills: ['Google AI Overviews', 'ChatGPT', 'Google Gemini', 'Microsoft Copilot', 'Perplexity'],
  },
  {
    title: 'DevOps & Development',
    icon: GitBranch,
    iconColor: 'text-cyan-600 dark:text-cyan-400',
    gradient: 'from-cyan-500/20 via-cyan-500/5 to-transparent',
    hoverBorder: 'hover:border-cyan-500/50',
    chipColor: 'text-cyan-700 dark:text-cyan-300',
    skills: ['Git', 'GitLab', 'CI/CD', 'Linux/Ubuntu', 'Docker'],
  },
  {
    title: 'Project Management',
    icon: Kanban,
    iconColor: 'text-fuchsia-600 dark:text-fuchsia-400',
    gradient: 'from-fuchsia-500/20 via-fuchsia-500/5 to-transparent',
    hoverBorder: 'hover:border-fuchsia-500/50',
    chipColor: 'text-fuchsia-700 dark:text-fuchsia-300',
    skills: ['Jira', 'Confluence', 'Agile/Scrum', 'Redmine'],
  },
  {
    title: 'Other',
    icon: Wrench,
    iconColor: 'text-lime-600 dark:text-lime-400',
    gradient: 'from-lime-500/20 via-lime-500/5 to-transparent',
    hoverBorder: 'hover:border-lime-500/50',
    chipColor: 'text-lime-700 dark:text-lime-300',
    skills: ['Debugging', 'Automation', 'System Troubleshooting', 'Performance Optimization', 'Content/Field Mapping'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Skills</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <article
                key={category.title}
                className={`group relative overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/40 p-6 transition-colors ${category.hoverBorder}`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-70`}
                  aria-hidden="true"
                />
                <div className="relative">
                  <div className="mb-4">
                    <Icon className={category.iconColor} size={28} strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`text-xs px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800/80 ${category.chipColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
