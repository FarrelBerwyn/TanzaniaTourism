import React from 'react';
import { Compass, Sparkles, Home, Utensils, Compass as CompassIcon, Compass as TourIcon, TreePine, BellRing } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PROPERTY_CONFIG } from '../data/propertyConfig';

interface PropertyIntroProps {
  currentLang: Language;
}

export const PropertyIntro: React.FC<PropertyIntroProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

  const pillars = [
    {
      label: 'Private Accommodation',
      description: 'Barefoot beachfront villas and garden bungalows nestled beneath ancient baobabs.',
    },
    {
      label: 'Local Dining',
      description: 'From our organic estate gardens to fresh Menai Bay seafood, cooked with coastal Swahili soul.',
    },
    {
      label: 'Island Experiences',
      description: 'Dhow sunset sails, swimming with wild dolphins, and exploring secluded sandbanks.',
    },
    {
      label: 'Curated Tours',
      description: 'Historic Stone Town heritage walks and fragrant organic spice farm discoveries.',
    },
    {
      label: 'Mainland Safari',
      description: 'Direct fly-in bush plane connections to the Serengeti, Ngorongoro, and Tarangire.',
    },
    {
      label: 'Personalized Concierge',
      description: 'Dedicated butler and concierge care crafting every detail of your East African journey.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-36 bg-[#FAF8F5] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Introduction Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.32em] uppercase text-[#A07E54] font-semibold mb-4">
            <span className="w-8 h-[1px] bg-[#A07E54]" />
            <span>The Zanzirangi Philosophy</span>
          </div>

          <h2
            id="intro-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] leading-[1.14] text-[#141413] uppercase mb-8"
          >
            {t.intro.heading || 'MORE THAN A STAY'}
          </h2>

          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#8E6B40] font-light leading-snug mb-8">
            "Discover a private retreat where the beauty of Zanzibar meets the warmth of authentic island hospitality."
          </p>

          <p
            id="intro-body-copy"
            className="text-[#3E3C38] font-normal leading-[1.85] text-base md:text-lg max-w-3xl"
          >
            At Zanzirangi House, guests are not merely booking a room. You are stepping into an interconnected Tanzanian journey—from the moment you land on our southern shores to unforgettable days exploring pristine sandbanks, tasting indigenous spices harvested on site, and flying deep into the wild plains of the Serengeti.
          </p>
        </div>

        {/* Large Editorial Photography & Architectural Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20 md:mb-28">
          {/* Main Large Visual */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85"
                alt="Zanzirangi House coastal architecture"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 text-white flex justify-between items-end">
                <div>
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#D8CCB8] block mb-1">
                    Kizimkazi Dimbani • South Coast
                  </span>
                  <p className="font-serif text-lg tracking-wide italic">
                    Where ancient baobab groves meet coral lagoons.
                  </p>
                </div>
                <span className="hidden sm:block text-xs font-mono text-[#D8CCB8]/80">
                  Est. Zanzibar
                </span>
              </div>
            </div>

            {/* Inset Texture Card */}
            <div className="hidden md:block absolute -bottom-8 -right-6 w-56 bg-[#1C1B1A] text-[#FAF8F5] p-6 rounded-xl shadow-2xl border border-[#2C2B28]">
              <Compass className="w-5 h-5 text-[#C4A27A] mb-2.5" />
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#D8CCB8] font-mono">
                South Coast Solitude
              </p>
              <p className="font-mono text-xs text-[#E7DFD2] mt-1">
                6°26'34.4"S 39°28'04.1"E
              </p>
            </div>
          </div>

          {/* Secondary Visual & Editorial Text */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg border border-[#E7DFD2]">
              <img
                src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85"
                alt="Poolside oceanfront lounge"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 backdrop-blur rounded text-[10px] uppercase tracking-widest text-[#FAF8F5]">
                Barefoot Oceanfront Living
              </div>
            </div>

            <p className="text-sm md:text-base text-[#55524B] leading-relaxed">
              Designed with respect for Swahili craftsmanship, Zanzirangi House utilizes local coral ragstone, hand-hewn mahogany, and natural thatched makuti roofs that allow warm ocean breezes to flow freely throughout the day.
            </p>
          </div>
        </div>

        {/* 6 Editorial Experience Pillars (Spacious Editorial Flow, not generic card spam) */}
        <div className="border-t border-b border-[#E7DFD2] py-14">
          <div className="mb-8">
            <span className="text-[10px] tracking-[0.3em] font-mono uppercase text-[#A07E54] block mb-1">
              The Complete Experience
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] font-light uppercase">
              What Awaits You at Zanzirangi House
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="group flex flex-col justify-start">
                <div className="flex items-baseline space-x-3 mb-2">
                  <span className="font-mono text-xs text-[#A07E54] font-semibold">
                    0{idx + 1}.
                  </span>
                  <h4 className="font-serif text-xl text-[#141413] group-hover:text-[#A07E54] transition-colors">
                    {pillar.label}
                  </h4>
                </div>
                <p className="text-sm text-[#6B6862] leading-relaxed pl-7">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
