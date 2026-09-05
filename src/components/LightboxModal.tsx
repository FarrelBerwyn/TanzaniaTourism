import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem, Language } from '../types';
import { GALLERY_TRANSLATIONS } from '../data/galleryTranslations';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  currentLang?: Language;
  onClose: () => void;
  onNavigate: (newItem: GalleryItem) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  currentLang = 'en',
  onClose,
  onNavigate,
}) => {
  if (!item) return null;

  const tGallery = GALLERY_TRANSLATIONS[currentLang] || GALLERY_TRANSLATIONS.en;
  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onNavigate(items[prevIdx]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % items.length;
    onNavigate(items[nextIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const prevIdx = (currentIndex - 1 + items.length) % items.length;
        onNavigate(items[prevIdx]);
      }
      if (e.key === 'ArrowRight') {
        const nextIdx = (currentIndex + 1) % items.length;
        onNavigate(items[nextIdx]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, items, onClose, onNavigate]);

  const catLabel = tGallery.categories[item.category] || item.category;

  return (
    <div
      id="gallery-lightbox-modal"
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Controls */}
      <div className="flex items-center justify-between text-[#FAF8F5] z-10">
        <div className="font-mono text-xs text-[#D8CCB8] tracking-widest uppercase">
          {tGallery.lightbox.imageCounter(currentIndex + 1, items.length)} • {catLabel}
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#FAF8F5] transition-colors cursor-pointer"
          aria-label={tGallery.lightbox.close}
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-md cursor-pointer"
          aria-label={tGallery.lightbox.prev}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          key={item.id}
          src={item.image || item.src}
          alt={item.title}
          className="max-h-[78vh] max-w-[90vw] object-contain rounded-lg shadow-2xl transition-all duration-500 animate-fadeIn"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all backdrop-blur-md cursor-pointer"
          aria-label={tGallery.lightbox.next}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="text-center z-10" onClick={(e) => e.stopPropagation()}>
        <h4 className="font-serif text-lg sm:text-xl text-[#FAF8F5] font-light tracking-wide">
          {item.title}
        </h4>
        {(item.caption || item.description) && (
          <p className="text-xs text-[#D8CCB8]/80 max-w-xl mx-auto mt-1">
            {item.caption || item.description}
          </p>
        )}
      </div>
    </div>
  );
};
