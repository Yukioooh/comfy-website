import { useState, useEffect, useCallback } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Handle scroll - only when menu is closed
  useEffect(() => {
    if (isOpen) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setHasScrolled(true);
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setHasScrolled(false);
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, lastScrollY]);

  // Close menu when clicking outside or on escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  const navLinks = [
    { name: 'Nous trouver', href: '#about' },
    { name: 'Notre carte', href: '#products' },
    { name: 'Boissons', href: '#drinks' },
    { name: 'Contact', href: '#contact' },
  ];

  const showBackground = isOpen || hasScrolled || isHovered;
  const coffeeColor = '#5D4037'; // Dark coffee brown

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible || isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with coffee drip effect */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          showBackground ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Main background */}
        <div className="absolute inset-0" style={{ backgroundColor: coffeeColor }} />

        {/* Coffee drip SVG at bottom */}
        <svg
          className="absolute left-0 right-0 -bottom-6 w-full h-8"
          viewBox="0 0 1200 32"
          preserveAspectRatio="none"
          fill={coffeeColor}
        >
          {/* Multiple blob/drip shapes */}
          <path d="M0,0 L1200,0 L1200,8 Q1150,8 1140,16 Q1130,28 1110,28 Q1090,28 1080,16 Q1070,8 1020,8 L1020,8 Q970,8 960,16 Q950,32 920,32 Q890,32 880,16 Q870,8 820,8 L820,8 Q780,8 770,14 Q760,22 740,22 Q720,22 710,14 Q700,8 650,8 L650,8 Q600,8 590,18 Q580,32 550,32 Q520,32 510,18 Q500,8 450,8 L450,8 Q400,8 390,12 Q380,20 360,20 Q340,20 330,12 Q320,8 270,8 L270,8 Q220,8 210,16 Q200,28 170,28 Q140,28 130,16 Q120,8 70,8 L70,8 Q30,8 20,14 Q10,22 0,22 L0,0 Z" />
        </svg>
      </div>

      {/* Main header bar */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-10 pr-12">
            {navLinks.slice(0, 2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold uppercase tracking-wide text-white hover:text-amber-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Logo - Center */}
          <a href="#home" className="flex-shrink-0 z-10">
            <span
              className="text-5xl font-black tracking-tight relative text-white transition-colors"
              style={{ fontFamily: "'Made Outer Sans', 'Arial Black', sans-serif" }}
            >
              Comfy
              <sup className="text-xs font-bold absolute top-1 -right-4">®</sup>
            </span>
          </a>

          {/* Right Navigation - Desktop */}
          <div className="hidden md:flex flex-1 items-center justify-start space-x-10 pl-12">
            {navLinks.slice(2).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-bold uppercase tracking-wide text-white hover:text-amber-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden relative z-50 p-2 text-white transition-colors"
            aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isOpen}
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div
          className="md:hidden animate-fade-in"
          style={{ backgroundColor: coffeeColor }}
        >
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className="block py-3 text-lg font-bold text-white uppercase tracking-wide hover:text-amber-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          {/* Mobile drip effect */}
          <svg
            className="w-full h-8 -mb-8"
            viewBox="0 0 400 32"
            preserveAspectRatio="none"
            fill={coffeeColor}
          >
            <path d="M0,0 L400,0 L400,8 Q380,8 370,16 Q360,28 340,28 Q320,28 310,16 Q300,8 260,8 Q220,8 210,18 Q200,32 170,32 Q140,32 130,18 Q120,8 80,8 Q50,8 40,14 Q30,24 10,24 Q0,24 0,14 L0,0 Z" />
          </svg>
        </div>
      )}
    </nav>
  );
}
