
import { Download, Menu as MenuIcon, X as CloseIcon, Github } from 'lucide-react';
import { Drawer, DrawerTrigger, DrawerContent, DrawerClose } from '../ui/drawer';
import { useState } from 'react';

interface HeaderSection {
  id: string;
  label: string;
}

interface HeaderProps {
  sections: HeaderSection[];
}

export default function Header({ sections }: HeaderProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/glenn-dale-magbanua-resume.pdf';
    link.download = 'glenn-dale-magbanua-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleNavigate = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setDrawerOpen(false);
    // Wait for the drawer close animation and its scroll-lock to release
    // before scrolling, otherwise the restored scroll position cancels navigation.
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.replaceState(null, '', `#${sectionId}`);
      }
    }, 350);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 dark:bg-zinc-950 backdrop-blur-sm z-50 border-b dark:border-zinc-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center" aria-label="Primary">
        <a href="#home" aria-label="Go to home section">
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">GD</span>
        </a>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="text-sm hover:text-emerald-400 dark:hover:text-emerald-400 dark:text-gray-400 transition-colors"
            >
              {section.label}
            </a>
          ))}
          <button
            onClick={handleDownload}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="Download Resume"
            aria-label="Download resume"
          >
            <Download size={20} />
          </button>
          <a
            href="https://github.com/glenndalemagbanua"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            title="GitHub Profile"
          >
            <Github size={20} />
          </a>
        </div>
        {/* Mobile Burger Menu */}
        <div className="md:hidden flex items-center">
          <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="right">
            <DrawerTrigger asChild>
              <button
                aria-label="Open menu"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                <MenuIcon size={24} />
              </button>
            </DrawerTrigger>
            <DrawerContent className="p-6 w-full max-w-xs bg-white dark:bg-zinc-950 flex flex-col gap-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">Menu</h2>
                <DrawerClose asChild>
                  <button
                    aria-label="Close menu"
                    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <CloseIcon size={24} />
                  </button>
                </DrawerClose>
              </div>
              <div className="flex flex-col gap-4">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="text-base hover:text-emerald-400 dark:hover:text-emerald-400 dark:text-gray-400 transition-colors"
                    onClick={(event) => handleNavigate(event, section.id)}
                  >
                    {section.label}
                  </a>
                ))}
                <button
                  onClick={() => { handleDownload(); setDrawerOpen(false); }}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-left"
                  title="Download Resume"
                >
                  <Download size={20} className="inline mr-2" /> Download Resume
                </button>
                <a
                  href="https://github.com/glenndalemagbanua"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-left"
                  onClick={() => setDrawerOpen(false)}
                >
                  <Github size={20} className="inline mr-2" /> GitHub Profile
                </a>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </header>
  );
}
