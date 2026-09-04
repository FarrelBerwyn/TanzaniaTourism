import React from 'react';
import { Compass } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PROPERTY_CONFIG } from '../data/propertyConfig';

interface PropertyIntroProps {
  currentLang: Language;
}

export const PropertyIntro: React.FC<PropertyIntroProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  const stats = [
    {
      value: PROPERTY_CONFIG.stats.villasCount.toString().padStart(2, '0'),
      label: t.intro.statsVillas,
    },
    {
      value: PROPERTY_CONFIG.stats.poolsCount.toString().padStart(2, '0'),
      label: t.intro.statsPool,
    },
    {
      value: PROPERTY_CONFIG.stats.diningCount.toString().padStart(2, '0'),
      label: t.intro.statsDining,
    },
    {
      value: '24/7',
      label: t.intro.statsSupport,
    },
  ];

  return (
    <section id="intro" className="py-24 md:py-32 bg-[#FAF8F5] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story with Layered Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">
              {/* CLIENT_PROPERTY_IMAGES: Oceanfront cliffside resort pool and Indian Ocean sanctuary */}
              <img
                src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=85"
                alt="Zanzirangi House oceanfront architecture"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D8CCB8] block mb-1">
                  Kizimkazi Dimbani • Indian Ocean
                </span>
                <p className="font-serif text-lg tracking-wide italic">
                  "Where ancient baobabs meet coral crystal lagoons."
                </p>
              </div>
            </div>

            {/* Subtle decorative offset card */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-48 bg-[#1C1B1A] text-[#FAF8F5] p-5 rounded-md shadow-xl border border-[#2C2B28]">
              <Compass className="w-5 h-5 text-[#C4A27A] mb-2" />
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#D8CCB8]">
                Coordinates
              </p>
              <p className="font-mono text-xs text-[#E7DFD2]">
                6°26'34.4"S 39°28'04.1"E
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-6 lg:pl-6">
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#A07E54] font-medium mb-4">
              <span className="w-6 h-[1px] bg-[#A07E54]" />
              <span>{PROPERTY_CONFIG.destination}</span>
            </div>

            <h2
              id="intro-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.05em] leading-[1.2] text-[#141413] uppercase mb-6"
            >
              {t.intro.heading}
            </h2>

            <h3 className="text-base sm:text-lg text-[#B86E4B] font-medium tracking-wide mb-6">
              {t.intro.subhead}
            </h3>

            <p
              id="intro-body-copy"
              className="text-[#3E3C38] font-normal leading-[1.8] text-base md:text-lg mb-10 max-w-xl"
            >
              "{t.intro.body}"
            </p>

            {/* Statistics Matrix */}
            <div
              id="property-stats-grid"
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-[#E7DFD2]"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-3xl sm:text-4xl font-light text-[#141413] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] tracking-[0.2em] text-[#6B6862] uppercase font-medium mt-1">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
