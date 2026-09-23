const learningItems = [
  'Technical SEO',
  'AEO',
  'GEO',
  'Google Search Console',
  'GA4',
  'Schema Markup',
  'Structured Data',
  'Core Web Vitals',
  'SEO Auditing',
  'Search Intent',
  'AI Search Optimization',
];

export default function CurrentlyLearning() {
  return (
    <section id="currently-learning" aria-labelledby="currently-learning-heading" className="py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-6">
          <h2 id="currently-learning-heading" className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Currently Learning</h2>
          <div className="flex flex-wrap gap-2">
            {learningItems.map((item) => (
              <span key={item} className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-emerald-400">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
