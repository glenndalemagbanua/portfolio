import { Github } from 'lucide-react';

export default function Hero() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/glenn-dale-magbanua-resume.pdf';
    link.download = 'glenn-dale-magbanua-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="grid place-items-center text-center">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-5">
            <div className="w-44 relative">
              <img
                className="w-44 h-44 rounded-full object-cover ring-4 ring-emerald-500 ring-offset-4 ring-offset-white dark:ring-offset-zinc-950"
                src="/images/profile.jpg"
                alt="Portrait of Glenn Dale Magbanua"
                fetchPriority="high"
              />
              <span className="absolute bottom-3 right-3 flex h-5 w-5" role="status" aria-label="Online" title="Online">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-5 w-5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950"></span>
              </span>
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Glenn Dale Magbanua</h1>
              <p className="text-5xl font-bold mb-6">
                <span className="text-3xl bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Full Stack Web Developer | SEO & AEO</span>
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">Building responsive, accessible, and search-optimized web experiences with React, Vue.js, Laravel, and modern web technologies.</p>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mt-3">3 years of professional web development experience across frontend and backend development, with a growing focus on Technical SEO, AEO, and GEO.</p>
          <a
            href="https://github.com/glenndalemagbanua"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-200 font-semibold hover:border-emerald-500 hover:text-emerald-500 transition-colors"
          >
            <Github size={18} /> GitHub Profile
          </a>
          <div className="mt-8 flex flex-wrap justify-center gap-3 md:hidden">
            <a href="#projects" className="inline-block px-6 py-3 rounded-full bg-emerald-500 text-white font-semibold hover:bg-emerald-600 transition-colors">View Projects</a>
            <a href="#about" className="inline-block px-6 py-3 rounded-full border border-emerald-500 text-emerald-500 font-semibold hover:bg-emerald-500 hover:text-white transition-colors">About Me</a>
            <a href="#contact" className="inline-block px-6 py-3 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-200 font-semibold hover:border-emerald-500 hover:text-emerald-500 transition-colors">Contact Me</a>
            <button
              type="button"
              onClick={handleDownload}
              className="inline-block px-6 py-3 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-200 font-semibold hover:border-emerald-500 hover:text-emerald-500 transition-colors"
            >
              Download Resume
            </button>
          </div>
        </div>
        <div>
          <div className="w-full flex justify-center">
            <div className="mt-4 grid grid-cols-1 gap-8 md:w-1/2">
              <div className="p-6 rounded-xl backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 px-auto md:px-16 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Top Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-cyan-400">Full Stack [React, Vue.js, Laravel, PHP]</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-red-300">Backend [Node.js, Python, .NET, Java]</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-purple-300">Search Optimization [Technical SEO, AEO, GEO]</span>
                  <span className="px-3 py-1 rounded-full bg-zinc-800 text-sm text-indigo-300">Data & APIs [MySQL, PostgreSQL, REST APIs]</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
