import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white/80 dark:bg-zinc-950 transition-colors py-8 border-t dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 dark:text-gray-400">
          © 2026 Glenn Dale Magbanua
        </p>
        <p className="text-gray-600 dark:text-gray-400 mt-2">Full Stack Web Developer | SEO &amp; AEO</p>
        <a
          href="https://github.com/glenndalemagbanua"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="mt-3 inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
        >
          <Github size={16} /> github.com/glenndalemagbanua
        </a>
      </div>
    </footer>
  )
}
