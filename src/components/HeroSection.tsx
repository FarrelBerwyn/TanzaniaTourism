import React from 'react';
import { ChevronDown, Sparkles, MapPin, Compass } from 'lucide-react';
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
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const handleScrollToStay = () => {
    const el = document.getElementById('stay');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToItinerary = () => {
    const el = document.getElementById('itinerary');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onOpenBooking();
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#141413] text-[#FAF8F5]"
    >
      {/* Background Video: Zanzirangi House Authentic Footage */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=90"
          className="w-full h-full object-cover scale-105 animate-subtleZoom"
          style={{ filter: 'brightness(0.68) contrast(1.08)' }}
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="./Zanzirangi-home.mp4" type="video/mp4" />
          <source src="./videos/Zanzirangi-home.mp4" type="video/mp4" />
        </video>

        {/* Sophisticated Luxury Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Top Spacer for fixed navbar */}
      <div className="h-24 md:h-32" />

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center my-auto py-10 md:py-16">
        {/* Subtle Location Indicator Eyebrow */}
        <div className="inline-flex items-center space-x-2.5 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FAF8F5] text-[11px] sm:text-xs tracking-[0.32em] uppercase mb-8 shadow-lg">
          <MapPin className="w-3.5 h-3.5 text-[#C4A27A]" />
          <span className="font-medium text-[#FAF8F5]">ZANZIBAR, TANZANIA</span>
          <span className="text-[#C4A27A]">•</span>
          <span className="text-[#D8CCB8] tracking-[0.25em]">ZANZIRANGI HOUSE</span>
        </div>

        {/* Major Headline */}
        <h1
          id="hero-main-title"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-light tracking-[0.08em] leading-[1.12] text-[#FAF8F5] uppercase mb-6 drop-shadow-xl"
        >
          {t.hero.title || 'YOUR PRIVATE GATEWAY TO ZANZIBAR'}
        </h1>

        {/* Supporting Narrative */}
        <p
          id="hero-subtitle"
          className="max-w-2xl mx-auto font-sans text-base sm:text-lg md:text-xl font-light text-[#E7DFD2] leading-relaxed tracking-wide mb-10 md:mb-12 drop-shadow-md"
        >
          {t.hero.subtitle || 'Stay, explore and experience the island — with Tanzania beyond.'}
        </p>

        {/* Primary and Secondary Luxury CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            id="hero-explore-button"
            onClick={handleScrollToStay}
            className="w-full sm:w-auto px-8 py-4 border border-[#FAF8F5]/80 hover:border-[#FAF8F5] text-[#FAF8F5] hover:bg-white/15 text-xs sm:text-sm tracking-[0.22em] uppercase font-semibold rounded transition-all duration-300 backdrop-blur-sm shadow-md active:scale-95"
          >
            {t.hero.exploreProperty || 'EXPLORE THE RETREAT'}
          </button>

          <button
            id="hero-book-button"
            onClick={handleScrollToItinerary}
            className="w-full sm:w-auto px-8 py-4 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs sm:text-sm tracking-[0.22em] uppercase font-bold rounded transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95"
          >
            {t.hero.bookYourStay || 'PLAN YOUR JOURNEY'}
          </button>
        </div>
      </div>

      {/* Bottom Bar: Coordinates & Scroll Cue */}
      <div className="relative z-10 pb-8 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="hidden sm:flex items-center space-x-2 text-[11px] font-mono tracking-widest text-[#D8CCB8]/70 uppercase">
          <Compass className="w-3.5 h-3.5 text-[#C4A27A]" />
          <span>6°26'34.4"S 39°28'04.1"E • Kizimkazi Dimbani</span>
        </div>

        <button
          onClick={handleScrollToStay}
          className="group flex flex-col items-center space-y-1.5 text-[#D8CCB8]/80 hover:text-[#FAF8F5] transition-colors focus:outline-none"
          aria-label="Scroll to discover property"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-light">
            {t.hero.scrollIndicator || 'SCROLL TO DISCOVER'}
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#C4A27A]" />
        </button>

        <div className="hidden sm:block text-[11px] font-mono tracking-widest text-[#D8CCB8]/70 uppercase">
          <span>Indian Ocean Lagoon • Menai Bay</span>
        </div>
      </div>
    </section>
  );
};
