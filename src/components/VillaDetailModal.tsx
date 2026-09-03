import React, { useState } from 'react';
import { X, Users, Bed, Bath, Maximize2, Eye, Check, Calendar, ArrowRight } from 'lucide-react';
import { Villa, Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface VillaDetailModalProps {
  villa: Villa | null;
  currentLang: Language;
  onClose: () => void;
  onRequestBooking: (villaId: string) => void;
}

export const VillaDetailModal: React.FC<VillaDetailModalProps> = ({
  villa,
  currentLang,
  onClose,
  onRequestBooking,
}) => {
  if (!villa) return null;

  const t = TRANSLATIONS[currentLang];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allImages = villa.images && villa.images.length > 0 ? villa.images : [villa.heroImage];

  return (
    <div
      id="villa-detail-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-5xl bg-[#FAF8F5] text-[#1C1B1A] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF8F5]/95 backdrop-blur border-b border-[#E7DFD2]">
          <div className="flex items-center space-x-3">
            <span className="px-2.5 py-1 text-[10px] tracking-[0.2em] font-semibold bg-[#1C1B1A] text-[#FAF8F5] rounded">
              {villa.roomNumber}
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-light tracking-wide text-[#141413]">
              {villa.name}
            </h3>
          </div>

          <button
            id="close-villa-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#1C1B1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-1">
          {/* Gallery View */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden bg-black/5 shadow-inner">
              <img
                src={allImages[activeImageIndex]}
                alt={`${villa.name} view`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-[#FAF8F5] text-xs tracking-wider rounded">
                {villa.pricePerNight} <span className="text-[10px] text-[#D8CCB8]">{t.villas.perNight}</span>
              </div>
            </div>

            {/* Thumbnails */}
            {allImages.length > 1 && (
              <div className="flex items-center space-x-3 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative flex-shrink-0 w-20 sm:w-24 aspect-[4/3] rounded overflow-hidden border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#B8966C] scale-95 shadow-md'
                        : 'border-transparent opacity-65 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Specifications Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 py-5 border-y border-[#E7DFD2] text-xs">
            <div className="flex items-center space-x-2.5">
              <Users className="w-4 h-4 text-[#A07E54]" />
              <div>
                <p className="text-[10px] uppercase text-[#6B6862] tracking-wider">{t.villas.maxGuests}</p>
                <p className="font-semibold text-[#141413]">{villa.capacity} Guests</p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Bed className="w-4 h-4 text-[#A07E54]" />
              <div>
                <p className="text-[10px] uppercase text-[#6B6862] tracking-wider">{t.villas.bed}</p>
                <p className="font-semibold text-[#141413] truncate">{villa.bed}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Bath className="w-4 h-4 text-[#A07E54]" />
              <div>
                <p className="text-[10px] uppercase text-[#6B6862] tracking-wider">{t.villas.bath}</p>
                <p className="font-semibold text-[#141413]">{villa.bathroom}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5">
              <Maximize2 className="w-4 h-4 text-[#A07E54]" />
              <div>
                <p className="text-[10px] uppercase text-[#6B6862] tracking-wider">{t.villas.size}</p>
                <p className="font-semibold text-[#141413]">{villa.size}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2.5 col-span-2 sm:col-span-1">
              <Eye className="w-4 h-4 text-[#A07E54]" />
              <div>
                <p className="text-[10px] uppercase text-[#6B6862] tracking-wider">{t.villas.view}</p>
                <p className="font-semibold text-[#141413] truncate">{villa.view}</p>
              </div>
            </div>
          </div>

          {/* Description & Architecture */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg tracking-wide uppercase text-[#141413]">
              About {villa.name}
            </h4>
            <p className="text-[#3E3C38] leading-relaxed text-sm sm:text-base">
              {villa.description}
            </p>

            {villa.architecturalFeature && (
              <div className="p-4 bg-[#F4EFE6] border-l-2 border-[#B8966C] rounded-r text-xs text-[#2C2B28]">
                <strong className="tracking-wider uppercase text-[10px] block text-[#A07E54] mb-1">
                  Architectural Signature
                </strong>
                {villa.architecturalFeature}
              </div>
            )}
          </div>

          {/* Amenities Grid */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg tracking-wide uppercase text-[#141413]">
              {t.villas.amenities}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {villa.amenities.map((item, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-[#3E3C38]">
                  <span className="w-4 h-4 rounded-full bg-[#B8966C]/20 text-[#A07E54] flex items-center justify-center flex-shrink-0">
                    <Check className="w-2.5 h-2.5" />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="sticky bottom-0 z-20 flex items-center justify-between px-6 py-4 bg-[#FAF8F5] border-t border-[#E7DFD2]">
          <div>
            <span className="text-[10px] tracking-wider uppercase text-[#6B6862] block">
              Starting Rate
            </span>
            <span className="font-serif text-2xl font-semibold text-[#141413]">
              {villa.pricePerNight}
              <span className="text-xs font-sans text-[#6B6862] ml-1 font-normal">
                {t.villas.perNight}
              </span>
            </span>
          </div>

          <button
            id="modal-request-booking-btn"
            onClick={() => {
              onClose();
              onRequestBooking(villa.id);
            }}
            className="px-6 py-3 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs font-semibold tracking-[0.18em] uppercase rounded flex items-center space-x-2 transition-all shadow-md active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.villas.requestBooking}</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
