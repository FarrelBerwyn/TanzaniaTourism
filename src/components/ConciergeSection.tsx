import React from 'react';
import {
  BellRing,
  Plane,
  Car,
  Compass,
  Binoculars,
  Ship,
  UtensilsCrossed,
  Map,
  Sparkles,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { Language } from '../types';
import { PROPERTY_CONFIG } from '../data/propertyConfig';

interface ConciergeSectionProps {
  currentLang: Language;
  onOpenSupportChat?: (query?: string) => void;
}

export const ConciergeSection: React.FC<ConciergeSectionProps> = ({ currentLang, onOpenSupportChat }) => {
  const conciergeServices = [
    {
      icon: Plane,
      title: 'Airport Transfer',
      desc: 'Seamless VIP tarmac meet-and-greet and private transfer from Abeid Amani Karume International Airport (ZNZ).',
    },
    {
      icon: Car,
      title: 'Shuttle Service',
      desc: 'Private air-conditioned chauffeur vehicles for day trips, beach hops, and Stone Town explorations.',
    },
    {
      icon: Compass,
      title: 'Private Tour Guide',
      desc: 'Accredited local Swahili guides steeped in island botany, maritime traditions, and UNESCO heritage.',
    },
    {
      icon: Binoculars,
      title: 'Tanzania Safari',
      desc: 'Chartered fly-in bush expeditions to the Serengeti, Ngorongoro, Tarangire, and Selous Game Reserve.',
    },
    {
      icon: Ship,
      title: 'Island Tours & Dhows',
      desc: 'Private wooden dhow charters, sandbank picnics, Mnemba Atoll snorkeling, and sunset golden hour cruises.',
    },
    {
      icon: UtensilsCrossed,
      title: 'Restaurant Reservations',
      desc: 'Securing prime oceanfront tables at iconic Zanzibar venues and orchestrating private in-villa chef dinners.',
    },
    {
      icon: Car,
      title: 'Private Car & Driver',
      desc: 'Dedicated vehicle and discreet chauffeur at your disposal throughout the duration of your stay.',
    },
    {
      icon: Sparkles,
      title: 'Curated Activities',
      desc: 'Kite surfing, deep-sea game fishing, yoga salas, aromatherapy massage, and Swahili culinary masterclasses.',
    },
    {
      icon: Map,
      title: 'Custom Itinerary',
      desc: 'Multi-day bespoke travel designs harmonizing relaxation at Zanzirangi House with mainland safari expeditions.',
    },
  ];

  return (
    <section id="concierge" className="py-24 md:py-36 bg-[#F4EFE6] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.32em] uppercase text-[#A07E54] font-semibold mb-3">
            <BellRing className="w-3.5 h-3.5" />
            <span>Dedicated Butler & Host Care</span>
          </div>

          <h2
            id="concierge-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] uppercase text-[#141413] mb-6"
          >
            YOUR JOURNEY, PERSONALLY ARRANGED
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-[#8E6B40] font-light leading-relaxed mb-4">
            "From airport arrival to private safari, our concierge team can help arrange every part of your Tanzania experience."
          </p>

          <p className="text-sm md:text-base text-[#6B6862] leading-relaxed max-w-2xl mx-auto">
            Our on-site team at Zanzirangi House takes care of every logistic so you can surrender completely to the calm rhythms of the Indian Ocean.
          </p>
        </div>

        {/* 9 Concierge Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {conciergeServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF8F5] border border-[#E7DFD2] rounded-2xl p-7 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#F4EFE6] text-[#A07E54] group-hover:bg-[#1C1B1A] group-hover:text-[#C4A27A] flex items-center justify-center transition-colors duration-300 mb-6 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl font-normal text-[#141413] mb-2 group-hover:text-[#A07E54] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#55524B] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t border-[#E7DFD2]/60 flex items-center justify-between text-[11px] font-mono tracking-wider uppercase text-[#A07E54]">
                  <span>Available 24/7</span>
                  <span>• Inquire</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Central Concierge Call to Action Banner */}
        <div className="bg-[#1C1B1A] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#2C2B28] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C4A27A]">
              Bespoke Hosting & Travel Design
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5]">
              Ready to Design Your Experience?
            </h3>
            <p className="text-xs sm:text-sm text-[#D8CCB8]">
              Connect directly with our dedicated customer support and host team anytime. We will tailor every flight, car, villa, and excursion to your exact rhythm.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <button
              onClick={() => {
                const prompt = 'Hello Zanzirangi House Concierge! I would like to speak with your team about arranging customized services and planning our stay.';
                if (onOpenSupportChat) {
                  onOpenSupportChat(prompt);
                } else {
                  window.dispatchEvent(new CustomEvent('open-customer-support', { detail: { query: prompt } }));
                }
              }}
              className="w-full sm:w-auto px-8 py-4 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs font-bold tracking-[0.2em] uppercase rounded flex items-center justify-center space-x-2 transition-all shadow-xl active:scale-95 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>SPEAK WITH CUSTOMER SUPPORT</span>
            </button>

            <a
              href={`tel:${PROPERTY_CONFIG.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto px-6 py-4 border border-white/20 hover:border-white text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase rounded flex items-center justify-center space-x-2 transition-colors"
            >
              <Phone className="w-4 h-4 text-[#C4A27A]" />
              <span>{PROPERTY_CONFIG.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
