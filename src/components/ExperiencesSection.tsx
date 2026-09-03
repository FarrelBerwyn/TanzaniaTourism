import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { EXPERIENCES_DATA } from '../data/experiences';
import { TRANSLATIONS } from '../data/translations';

interface ExperiencesSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [activeTab, setActiveTab] = useState<'resort' | 'zanzibar' | 'tanzania'>('resort');

  const filteredExperiences = EXPERIENCES_DATA.filter(
    (exp) => exp.category === activeTab
  );

  return (
    <section id="experiences" className="py-24 md:py-32 bg-[#F4EFE6] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7DFD2]">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#A07E54] font-medium mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Journeys</span>
            </div>
            <h2
              id="experiences-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.05em] uppercase text-[#141413]"
            >
              {t.experiences.heading}
            </h2>
            <p className="text-[#6B6862] text-sm sm:text-base mt-2 max-w-xl">
              {t.experiences.subhead}
            </p>
          </div>

          {/* Navigation Category Tabs */}
          <div className="flex items-center space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2">
            {[
              { id: 'resort', label: t.experiences.tabResort },
              { id: 'zanzibar', label: t.experiences.tabZanzibar },
              { id: 'tanzania', label: t.experiences.tabTanzania },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 sm:px-5 py-2 text-xs tracking-wider uppercase font-semibold rounded-full transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-[#1C1B1A] text-[#FAF8F5] shadow-md'
                    : 'bg-[#E7DFD2]/70 text-[#3E3C38] hover:bg-[#E7DFD2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredExperiences.map((item) => (
            <div
              key={item.id}
              className="bg-[#FAF8F5] border border-[#E7DFD2] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md rounded text-[10px] tracking-widest font-mono uppercase text-[#C4A27A]">
                  {item.tag}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-[#A07E54] font-mono mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl font-normal text-[#141413] mb-2 group-hover:text-[#A07E54] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55524B] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-5 mt-4 border-t border-[#E7DFD2]">
                  <button
                    onClick={onOpenBooking}
                    className="text-xs font-semibold tracking-widest uppercase text-[#141413] hover:text-[#A07E54] flex items-center space-x-1 transition-colors"
                  >
                    <span>Inquire with Concierge</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tourism Marketplace Expansion Bridge (Discover Tanzania) */}
        <div className="bg-[#1C1B1A] text-[#FAF8F5] border border-[#2C2B28] rounded-2xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#B8966C]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.25em] uppercase text-[#C4A27A] font-mono">
                <Sparkles className="w-3 h-3" />
                <span>{t.experiences.marketplaceVision}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-wide text-[#FAF8F5]">
                {t.experiences.discoverTanzaniaTitle}
              </h3>

              <p className="text-sm sm:text-base text-[#D8CCB8] leading-relaxed max-w-2xl">
                {t.experiences.discoverTanzaniaText}
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-xs font-mono text-[#D8CCB8]">
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded">
                  ✈ Serengeti Fly-In Safaris
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded">
                  🌋 Ngorongoro Crater Safaris
                </span>
                <span className="px-3 py-1 bg-white/5 border border-white/10 rounded">
                  🏔 Kilimanjaro Scenic Flights
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs tracking-[0.2em] uppercase font-semibold rounded text-center transition-all shadow-md active:scale-95"
              >
                Plan Safari Itinerary
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
