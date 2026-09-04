import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';
import { GalleryItem, GalleryCategory, Language } from '../types';
import { GALLERY_DATA } from '../data/gallery';
import { TRANSLATIONS } from '../data/translations';
import { LightboxModal } from './LightboxModal';

interface GallerySectionProps {
  currentLang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories: { id: GalleryCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'All Photographs' },
    { id: 'property', label: 'Property' },
    { id: 'villas', label: 'Villas' },
    { id: 'dining', label: 'Dining' },
    { id: 'pool', label: 'Pool' },
    { id: 'garden', label: 'Garden' },
    { id: 'zanzibar', label: 'Zanzibar' },
    { id: 'experiences', label: 'Experiences' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#141413] text-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] tracking-[0.3em] uppercase text-[#C4A27A] font-medium mb-3">
              <Camera className="w-3.5 h-3.5" />
              <span>Visual Archive</span>
            </div>
            <h2
              id="gallery-heading"
              className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.05em] uppercase text-[#FAF8F5]"
            >
              {t.gallery.heading}
            </h2>
            <p className="text-[#D8CCB8]/80 text-sm sm:text-base mt-2 max-w-xl">
              {t.gallery.subhead}
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs tracking-[0.14em] uppercase font-semibold rounded-full transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-[#B8966C] text-[#141413] shadow-lg'
                  : 'bg-[#22211F] text-[#D8CCB8]/70 hover:bg-[#2C2B28] hover:text-[#FAF8F5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Masonry Layout */}
        <div
          id="gallery-masonry-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item, index) => {
            // Give varied aspect ratios for editorial feel
            const isWide = index % 5 === 0;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`relative rounded-xl overflow-hidden cursor-pointer group shadow-lg border border-[#2C2B28] ${
                  isWide ? 'sm:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image || item.src}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#C4A27A]">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-lg text-white font-normal tracking-wide">
                    {item.title}
                  </h4>
                  {(item.caption || item.description) && (
                    <p className="text-xs text-[#D8CCB8]/90 line-clamp-1 mt-0.5">
                      {item.caption || item.description}
                    </p>
                  )}
                  <span className="inline-flex items-center space-x-1 text-[10px] uppercase tracking-wider text-[#FAF8F5] mt-3 font-semibold">
                    <Maximize2 className="w-3 h-3 text-[#C4A27A]" />
                    <span>{t.gallery.fullscreen}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <LightboxModal
          item={selectedItem}
          items={filteredItems}
          onClose={() => setSelectedItem(null)}
          onNavigate={(newItem) => setSelectedItem(newItem)}
        />
      )}
    </section>
  );
};
