import React, { useState } from 'react';
import { Eye, Sparkles, Compass } from 'lucide-react';
import { Language } from '../types';

interface PropertyExperienceSectionProps {
  currentLang: Language;
}

export const PropertyExperienceSection: React.FC<PropertyExperienceSectionProps> = ({ currentLang }) => {
  const facets = [
    {
      id: 'villas',
      title: 'Ocean Villas',
      subtitle: 'Barefoot Luxury & Oceanfront Horizons',
      description: 'Perched along the coral cliff edge, each villa is oriented toward the changing colors of Menai Bay, featuring expansive private sun decks, infinity plunge pools, and open-air bathrooms.',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 'bungalows',
      title: 'Garden Bungalows',
      subtitle: 'Botanical Seclusion & Natural Thatch',
      description: 'Immersed within lush tropical flora, our private bungalows offer complete seclusion, outdoor stone showers, and shaded verandahs surrounded by birdsong and flowering frangipani.',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 'pool',
      title: 'Infinity Swimming Pool',
      subtitle: '25 Meters of Freshwater Stillness',
      description: 'Suspended above the coastal limestone, the freshwater infinity pool seamlessly merges with the turquoise horizon, framed by comfortable double daybeds and attentive poolside service.',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 'lounge',
      title: 'Sunset Lounge & Bar',
      subtitle: 'Golden Hour taarab & Ocean Breezes',
      description: 'An open-sided coastal pavilion where guests gather for pre-dinner aperitifs, cellar vintages, and peaceful taarab melodies while the sun sinks into the Indian Ocean.',
      image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 'garden',
      title: 'Organic Botanical Garden',
      subtitle: 'Spices, Chilies & Fragrant Herbs',
      description: 'Cultivated directly on our estate grounds, our garden supplies the kitchen with organic lemongrass, ginger, chili, mint, and tropical seasonal vegetables every morning.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 'restaurant',
      title: 'Makuti Thatched Pavilion',
      subtitle: 'Heritage Swahili & Coastal Dining',
      description: 'Handcrafted with natural coconut palm thatch (makuti) and local timber, creating a naturally cooled open-air sanctuary for slow farm-to-table dining.',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 'seaview',
      title: 'Coral Lagoon & Sea Views',
      subtitle: 'Unobstructed 180° Indian Ocean Vistas',
      description: 'Watch traditional wooden dhows glide across the coral reef line and spot dolphins playing in the outer waters from our elevated terraces.',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    },
    {
      id: 'outdoor',
      title: 'Outdoor Terraces & Baobab Groves',
      subtitle: 'Centenary Baobabs & Coral Pathways',
      description: 'Sculptural centenary baobabs cast peaceful shade across hand-laid coral ragstone pathways leading down to private beach coves.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    },
  ];

  const [activeFacet, setActiveFacet] = useState(facets[0]);

  return (
    <section id="retreat" className="py-24 md:py-36 bg-[#141413] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#2C2B28]">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.32em] uppercase text-[#C4A27A] font-mono mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Sanctuary Architecture</span>
            </div>
            <h2
              id="property-experience-heading"
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] uppercase text-[#FAF8F5]"
            >
              DISCOVER THE RETREAT
            </h2>
            <p className="font-serif italic text-xl sm:text-2xl text-[#C4A27A] font-light mt-2">
              Inside Zanzirangi House
            </p>
          </div>

          <p className="text-[#D8CCB8]/80 text-sm max-w-md mt-4 md:mt-0 font-light leading-relaxed">
            An architectural dialogue between traditional Swahili stonework, sustainable makuti thatch, and the vast turquoise expanse of the Indian Ocean.
          </p>
        </div>

        {/* Editorial Image-Based Navigation System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Interactive Facet Selector List */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#A07E54] block mb-2">
              Explore Property Spaces
            </span>
            <div className="space-y-1.5 overflow-y-auto max-h-[500px] pr-2">
              {facets.map((facet, idx) => {
                const isActive = activeFacet.id === facet.id;
                return (
                  <button
                    key={facet.id}
                    onClick={() => setActiveFacet(facet)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                      isActive
                        ? 'bg-[#22211F] border border-[#C4A27A] text-white shadow-lg'
                        : 'bg-[#1C1B1A]/60 border border-transparent text-[#D8CCB8]/70 hover:bg-[#1C1B1A] hover:text-white'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#A07E54] block">
                        0{idx + 1}
                      </span>
                      <span className="font-serif text-lg tracking-wide uppercase font-normal block">
                        {facet.title}
                      </span>
                      <span className="text-xs text-[#C4A27A] line-clamp-1">
                        {facet.subtitle}
                      </span>
                    </div>
                    <Eye
                      className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#C4A27A] scale-110' : 'opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Immersive Editorial Photography Canvas */}
          <div className="lg:col-span-8 bg-[#1C1B1A] border border-[#2C2B28] rounded-3xl overflow-hidden shadow-2xl relative min-h-[460px] lg:min-h-[560px] flex flex-col justify-end p-8 sm:p-12">
            <img
              key={activeFacet.id}
              src={activeFacet.image}
              alt={activeFacet.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out hover:scale-105 animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141413] via-[#141413]/40 to-black/30" />

            <div className="relative z-10 max-w-2xl">
              <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#C4A27A] block mb-2">
                {activeFacet.subtitle}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF8F5] mb-4">
                {activeFacet.title}
              </h3>
              <p className="text-sm sm:text-base text-[#E7DFD2] font-light leading-relaxed">
                {activeFacet.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
