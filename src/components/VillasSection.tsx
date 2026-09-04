import React, { useState } from 'react';
import { Users, Bed, Bath, ArrowRight, Waves, Check, Sparkles, Eye } from 'lucide-react';
import { Villa, Language } from '../types';
import { VILLAS_DATA } from '../data/villas';
import { TRANSLATIONS } from '../data/translations';

interface VillasSectionProps {
  currentLang: Language;
  onSelectVilla: (villa: Villa) => void;
  onRequestBooking: (villaId: string) => void;
}

export const VillasSection: React.FC<VillasSectionProps> = ({
  currentLang,
  onSelectVilla,
  onRequestBooking,
}) => {
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.en;
  const [activeFilter, setActiveFilter] = useState<'all' | 'villas' | 'bungalows' | 'rooms'>('all');

  const filteredVillas = VILLAS_DATA.filter((v) => {
    if (activeFilter === 'villas') {
      return v.id === 'villa-01' || v.id === 'villa-03' || v.id === 'villa-06' || v.id === 'villa-08';
    }
    if (activeFilter === 'bungalows') {
      return v.id === 'villa-02' || v.id === 'villa-05';
    }
    if (activeFilter === 'rooms') {
      return v.id === 'villa-04' || v.id === 'villa-07';
    }
    return true;
  });

  const featuredVilla = VILLAS_DATA[0]; // Sultan Oceanfront Villa

  return (
    <section id="stay" className="py-24 md:py-36 bg-[#F4EFE6] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E7DFD2]">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#A07E54] font-semibold mb-3">
              <span className="w-5 h-[1px] bg-[#A07E54]" />
              <span>Sanctuary Accommodations</span>
            </div>
            <h2
              id="villas-heading"
              className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] uppercase text-[#141413]"
            >
              STAY YOUR WAY
            </h2>
            <p className="text-[#6B6862] text-sm sm:text-base font-normal mt-2 max-w-xl">
              From oceanfront pool villas to peaceful garden bungalows, each sanctuary is sculpted with local materials, open cross-breezes, and discreet hospitality.
            </p>
          </div>

          {/* Filter Tabs: Villas, Bungalows, Rooms */}
          <div className="flex items-center space-x-2 mt-8 md:mt-0 overflow-x-auto pb-2 no-scrollbar">
            {[
              { key: 'all', label: 'All Accommodations' },
              { key: 'villas', label: 'Villas' },
              { key: 'bungalows', label: 'Bungalows' },
              { key: 'rooms', label: 'Suites & Rooms' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key as any)}
                className={`px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-semibold rounded-full transition-all whitespace-nowrap ${
                  activeFilter === tab.key
                    ? 'bg-[#1C1B1A] text-[#FAF8F5] shadow-lg'
                    : 'bg-[#E7DFD2]/70 text-[#3E3C38] hover:bg-[#E7DFD2]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Flagship Villa Banner */}
        {activeFilter === 'all' && (
          <div className="mb-20">
            <div className="bg-[#FAF8F5] border border-[#E7DFD2] rounded-2xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 group">
              {/* Image with zoom interaction */}
              <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden">
                <img
                  src={featuredVilla.heroImage}
                  alt={featuredVilla.name}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-5 left-5 px-3.5 py-1.5 bg-[#141413]/85 backdrop-blur-md text-[#FAF8F5] text-xs tracking-[0.2em] uppercase font-semibold rounded flex items-center space-x-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C4A27A]" />
                  <span>Flagship Sanctuary</span>
                </div>
                <div className="absolute top-5 right-5 px-3 py-1.5 bg-cyan-950/80 backdrop-blur-md text-cyan-200 text-xs tracking-wider uppercase font-semibold rounded flex items-center space-x-1.5">
                  <Waves className="w-3.5 h-3.5" />
                  <span>Direct Sea View</span>
                </div>
                <div className="absolute bottom-5 right-5 px-3 py-1.5 bg-black/75 backdrop-blur-md text-[#FAF8F5] text-sm font-serif rounded">
                  {featuredVilla.pricePerNight} <span className="text-[10px] font-sans text-[#D8CCB8]">per night</span>
                </div>
              </div>

              {/* Information Column */}
              <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono tracking-widest text-[#A07E54] uppercase block mb-1">
                    {featuredVilla.roomNumber}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141413] tracking-wide mb-2">
                    {featuredVilla.name}
                  </h3>
                  <p className="text-xs tracking-wider uppercase text-[#6B6862] font-semibold mb-4">
                    {featuredVilla.type}
                  </p>
                  <p className="text-sm text-[#3E3C38] leading-relaxed mb-6">
                    {featuredVilla.shortDescription}
                  </p>

                  {/* Specifications Matrix */}
                  <div className="grid grid-cols-3 gap-3 py-4 border-y border-[#E7DFD2] text-xs text-[#2C2B28] mb-6">
                    <div className="flex items-center space-x-1.5">
                      <Users className="w-4 h-4 text-[#A07E54]" />
                      <span>{featuredVilla.capacity} Guests</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Bed className="w-4 h-4 text-[#A07E54]" />
                      <span>{featuredVilla.bed.split(' ')[0]} Bed</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Bath className="w-4 h-4 text-[#A07E54]" />
                      <span>Stone Bath</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5 mb-8">
                    {featuredVilla.amenities.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-[#55524B]">
                        <Check className="w-3.5 h-3.5 text-[#A07E54] flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#E7DFD2]">
                  <button
                    onClick={() => onSelectVilla(featuredVilla)}
                    className="w-full sm:flex-1 py-3.5 px-5 bg-[#1C1B1A] hover:bg-[#2C2B28] text-[#FAF8F5] text-xs font-semibold tracking-[0.18em] uppercase rounded flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95"
                  >
                    <span>DISCOVER THIS ROOM</span>
                    <ArrowRight className="w-4 h-4 text-[#C4A27A]" />
                  </button>

                  <button
                    onClick={() => onRequestBooking(featuredVilla.id)}
                    className="w-full sm:w-auto py-3.5 px-6 border border-[#B8966C] hover:bg-[#B8966C]/15 text-[#8E6B40] text-xs font-semibold tracking-[0.18em] uppercase rounded transition-colors"
                  >
                    INQUIRE
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accommodation Cards Grid for All Units */}
        <div
          id="villas-grid"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
        >
          {filteredVillas.map((villa) => {
            const hasSeaView =
              villa.view.toLowerCase().includes('ocean') ||
              villa.view.toLowerCase().includes('sea') ||
              villa.view.toLowerCase().includes('lagoon');

            return (
              <div
                key={villa.id}
                className="bg-[#FAF8F5] border border-[#E7DFD2] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group"
              >
                {/* Card Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={villa.heroImage}
                    alt={villa.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#141413]/85 backdrop-blur text-[#FAF8F5] text-[10px] font-mono tracking-widest uppercase rounded">
                    {villa.roomNumber}
                  </div>

                  {hasSeaView && (
                    <div className="absolute top-4 right-4 px-2.5 py-1 bg-cyan-950/80 backdrop-blur text-cyan-200 text-[10px] tracking-wider uppercase font-semibold rounded flex items-center space-x-1">
                      <Waves className="w-3 h-3" />
                      <span>Sea View</span>
                    </div>
                  )}

                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-black/75 backdrop-blur text-[#FAF8F5] text-xs font-serif rounded">
                    {villa.pricePerNight} <span className="text-[10px] font-sans text-[#D8CCB8]">/ night</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-7 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#141413] tracking-wide mb-1 group-hover:text-[#A07E54] transition-colors">
                      {villa.name}
                    </h4>
                    <p className="text-[11px] tracking-wider uppercase text-[#6B6862] font-semibold mb-3">
                      {villa.type}
                    </p>
                    <p className="text-xs text-[#55524B] leading-relaxed line-clamp-2 mb-4">
                      {villa.shortDescription}
                    </p>

                    {/* Micro Specs */}
                    <div className="flex items-center space-x-3 text-[11px] text-[#6B6862] py-3 border-t border-[#E7DFD2] mb-5">
                      <span className="flex items-center space-x-1">
                        <Users className="w-3.5 h-3.5 text-[#A07E54]" />
                        <span>{villa.capacity} Guests</span>
                      </span>
                      <span>•</span>
                      <span className="flex items-center space-x-1 truncate">
                        <Bed className="w-3.5 h-3.5 text-[#A07E54]" />
                        <span className="truncate">{villa.bed.split(' ')[0]}</span>
                      </span>
                      <span>•</span>
                      <span>{villa.size.split(' ')[0]} m²</span>
                    </div>
                  </div>

                  {/* Discover This Room CTA */}
                  <div className="pt-2">
                    <button
                      onClick={() => onSelectVilla(villa)}
                      className="w-full py-3 px-4 bg-[#1C1B1A] group-hover:bg-[#B8966C] text-[#FAF8F5] group-hover:text-[#141413] text-xs font-semibold tracking-[0.18em] uppercase rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow-sm"
                    >
                      <span>DISCOVER THIS ROOM</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
