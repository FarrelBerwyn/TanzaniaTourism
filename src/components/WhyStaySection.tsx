import React from 'react';
import { Compass, Sparkles } from 'lucide-react';
import { Language } from '../types';

interface WhyStaySectionProps {
  currentLang: Language;
}

export const WhyStaySection: React.FC<WhyStaySectionProps> = ({ currentLang }) => {
  const pillars = [
    {
      number: '01',
      title: 'PRIVATE & PEACEFUL',
      tagline: 'A private sanctuary away from the crowds.',
      description:
        'Tucked along the pristine southern coastline of Kizimkazi, far from tourist congestion. Here, time is measured by the tidal ebb and flow, the rustle of palms, and unobstructed ocean horizons.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '02',
      title: 'AUTHENTIC ZANZIBAR',
      tagline: 'Experience the island through its people, flavours and culture.',
      description:
        'From master Swahili woodcarvers and centuries-old makuti thatched pavilions to organic spices harvested daily from our estate gardens, experience the genuine soul of the Spice Island.',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '03',
      title: 'PERSONAL CONCIERGE',
      tagline: 'From airport arrival to safari planning.',
      description:
        'A dedicated host and concierge team attentive to your every need. Private airport tarmac greetings, chartered boat launches, in-villa dining, and discreet personal hospitality throughout.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
    },
    {
      number: '04',
      title: 'TANZANIA BEYOND',
      tagline: 'Connect your Zanzibar stay with the wonders of mainland Tanzania.',
      description:
        'Seamlessly combine oceanfront rest with chartered fly-in bush safaris to the Serengeti, Ngorongoro Crater, and Tarangire, creating a complete and unforgettable East African journey.',
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=85',
    },
  ];

  return (
    <section id="why-us" className="py-24 md:py-36 bg-[#F4EFE6] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.32em] uppercase text-[#A07E54] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Sanctuary Difference</span>
          </div>

          <h2
            id="why-stay-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] uppercase text-[#141413] mb-4"
          >
            WHY ZANZIRANGI HOUSE
          </h2>

          <p className="text-[#6B6862] text-sm sm:text-base leading-relaxed">
            Four guiding values define every moment at our retreat, creating a rare atmosphere of calm, exclusivity, and profound connection to Tanzania.
          </p>
        </div>

        {/* 4 Pillars in Editorial Asymmetric Typography + Photography Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="flex flex-col justify-between space-y-6 group"
            >
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#E7DFD2]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#141413]/85 backdrop-blur rounded text-xs font-mono text-[#C4A27A]">
                  {pillar.number}
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] font-light tracking-wide group-hover:text-[#A07E54] transition-colors">
                  {pillar.title}
                </h3>
                <p className="font-serif italic text-lg sm:text-xl text-[#8E6B40]">
                  "{pillar.tagline}"
                </p>
                <p className="text-sm text-[#55524B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
