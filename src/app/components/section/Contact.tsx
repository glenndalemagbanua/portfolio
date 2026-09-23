import { Github, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 id="contact-heading" className="text-4xl font-bold mb-8 dark:text-white">Let&apos;s Connect</h2>
        <p className="text-xl text-gray-600 dark:text-zinc-400 mb-8">Available for web development, frontend development, technical SEO, AEO, and website optimization opportunities.</p>
        <a href="mailto:glenndalemagbanua@gmail.com" className="inline-block px-8 py-4 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors" aria-label="Send email to Glenn Dale Magbanua">Contact Me</a>
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
          <a
            href="https://github.com/glenndalemagbanua"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="mailto:glenndalemagbanua@gmail.com"
            aria-label="Email Glenn Dale Magbanua"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-300 dark:border-zinc-700 text-gray-800 dark:text-gray-200 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
          >
            <Mail size={16} /> Email
          </a>
        </div>
      </div>
    </section>
  )
}
