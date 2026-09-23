interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Who is Glenn Dale Magbanua?',
    answer:
      'Glenn Dale Magbanua is an SEO & AEO specialist, web developer, and AI engineer with 3 years of professional experience building and maintaining web applications, with a focus on Technical SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO).',
  },
  {
    question: 'What does Glenn Dale Magbanua do?',
    answer:
      'He builds responsive, accessible, and search-optimized websites and web applications, and works on making sites more discoverable across traditional search engines and AI-powered answer engines through Technical SEO, AEO, and GEO.',
  },
  {
    question: 'What technologies does Glenn Dale Magbanua use?',
    answer:
      'He works with React, Vue.js, JavaScript, TypeScript, HTML, and CSS on the frontend, and Laravel, PHP, Python, and Node.js on the backend, along with MySQL, PostgreSQL, SQL, REST APIs, Git, Docker, and CI/CD.',
  },
  {
    question: "What is Glenn Dale Magbanua's experience?",
    answer:
      'He has 3 years of professional experience across frontend and backend development, including roles as a Front-end Developer & SEO Specialist at Z Getcare Systems Inc. and a Programmer at Inari Amertron Inc., plus full stack development during an internship with the 2nd ARCEN Philippine Air Force.',
  },
  {
    question: 'What projects has Glenn Dale Magbanua built?',
    answer:
      "His portfolio includes XerveLab, a full stack laboratory workflow platform built with Laravel and React; San Vicente BIS, a barangay information system; and Gijey's Diner, a responsive restaurant web experience built with React.",
  },
  {
    question: 'What areas does Glenn Dale Magbanua specialize in?',
    answer:
      'He specializes in full stack and frontend web development combined with search optimization, including Technical SEO, On-Page SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and structured data.',
  },
];

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-20">
      <div className="container mx-auto px-4">
        <h2 id="faq-heading" className="text-4xl font-bold mb-3 dark:text-white text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 dark:text-zinc-400 mb-10 max-w-3xl mx-auto">
          Quick answers about who I am, what I do, and the technologies and services I work with.
        </p>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group backdrop-blur border dark:border-zinc-800 dark:bg-zinc-900/50 rounded-xl p-5 sm:p-6 dark:hover:border-emerald-400/50 hover:border-emerald-400 transition-colors"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base sm:text-lg font-semibold text-gray-900 dark:text-white marker:content-none">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-emerald-400 transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-700 dark:text-zinc-300">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
