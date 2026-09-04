import React, { useState } from 'react';
import { UtensilsCrossed, Sparkles, BookOpen, Leaf, Sun, Sunset, Moon, Coffee, HeartHandshake } from 'lucide-react';
import { Language } from '../types';
import { DINING_CATEGORIES } from '../data/dining';
import { TRANSLATIONS } from '../data/translations';
import { ScrollFadeContainer } from './ScrollFadeContainer';

interface DiningSectionProps {
  currentLang: Language;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [menuModalOpen, setMenuModalOpen] = useState(false);

  const currentCategory = DINING_CATEGORIES[activeCategoryIndex];

  const diningMoments = [
    {
      icon: Coffee,
      title: 'Artisanal Breakfast',
      time: '07:00 – 10:30 AM',
      desc: 'Tropical papaya, passion fruit curds, warm freshly-baked brioche, and spiced Tanzanian coffee served overlooking the morning ocean.',
    },
    {
      icon: Sun,
      title: 'Barefoot Coastal Lunch',
      time: '12:30 – 03:30 PM',
      desc: 'Line-caught yellowfin tuna tartare, rock lobster salads, wood-fired flatbreads, and young King coconut water under the palms.',
    },
    {
      icon: Sunset,
      title: 'Sunset Tapas & Taarab',
      time: '05:30 – 07:00 PM',
      desc: 'Crisp plantain crisps, spiced tamarind prawns, cellar wines, and handcrafted botanical cocktails as the ocean horizon turns violet.',
    },
    {
      icon: Moon,
      title: 'Candlelit Dinner',
      time: '07:30 – 10:30 PM',
      desc: 'Slow-simmered Zanzibari coconut curries, Omani spiced braised lamb, and Valrhona chocolate cardamom fondants.',
    },
    {
      icon: UtensilsCrossed,
      title: 'The Restaurant',
      time: 'Open Daily',
      desc: 'Open-air makuti thatched dining pavilion capturing the cool cross-breezes of Menai Bay.',
    },
    {
      icon: HeartHandshake,
      title: 'Private Beach Dining',
      time: 'On Request',
      desc: 'Exclusive barefoot table set on the white sand illuminated by lanterns, featuring a customized tasting menu orchestrated by our head chef.',
    },
  ];

