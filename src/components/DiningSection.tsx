import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { DINING_CATEGORIES } from '../data/dining';
import { TRANSLATIONS } from '../data/translations';

interface DiningSectionProps {
  currentLang: Language;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const currentCategory = DINING_CATEGORIES[activeCategoryIndex];

  return (
    <section id="dining" className="py-24 md:py-32 bg-[#FAF8F5] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#A07E54] font-medium mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Gastronomic Philosophy</span>
          </div>
          <h2
            id="dining-heading"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.05em] uppercase text-[#141413] mb-4"
          >
            {t.dining.heading}
          </h2>
          <p className="text-[#6B6862] text-sm sm:text-base leading-relaxed">
            {t.dining.subhead}
          </p>

          {/* Cuisine Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3.5 mt-8">
            {DINING_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryIndex(idx)}
                className={`px-4 sm:px-6 py-2.5 text-xs tracking-[0.16em] uppercase font-semibold rounded-full transition-all duration-300 ${
                  activeCategoryIndex === idx
                    ? 'bg-[#1C1B1A] text-[#FAF8F5] shadow-lg'
                    : 'bg-[#E7DFD2]/60 text-[#3E3C38] hover:bg-[#E7DFD2]'
                }`}
              >
                {cat.tabLabel || cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Active Category Editorial Presentation */}
        <div className="bg-[#F4EFE6] border border-[#E7DFD2] rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-center mb-12">
          {/* Photography */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto h-full min-h-[380px] overflow-hidden">
            <img
              key={currentCategory.image}
              src={currentCategory.image}
              alt={currentCategory.name}
              className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#D8CCB8] block mb-1">
                Farm-to-Table & Ocean Fresh
              </span>
              <p className="font-serif text-xl tracking-wide italic">
                {currentCategory.subtitle}
              </p>
            </div>
          </div>

          {/* Detailed Narrative & Signature Dishes */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#A07E54] uppercase block mb-1">
                Culinary Portfolio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141413]">
                {currentCategory.name}
              </h3>
              <p className="text-xs tracking-wider uppercase text-[#6B6862] mt-1 mb-4">
                {currentCategory.subtitle}
              </p>
              <p className="text-sm text-[#3E3C38] leading-relaxed">
                {currentCategory.description}
              </p>
            </div>

            {/* Signature Tasting Items */}
            <div className="space-y-3 pt-4 border-t border-[#E7DFD2]">
              <h4 className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A07E54] flex items-center space-x-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.dining.signatureDishes}</span>
              </h4>

              {currentCategory.signatureDishes.map((dish, i) => (
                <div key={i} className="space-y-0.5">
                  <p className="font-serif text-base font-normal text-[#141413]">
                    {dish.name}
                  </p>
                  <p className="text-xs text-[#6B6862] leading-normal">
                    {dish.description}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setMenuModalOpen(true)}
              className="w-full py-3 px-4 bg-[#1C1B1A] hover:bg-[#2C2B28] text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase rounded flex items-center justify-center space-x-2 transition-colors mt-6"
            >
              <BookOpen className="w-4 h-4 text-[#C4A27A]" />
              <span>{t.dining.exploreMenu}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Menu Preview Modal */}
      {menuModalOpen && (
        <div
          id="menu-preview-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-xl shadow-2xl p-6 sm:p-8 border border-[#E7DFD2] space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-[#E7DFD2] pb-4">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#A07E54] block">
                  The Tamarind Pavilion
                </span>
                <h3 className="font-serif text-2xl text-[#141413]">
                  Seasonal Tasting Menu
                </h3>
              </div>
              <button
                onClick={() => setMenuModalOpen(false)}
                className="text-xs uppercase tracking-wider text-[#6B6862] hover:text-black font-semibold px-2 py-1"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-6 text-sm text-[#2C2B28] max-h-[60vh] overflow-y-auto pr-2">
              {DINING_CATEGORIES.map((cat) => (
                <div key={cat.id} className="space-y-3">
                  <h4 className="font-serif text-lg font-semibold text-[#A07E54] border-b border-[#E7DFD2]/60 pb-1">
                    {cat.name}
                  </h4>
                  {cat.signatureDishes.map((dish, idx) => (
                    <div key={idx} className="flex justify-between items-start gap-4">
                      <div>
                        <p className="font-medium text-[#141413]">{dish.name}</p>
                        <p className="text-xs text-[#6B6862]">{dish.description}</p>
                      </div>
                      <span className="font-mono text-xs text-[#A07E54] font-semibold whitespace-nowrap">
                        A La Carte
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#F4EFE6] rounded text-xs text-[#6B6862] text-center border border-[#E7DFD2]">
              Special dietary preferences, Halal, Vegan, and Private Beach Dining can be orchestrated directly with our Executive Chef upon arrival.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
