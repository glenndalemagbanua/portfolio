import Header from './components/section/Header';
import Hero from './components/section/Hero';
import About from './components/section/About';
import Skills from './components/section/Skills';
import Experience from './components/section/Experience';
import Project from './components/section/Project';
import SeoAeoFocus from './components/section/SeoAeoFocus';
import CurrentlyLearning from './components/section/CurrentlyLearning';
import Contact from './components/section/Contact';
import Footer from './components/section/Footer';
import { ThemeProvider } from './store/themeStore';

export default function App() {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'seo-aeo', label: 'SEO & AEO' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-zinc-950 transition-colors duration-300">
        <Header sections={sections} />

        <main className="pt-20">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Project />
          <SeoAeoFocus />
          <CurrentlyLearning />
          <Contact />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}