  return (
    <section id="dining" className="pt-16 sm:pt-20 md:pt-28 pb-10 sm:pb-14 md:pb-20 bg-[#FAF8F5] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center space-x-2.5 text-[11px] tracking-[0.32em] uppercase text-[#A07E54] font-semibold mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>Gastronomic Soul</span>
          </div>

          <h2
            id="dining-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] uppercase text-[#141413] mb-4"
          >
            TASTE ZANZIBAR
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-[#8E6B40] font-light mb-4">
            "Fresh ingredients, island flavours and authentic Tanzanian hospitality."
          </p>

          <p className="text-[#6B6862] text-sm sm:text-base leading-relaxed">
            Centuries of Swahili, Omani, and Indian Ocean sea trade come together at our tables. From line-caught fish brought ashore at sunrise to slow-simmered aromatic curries, dining at Zanzirangi House is an authentic sensory journey.
          </p>
        </div>

        {/* Storytelling Element: FROM OUR GARDEN TO YOUR TABLE */}
        <div className="bg-[#F4EFE6] border border-[#E7DFD2] rounded-3xl p-8 sm:p-12 mb-20 relative overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85"
                alt="Organic spice garden at Zanzirangi House"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-3 py-1 bg-black/70 backdrop-blur rounded text-[10px] font-mono uppercase text-[#C4A27A]">
                Estate Garden
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.25em] font-mono uppercase text-[#A07E54]">
                <Leaf className="w-3.5 h-3.5" />
                <span>Culinary Storytelling</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#141413] font-light uppercase">
                FROM OUR GARDEN TO YOUR TABLE
              </h3>

              <p className="text-sm md:text-base text-[#55524B] leading-relaxed">
                Tucked within the grounds of Zanzirangi House is our private botanical garden, where our kitchen team cultivates organic lemongrass, green chilies, wild basil, sweet mint, fragrant cardamom, and seasonal vegetables. What is harvested in the morning directly shapes our daily tasting menus, pairing earth-grown vitality with the fresh catch of southern Zanzibar’s waters.
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2 text-xs font-mono text-[#8E6B40]">
                <span className="px-3 py-1 bg-white/70 border border-[#E7DFD2] rounded-full">
                  🌱 Zero Food Miles
                </span>
                <span className="px-3 py-1 bg-white/70 border border-[#E7DFD2] rounded-full">
                  🌶 Hand-Picked Daily Spices
                </span>
                <span className="px-3 py-1 bg-white/70 border border-[#E7DFD2] rounded-full">
                  🐟 Sustainable Coastal Seafood
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Dining Offerings Grid */}
        <div className="mb-20">
          <div className="mb-8">
            <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#A07E54] block mb-1">
              Curated Meal Services
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#141413] font-light uppercase">
              Dining Throughout the Day
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {diningMoments.map((m, idx) => {
              const Icon = m.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] border border-[#E7DFD2] rounded-2xl p-7 sm:p-8 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#A07E54] group-hover:bg-[#1C1B1A] group-hover:text-[#C4A27A] flex items-center justify-center transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono text-[#A07E54]">
                        {m.time}
                      </span>
                    </div>

                    <h4 className="font-serif text-xl font-normal text-[#141413] mb-2 group-hover:text-[#A07E54] transition-colors">
                      {m.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#55524B] leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cuisine Tradition Tabs & Signature Dishes */}
        <div className="bg-[#1C1B1A] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 border border-[#2C2B28] shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 pb-6 border-b border-[#2C2B28]">
            <div>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#C4A27A] block mb-1">
                Culinary Heritage
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F5]">
                Signature Tasting Portfolios
              </h3>
            </div>

            {/* Scrollable Cuisine Categories with Dynamic Left & Right Gradient Transparent Fade */}
            <ScrollFadeContainer
              className="relative w-full md:w-auto max-w-full overflow-hidden"
              scrollClassName="flex items-center space-x-2 overflow-x-auto no-scrollbar scroll-smooth py-1 pr-14 sm:pr-16"
              leftGradientClass="bg-gradient-to-r from-[#1C1B1A] via-[#1C1B1A]/90 to-transparent"
              rightGradientClass="bg-gradient-to-l from-[#1C1B1A] via-[#1C1B1A]/90 to-transparent"
              fadeWidth="w-12 sm:w-16"
            >
              {DINING_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`whitespace-nowrap flex-shrink-0 px-4 sm:px-5 py-2 text-xs tracking-[0.16em] uppercase font-semibold rounded-full transition-all duration-300 ${
                    activeCategoryIndex === idx
                      ? 'bg-[#B8966C] text-[#141413] shadow-md'
                      : 'bg-[#22211F] text-[#D8CCB8]/70 hover:bg-[#2C2B28] hover:text-white'
                  }`}
                >
                  {cat.tabLabel || cat.name}
                </button>
              ))}
            </ScrollFadeContainer>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden">
              <img
                key={currentCategory.image}
                src={currentCategory.image}
                alt={currentCategory.name}
                className="w-full h-full object-cover animate-fadeIn"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono tracking-widest text-[#C4A27A] uppercase block">
                  {currentCategory.subtitle}
                </span>
                <p className="font-serif text-lg font-light italic">
                  {currentCategory.name}
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm text-[#D8CCB8] leading-relaxed">
                {currentCategory.description}
              </p>

              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#C4A27A] flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Featured Dishes:</span>
                </span>

                {currentCategory.signatureDishes.slice(0, 3).map((dish, i) => (
                  <div key={i} className="space-y-0.5 border-b border-[#2C2B28]/60 pb-2.5">
                    <p className="font-serif text-base font-normal text-[#FAF8F5]">
                      {dish.name}
                    </p>
                    <p className="text-xs text-[#D8CCB8]/70">
                      {dish.description}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => setMenuModalOpen(true)}
                className="py-3.5 px-6 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs font-bold tracking-[0.2em] uppercase rounded flex items-center justify-center space-x-2 transition-colors mt-4"
              >
                <BookOpen className="w-4 h-4" />
                <span>EXPLORE COMPLETE MENU</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Seasonal Menu Modal */}
      {menuModalOpen && (
        <div
          id="menu-preview-modal"
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#FAF8F5] max-w-2xl w-full rounded-2xl shadow-2xl p-6 sm:p-8 border border-[#E7DFD2] space-y-6 animate-fadeIn my-auto">
            <div className="flex items-center justify-between border-b border-[#E7DFD2] pb-4">
              <div>
                <span className="text-[10px] tracking-[0.2em] font-mono uppercase text-[#A07E54] block">
                  Zanzirangi House Dining
                </span>
                <h3 className="font-serif text-2xl text-[#141413]">
                  Seasonal Tasting Portfolio
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

            <div className="p-4 bg-[#F4EFE6] rounded-xl text-xs text-[#6B6862] text-center border border-[#E7DFD2]">
              Special dietary preferences, Halal, Vegan, and Private Beach Dining can be orchestrated directly with our Executive Chef.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
