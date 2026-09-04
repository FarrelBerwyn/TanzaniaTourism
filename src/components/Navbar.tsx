import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Calendar } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PROPERTY_CONFIG } from '../data/propertyConfig';
import logoImg from './zanzirangi-house-logo.jpg';

interface NavbarProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking: (villaId?: string) => void;
  onOpenCmsPitch?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenBooking,
  onOpenCmsPitch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const t = TRANSLATIONS[currentLang];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.stay || 'STAY', href: '#stay' },
    { label: t.nav.experiences || 'EXPERIENCES', href: '#experiences' },
    { label: t.nav.dining || 'DINING', href: '#dining' },
    { label: t.nav.explore || 'EXPLORE', href: '#explore' },
    { label: t.nav.concierge || 'CONCIERGE', href: '#concierge' },
    { label: t.nav.about || 'ABOUT', href: '#about' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'ar', label: 'العربية', flag: '🇦🇪' },
    { code: 'zh', label: '中文 (Chinese)', flag: '🇨🇳' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'sw', label: 'Kiswahili', flag: '🇹🇿' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  return (
    <>
      <header
        id="main-navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#141413]/95 backdrop-blur-md border-b border-[#2C2B28]/80 py-2.5 shadow-2xl'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a
            href="#"
            id="nav-brand-logo"
            className="flex items-center space-x-3 tracking-wider group focus:outline-none"
          >
            <img
              src={logoImg}
              alt="Zanzirangi House Logo"
              className={`${
                isScrolled ? 'w-8 h-8 sm:w-9 sm:h-9' : 'w-9 h-9 sm:w-11 sm:h-11'
              } rounded-full object-cover border border-[#C4A27A]/50 shadow-md group-hover:scale-105 group-hover:border-[#C4A27A] transition-all duration-300 flex-shrink-0`}
            />
            <span
              className={`font-serif tracking-[0.18em] text-[#FAF8F5] uppercase transition-all duration-300 group-hover:text-[#C4A27A] ${
                isScrolled ? 'text-lg sm:text-xl md:text-2xl' : 'text-xl sm:text-2xl md:text-[26px]'
              }`}
            >
              {PROPERTY_CONFIG.name}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            id="desktop-nav-links"
            className="hidden lg:flex items-center space-x-7 xl:space-x-8 text-[12px] xl:text-[13px] tracking-[0.2em] uppercase font-medium text-[#FAF8F5]/90"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors duration-200 hover:text-[#C4A27A] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C4A27A] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden lg:flex items-center space-x-5">
            {/* Language Selector */}
            <div className="relative">
              <button
                id="language-selector-button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 text-xs tracking-widest uppercase rounded border border-[#FAF8F5]/20 text-[#FAF8F5] hover:border-[#C4A27A] hover:text-[#C4A27A] transition-colors"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 opacity-80" />
                <span>{currentLang.toUpperCase()}</span>
              </button>

              {langDropdownOpen && (
                <div
                  id="language-dropdown-menu"
                  className="absolute right-0 mt-2 w-40 bg-[#1C1B1A] border border-[#2C2B28] rounded shadow-xl py-2 z-50 text-xs tracking-wider"
                >
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onSelectLang(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 flex items-center justify-between transition-colors ${
                        currentLang === l.code
                          ? 'bg-[#B8966C]/20 text-[#C4A27A]'
                          : 'text-[#FAF8F5]/80 hover:bg-white/5 hover:text-[#FAF8F5]'
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </span>
                      {currentLang === l.code && <span className="text-[10px]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Plan Your Stay Button */}
            <button
              id="header-book-button"
              onClick={() => onOpenBooking()}
              className="flex items-center space-x-2 px-5 py-2.5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs tracking-[0.18em] uppercase font-semibold rounded transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>{t.nav.planStay || t.nav.bookStay || 'PLAN YOUR STAY'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              id="mobile-book-icon-button"
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 bg-[#B8966C] text-[#141413] text-[10px] font-semibold tracking-widest uppercase rounded"
            >
              {t.nav.planStay || t.nav.bookStay || 'PLAN'}
            </button>

            <button
              id="mobile-menu-toggle-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#FAF8F5] focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-overlay"
          className="fixed inset-0 bg-[#141413]/98 z-40 lg:hidden flex flex-col justify-between pt-24 pb-12 px-8 backdrop-blur-xl animate-fadeIn"
        >
          <div className="flex flex-col space-y-6 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <img
                src={logoImg}
                alt="Zanzirangi House Logo"
                className="w-10 h-10 rounded-full object-cover border border-[#C4A27A]/50 shadow-sm flex-shrink-0"
              />
              <span className="font-serif text-2xl tracking-[0.15em] text-[#C4A27A] uppercase">
                {PROPERTY_CONFIG.name}
              </span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl tracking-widest text-[#FAF8F5] hover:text-[#C4A27A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col items-center space-y-6">
            {/* Language Selector in Mobile */}
            <div className="flex items-center justify-center space-x-3 text-xs tracking-widest">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onSelectLang(l.code)}
                  className={`px-2.5 py-1 rounded transition-colors ${
                    currentLang === l.code
                      ? 'bg-[#B8966C] text-[#141413] font-semibold'
                      : 'text-[#FAF8F5]/70 hover:text-white'
                  }`}
                >
                  {l.code.toUpperCase()}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-sm tracking-[0.2em] uppercase font-semibold rounded text-center shadow-lg"
            >
              {t.nav.planStay || t.nav.bookStay || 'PLAN YOUR STAY'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
