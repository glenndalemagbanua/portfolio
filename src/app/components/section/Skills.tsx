interface SkillCategory {
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Development',
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
    skills: ['Laravel', 'PHP', '.NET', 'Python', 'Node.js', 'Java', 'REST APIs'],
  },
  {
    title: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'SQL', 'Database Management'],
  },
  {
    title: 'SEO & AEO',
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
    skills: ['Google AI Overviews', 'ChatGPT', 'Google Gemini', 'Microsoft Copilot', 'Perplexity'],
  },
  {
    title: 'DevOps & Development',
    skills: ['Git', 'GitLab', 'CI/CD', 'Linux/Ubuntu', 'Docker'],
  },
  {
    title: 'Project Management',
    skills: ['Jira', 'Confluence', 'Agile/Scrum', 'Redmine'],
  },
  {
    title: 'Other',
    skills: ['Debugging', 'Automation', 'System Troubleshooting', 'Performance Optimization', 'Content/Field Mapping'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 dark:text-white text-center">Skills</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <article
              key={category.title}
              className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-6 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
