export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-20">
      <div className="container mx-auto px-4">
        <h2 id="about-heading" className="text-4xl font-bold mb-8 dark:text-white text-center">About</h2>
        <div className="max-w-4xl mx-auto backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-8 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors">
          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed mb-5">
            I&apos;m Glenn Dale Magbanua, an SEO &amp; AEO specialist, web developer, and AI engineer with 3 years of professional experience building and maintaining web applications using React, Vue.js, Laravel, PHP, JavaScript, and Python.
          </p>
          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed mb-5">
            My background in frontend and backend development gives me a strong foundation in technical website optimization, including responsive design, semantic HTML, accessibility, performance, structured content, and user experience.
          </p>
          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed mb-5">
            I&apos;m currently expanding my expertise in SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization), with a focus on helping websites become more discoverable across traditional search engines and AI-powered search platforms.
          </p>
          <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
            I enjoy combining software development and search optimization to build websites that are technically sound, user-friendly, and easier for search engines and AI systems to understand.
          </p>
        </div>
      </div>
    </section>
  );
}
