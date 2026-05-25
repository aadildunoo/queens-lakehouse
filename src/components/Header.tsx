import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookNow: () => void;
  activeSection: string;
}

export default function Header({ onBookNow, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticking header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-warm/95 shadow-md py-3 border-b border-secondary/10 backdrop-blur-md'
          : 'bg-neutral-warm/90 md:bg-neutral-warm/80 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => handleNavClick(e, 'hero')}
          className="flex flex-col select-none"
        >
          <span className="font-serif text-xl md:text-2xl font-bold text-primary tracking-tight leading-tight">
            Queen's Lake House
          </span>
          <span className="text-[9px] md:text-[10px] tracking-widest text-secondary font-sans font-semibold uppercase">
            Srinagar, Kashmir
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'hero')}
            className={`font-sans text-xs uppercase tracking-widest font-semibold hover:text-secondary transition-colors ${
              activeSection === 'hero' ? 'text-secondary border-b border-secondary pb-1' : 'text-primary'
            }`}
          >
            Home
          </a>
          <a
            href="#heritage"
            onClick={(e) => handleNavClick(e, 'heritage')}
            className={`font-sans text-xs uppercase tracking-widest font-semibold hover:text-secondary transition-colors ${
              activeSection === 'heritage' ? 'text-secondary border-b border-secondary pb-1' : 'text-primary'
            }`}
          >
            Heritage Room
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, 'gallery')}
            className={`font-sans text-xs uppercase tracking-widest font-semibold hover:text-secondary transition-colors ${
              activeSection === 'gallery' ? 'text-secondary border-b border-secondary pb-1' : 'text-primary'
            }`}
          >
            Gallery
          </a>
          <a
            href="#activities"
            onClick={(e) => handleNavClick(e, 'activities')}
            className={`font-sans text-xs uppercase tracking-widest font-semibold hover:text-secondary transition-colors ${
              activeSection === 'activities' ? 'text-secondary border-b border-secondary pb-1' : 'text-primary'
            }`}
          >
            Activities
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className={`font-sans text-xs uppercase tracking-widest font-semibold hover:text-secondary transition-colors ${
              activeSection === 'contact' ? 'text-secondary border-b border-secondary pb-1' : 'text-primary'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* Buttons / Actions */}
        <div className="flex items-center space-x-4">
          <button
            id="book-now-button"
            onClick={onBookNow}
            className="bg-primary text-white font-sans text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-sm hover:bg-lake-deep transition-all duration-300 hover:shadow-lg active:scale-95 cursor-pointer"
          >
            Book Now
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-1 hover:text-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[64px] left-0 w-full h-[calc(100vh-64px)] bg-neutral-warm/98 z-40 flex flex-col justify-center items-center space-y-8 backdrop-blur-lg animate-fade-in border-t border-secondary/10">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'hero')}
            className="font-serif text-2xl font-medium text-primary hover:text-secondary transition-colors"
          >
            Home
          </a>
          <a
            href="#heritage"
            onClick={(e) => handleNavClick(e, 'heritage')}
            className="font-serif text-2xl font-medium text-primary hover:text-secondary transition-colors"
          >
            Heritage Room
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleNavClick(e, 'gallery')}
            className="font-serif text-2xl font-medium text-primary hover:text-secondary transition-colors"
          >
            Gallery
          </a>
          <a
            href="#activities"
            onClick={(e) => handleNavClick(e, 'activities')}
            className="font-serif text-2xl font-medium text-primary hover:text-secondary transition-colors"
          >
            Activities
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="font-serif text-2xl font-medium text-primary hover:text-secondary transition-colors"
          >
            Contact
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onBookNow();
            }}
            className="bg-secondary text-white font-sans text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-sm hover:bg-cedar-warm transition-all duration-300"
          >
            Book Your Stay
          </button>
        </div>
      )}
    </header>
  );
}
