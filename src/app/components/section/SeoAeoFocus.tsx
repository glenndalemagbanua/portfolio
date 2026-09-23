interface FocusCard {
  title: string;
  description: string;
  topics: string[];
}

const focusCards: FocusCard[] = [
  {
    title: 'Technical SEO',
    description: 'Core technical signals that support crawlability, indexing, and reliable website performance.',
    topics: ['Crawlability', 'Indexing', 'XML sitemaps', 'robots.txt', 'Canonical URLs', 'HTTP status codes', 'Mobile responsiveness', 'Page performance'],
  },
  {
    title: 'On-Page SEO',
    description: 'Page-level structure and content alignment to improve relevance and user understanding.',
    topics: ['Title tags', 'Meta descriptions', 'Heading hierarchy', 'Semantic HTML', 'Internal linking', 'Search intent', 'Content structure'],
  },
  {
    title: 'AEO',
    description: 'Answer-focused content formatting for modern search experiences and direct responses.',
    topics: ['Question-based content', 'Direct answers', 'Structured information', 'FAQ/Q&A content', 'Clear heading structures', 'Entity/topic relationships'],
  },
  {
    title: 'GEO',
    description: 'Content patterns that help AI-assisted search systems interpret and cite information clearly.',
    topics: ['AI-search-friendly content', 'Clear factual information', 'Structured content', 'Entity understanding', 'Citability and source clarity'],
  },
  {
    title: 'Structured Data',
    description: 'Schema-based markup patterns used to represent entities and page meaning.',
    topics: ['Schema.org', 'JSON-LD', 'Organization', 'Person', 'Article', 'Product', 'LocalBusiness where applicable'],
  },
];

export default function SeoAeoFocus() {
  return (
    <section id="seo-aeo" aria-labelledby="seo-aeo-heading" className="py-20">
      <div className="container mx-auto px-4">
        <h2 id="seo-aeo-heading" className="text-4xl font-bold mb-3 dark:text-white text-center">SEO &amp; AEO</h2>
        <p className="text-center text-gray-600 dark:text-zinc-400 mb-10 max-w-3xl mx-auto">
          SEO &amp; AEO Focus — areas where I&apos;m actively developing and applying search optimization knowledge alongside my full stack development background.
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {focusCards.map((card) => (
            <article
              key={card.title}
              className="backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-6 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2 text-emerald-400">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-zinc-400 mb-4">{card.description}</p>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-zinc-300">
                {card.topics.map((topic) => (
                  <li key={topic}>{topic}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
