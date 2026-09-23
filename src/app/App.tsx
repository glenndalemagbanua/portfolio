import Header from './components/section/Header';
import Hero from './components/section/Hero';
import About from './components/section/About';
import Skills from './components/section/Skills';
import Experience from './components/section/Experience';
import Project from './components/section/Project';
import SeoAeoFocus from './components/section/SeoAeoFocus';
import CurrentlyLearning from './components/section/CurrentlyLearning';
import Faq from './components/section/Faq';
import Contact from './components/section/Contact';
import Footer from './components/section/Footer';
import { ThemeProvider } from './store/themeStore';

export default function App() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'seo-aeo', label: 'SEO & AEO' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        <Header sections={sections} />

        <main className="pt-20">
          <Hero />
          <div className="dark:bg-zinc-900/30">
            <About />
          </div>
          <Experience />
          <div className="dark:bg-zinc-900/30">
            <Skills />
          </div>
          <Project />
          <div className="dark:bg-zinc-900/30">
            <SeoAeoFocus />
          </div>
          <CurrentlyLearning />
          <div className="dark:bg-zinc-900/30">
            <Faq />
          </div>
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
