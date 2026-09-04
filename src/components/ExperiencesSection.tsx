import React, { useState } from 'react';
import { Compass, Clock, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { EXPERIENCES_DATA, Experience } from '../data/experiences';

interface ExperiencesSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onOpenSupportChat?: (query?: string) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({
  currentLang,
  onOpenBooking,
  onOpenSupportChat,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalExp, setActiveModalExp] = useState<Experience | null>(null);

  const categories = [
    { key: 'all', label: 'All 10 Experiences' },
    { key: 'cultural', label: 'Culture & Heritage' },
    { key: 'marine', label: 'Marine & Atolls' },
    { key: 'sailing', label: 'Dhow Sailing' },
    { key: 'nature', label: 'Nature & Spices' },
    { key: 'adventure', label: 'Sport Fishing' },
  ];

  const filteredExperiences = EXPERIENCES_DATA.filter((exp) => {
    if (selectedCategory === 'all') return true;
    return exp.category === selectedCategory;
  });

  return (
    <section id="experiences" className="py-24 md:py-36 bg-[#FAF8F5] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7DFD2]">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#A07E54] font-semibold mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Curated Island Adventures</span>
            </div>
            <h2
              id="experiences-heading"
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] uppercase text-[#141413]"
            >
              EXPERIENCES
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#8E6B40] font-light mt-2">
              "Discover Zanzibar beyond the ordinary."
            </p>
            <p className="text-[#6B6862] text-sm sm:text-base mt-2 max-w-2xl">
              Immerse yourself in centuries of Swahili maritime history, protected coral reefs, dolphin sanctuaries, and aromatic spice groves curated exclusively for Zanzirangi House guests.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 mt-8 md:mt-0 overflow-x-auto pb-2 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 sm:px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-semibold rounded-full transition-all whitespace-nowrap ${
                  selectedCategory === cat.key
                    ? 'bg-[#1C1B1A] text-[#FAF8F5] shadow-lg'
                    : 'bg-[#E7DFD2]/60 text-[#3E3C38] hover:bg-[#E7DFD2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 10 Luxury Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-[#F4EFE6] border border-[#E7DFD2] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col group"
            >
              {/* Image */}
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-md rounded text-[10px] tracking-widest font-mono uppercase text-[#C4A27A]">
                  {exp.tag}
                </div>
                <div className="absolute bottom-3 right-3 px-3 py-1 bg-[#141413]/85 backdrop-blur text-[#D8CCB8] text-[10px] font-mono tracking-wider uppercase rounded">
                  {exp.priceNote}
                </div>
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs text-[#A07E54] font-mono mb-2">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#141413] mb-3 group-hover:text-[#A07E54] transition-colors leading-snug">
                    {exp.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#55524B] leading-relaxed mb-6">
                    {exp.shortDescription}
                  </p>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-[#E7DFD2] flex items-center justify-between gap-3">
                  <button
                    onClick={() => setActiveModalExp(exp)}
                    className="flex-1 py-3 px-4 bg-[#1C1B1A] group-hover:bg-[#B8966C] text-[#FAF8F5] group-hover:text-[#141413] text-xs font-semibold tracking-[0.16em] uppercase rounded flex items-center justify-center space-x-2 transition-all duration-300"
                  >
                    <span>EXPLORE EXPERIENCE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      const prompt = `Hello Zanzirangi Concierge, I would like to inquire about the ${exp.title} experience.`;
                      if (onOpenSupportChat) {
                        onOpenSupportChat(prompt);
                      } else {
                        window.dispatchEvent(new CustomEvent('open-customer-support', { detail: { query: prompt } }));
                      }
                    }}
                    className="p-3 border border-[#B8966C]/60 hover:bg-[#B8966C]/15 text-[#8E6B40] rounded transition-colors cursor-pointer"
                    title="Inquire with Customer Support"
                    aria-label={`Inquire about ${exp.title} with Customer Support`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Detail Lightbox Modal */}
      {activeModalExp && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#FAF8F5] text-[#1C1B1A] max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden border border-[#E7DFD2] animate-fadeIn my-auto">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={activeModalExp.image}
                alt={activeModalExp.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveModalExp(null)}
                className="absolute top-4 right-4 p-2 bg-black/70 hover:bg-black text-white rounded-full transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/75 backdrop-blur rounded text-xs font-mono text-[#C4A27A] uppercase">
                {activeModalExp.tag}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#A07E54] mb-2">
                  <Clock className="w-4 h-4" />
                  <span>{activeModalExp.duration}</span>
                  <span>•</span>
                  <span>{activeModalExp.priceNote}</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141413]">
                  {activeModalExp.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#3E3C38] leading-relaxed">
                {activeModalExp.description}
              </p>

              <div className="p-4 bg-[#F4EFE6] border border-[#E7DFD2] rounded-xl text-xs text-[#55524B] space-y-1">
                <span className="font-semibold text-[#141413] block">
                  Concierge Inclusions:
                </span>
                <p>
                  Private chauffeur transfers from Zanzirangi House, licensed Swahili guides, chilled refreshments, and equipment provided.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    const prompt = `Hello Zanzirangi Concierge, I would like details and availability for ${activeModalExp.title}.`;
                    setActiveModalExp(null);
                    if (onOpenSupportChat) {
                      onOpenSupportChat(prompt);
                    } else {
                      window.dispatchEvent(new CustomEvent('open-customer-support', { detail: { query: prompt } }));
                    }
                  }}
                  className="w-full sm:flex-1 py-3.5 px-5 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs font-semibold tracking-[0.18em] uppercase rounded flex items-center justify-center space-x-2 transition-all shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>SPEAK WITH CUSTOMER SUPPORT</span>
                </button>

                <button
                  onClick={() => {
                    setActiveModalExp(null);
                    onOpenBooking();
                  }}
                  className="w-full sm:w-auto py-3.5 px-6 border border-[#1C1B1A]/30 hover:border-[#1C1B1A] text-[#1C1B1A] text-xs font-semibold tracking-[0.18em] uppercase rounded transition-colors"
                >
                  Add to Reservation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
