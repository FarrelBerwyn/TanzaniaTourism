import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import heroVideo from '../data/Zanzirangi-home.mp4';

interface HeroSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = TRANSLATIONS[currentLang];

  const handleScrollToStay = () => {
    const el = document.getElementById('intro');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#141413] text-[#FAF8F5]"
    >
      {/* Background Video: Zanzirangi-home */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=90"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.72) contrast(1.05)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="./Zanzirangi-home.mp4" type="video/mp4" />
          <source src="./videos/Zanzirangi-home.mp4" type="video/mp4" />
        </video>
        {/* Subtle Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-black/35 to-black/50" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Top Spacer for fixed navbar */}
      <div className="h-24 md:h-28" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center my-auto py-12">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#D8CCB8] text-[11px] sm:text-xs tracking-[0.3em] uppercase mb-8 animate-fadeIn">
          <Sparkles className="w-3 h-3 text-[#C4A27A]" />
          <span>{t.hero.eyebrow}</span>
        </div>

        {/* Major Heading */}
        <h1
          id="hero-main-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-light tracking-[0.08em] leading-[1.12] text-[#FAF8F5] uppercase mb-6 drop-shadow-md"
        >
          {t.hero.title}
        </h1>

        {/* Subtitle statement */}
        <p
          id="hero-subtitle"
          className="max-w-2xl mx-auto font-sans text-base sm:text-lg md:text-xl font-light text-[#E7DFD2]/95 leading-relaxed tracking-wide mb-10 md:mb-12"
        >
          "{t.hero.subtitle}"
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            id="hero-explore-button"
            onClick={handleScrollToStay}
            className="w-full sm:w-auto px-8 py-3.5 border border-[#FAF8F5]/60 hover:border-[#FAF8F5] text-[#FAF8F5] hover:bg-white/10 text-xs sm:text-sm tracking-[0.22em] uppercase font-medium rounded transition-all duration-300 backdrop-blur-sm"
          >
            {t.hero.exploreProperty}
          </button>

          <button
            id="hero-book-button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold rounded transition-all duration-300 shadow-xl hover:shadow-2xl transform active:scale-95"
          >
            {t.hero.bookYourStay}
          </button>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-10 pb-8 flex flex-col items-center justify-center text-center">
        <button
          onClick={handleScrollToStay}
          className="group flex flex-col items-center space-y-2 text-[#D8CCB8]/80 hover:text-[#FAF8F5] transition-colors focus:outline-none"
          aria-label="Scroll to discover property"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">
            {t.hero.scrollIndicator}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C4A27A]" />
        </button>
      </div>
    </section>
  );
};
