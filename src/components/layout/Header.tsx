import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from '../ui/button';
import { useTheme } from 'next-themes';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-border/50'
          : 'bg-background/50 backdrop-blur-sm'
      )}
    >
      <nav className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex items-center flex-1">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              JAS
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-8">
          <div className="hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="ml-4"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          <a
            href={siteConfig.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 text-sm font-medium text-primary hover:underline"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground/70 hover:text-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted/50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center justify-between px-3 py-2">
                <span className="text-sm font-medium text-foreground/60">Theme</span>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={toggleTheme}
                  className="text-foreground/80"
                >
                  {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
              </div>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 mt-2 text-base font-medium text-primary hover:bg-muted/50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
