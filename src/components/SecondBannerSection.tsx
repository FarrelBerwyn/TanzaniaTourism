import React from 'react';
import { Sparkles, Compass } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface SecondBannerSectionProps {
  currentLang: Language;
  onOpenBooking?: () => void;
}

export const SecondBannerSection: React.FC<SecondBannerSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section
      id="second-image-banner"
      className="relative w-full h-[520px] md:h-[620px] lg:h-[700px] overflow-hidden bg-[#141413] text-[#FAF8F5]"
    >
      {/* Background Image: The previous first banner luxury poolside oceanfront image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2400&q=90"
          alt="Zanzirangi House luxury poolside oceanfront sanctuary"
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.06] transition-transform duration-[12000ms] hover:scale-105"
        />
        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-black/30 to-black/45" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Floating Content Over Banner */}
      <div className="relative z-10 max-w-6xl mx-auto h-full px-6 md:px-12 flex flex-col justify-between py-16 md:py-24">
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center space-x-2 self-start px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#D8CCB8] text-[10px] sm:text-xs tracking-[0.3em] uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#C4A27A]" />
          <span>Private Sanctuary • Oceanfront Sun Deck</span>
        </div>

        {/* Center Main Text */}
        <div className="max-w-3xl">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#C4A27A] uppercase font-mono block mb-3">
            Zanzibar South Coast • Kizimkazi
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.06em] uppercase text-[#FAF8F5] leading-[1.15] mb-6 drop-shadow-lg">
            Where Turquoise Waters Meet Coastal Solitude
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#E7DFD2]/95 font-light leading-relaxed max-w-2xl drop-shadow">
            Unwind upon handcrafted teak sun loungers overlooking the calm tides of Menai Bay. An intimate setting engineered for total rejuvenation, bespoke butler care, and unforgettable sunsets.
          </p>

          {onOpenBooking && (
            <div className="mt-8 flex items-center space-x-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs tracking-[0.2em] uppercase font-semibold rounded transition-all duration-300 shadow-xl transform active:scale-95"
              >
                Reserve Your Escape
              </button>
            </div>
          )}
        </div>

        {/* Bottom Coordinates & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/15 text-xs text-[#D8CCB8]/80 font-mono tracking-wider">
          <div className="flex items-center space-x-2">
            <Compass className="w-4 h-4 text-[#C4A27A]" />
            <span>6°26'34.4"S 39°28'04.1"E</span>
          </div>
          <span>Infinity Pool • Private Beach Access • Dedicated Host</span>
        </div>
      </div>
    </section>
  );
};
