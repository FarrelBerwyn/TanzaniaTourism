import React from 'react';
import { Car, Plane, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { PROPERTY_CONFIG } from '../data/propertyConfig';
import { SHUTTLE_TRANSLATIONS } from '../data/serviceTranslations';

interface ShuttleSectionProps {
  currentLang: Language;
  onOpenBooking: () => void;
}

export const ShuttleSection: React.FC<ShuttleSectionProps> = ({
  currentLang,
  onOpenBooking,
}) => {
  const t = SHUTTLE_TRANSLATIONS[currentLang] || SHUTTLE_TRANSLATIONS.en;

  const whatsappTransferUrl = `https://wa.me/${PROPERTY_CONFIG.whatsappNumber}?text=${encodeURIComponent(
    t.whatsappMessage
  )}`;

  return (
    <section id="shuttle" className="py-24 md:py-36 bg-[#FAF8F5] text-[#1C1B1A]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2.5 text-[11px] tracking-[0.32em] uppercase text-[#A07E54] font-semibold mb-3">
            <Car className="w-3.5 h-3.5" />
            <span>{t.eyebrow}</span>
          </div>

          <h2
            id="shuttle-heading"
            className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.04em] uppercase text-[#141413] mb-4"
          >
            {t.heading}
          </h2>

          <p className="text-[#6B6862] text-sm sm:text-base leading-relaxed max-w-2xl">
            {t.subhead}
          </p>
        </div>

        {/* 2-Column Showcase: Editorial Vehicle Image + Structured Information Card */}
        <div className="bg-[#F4EFE6] border border-[#E7DFD2] rounded-3xl overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* Vehicle Photography */}
          <div className="lg:col-span-7 relative aspect-[16/11] lg:aspect-auto h-full min-h-[380px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85"
              alt="Luxury private chauffeur transport"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#D8CCB8] block mb-1">
                  {t.routeLabel}
                </span>
                <p className="font-serif text-xl tracking-wide italic">
                  {t.routeTitle}
                </p>
              </div>
            </div>
          </div>

          {/* Structured Safe Vehicle Information Card */}
          <div className="lg:col-span-5 p-8 sm:p-12 space-y-8">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-[#A07E54] uppercase block mb-1">
                  {t.specsEyebrow}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141413]">
                  {t.cardTitle}
                </h3>
              </div>

              {/* Information Matrix */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start space-x-3 p-3.5 bg-[#FAF8F5] border border-[#E7DFD2] rounded-xl">
                  <Plane className="w-4 h-4 text-[#A07E54] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#141413] block text-xs uppercase tracking-wider">
                      {t.airportTitle}
                    </span>
                    <span className="text-[#6B6862] text-xs">
                      {t.airportDesc}
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3.5 bg-[#FAF8F5] border border-[#E7DFD2] rounded-xl">
                  <Car className="w-4 h-4 text-[#A07E54] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#141413] block text-xs uppercase tracking-wider">
                      {t.shuttleTitle}
                    </span>
                    <span className="text-[#6B6862] text-xs">
                      {t.shuttleDesc}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#FAF8F5] border border-[#E7DFD2] rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#A07E54] block">
                      {t.vehicleLabel}
                    </span>
                    <span className="text-xs text-[#2C2B28] font-medium">
                      {t.vehicleValue}
                    </span>
                    <span className="text-[10px] text-[#8E6B40] block mt-0.5">
                      {t.vehicleSub}
                    </span>
                  </div>

                  <div className="p-3 bg-[#FAF8F5] border border-[#E7DFD2] rounded-xl">
                    <span className="text-[10px] uppercase font-mono text-[#A07E54] block">
                      {t.paxLabel}
                    </span>
                    <span className="text-xs text-[#2C2B28] font-medium">
                      {t.paxValue}
                    </span>
                    <span className="text-[10px] text-[#8E6B40] block mt-0.5">
                      {t.paxSub}
                    </span>
                  </div>
                </div>
              </div>

              {/* Factually Safe Note */}
              <div className="p-4 bg-[#FAF8F5] border-l-2 border-[#B8966C] rounded-r text-xs text-[#55524B]">
                {t.safetyNote}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-[#E7DFD2] flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappTransferUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-5 bg-[#1C1B1A] hover:bg-[#B8966C] text-[#FAF8F5] hover:text-[#141413] text-xs font-bold tracking-[0.18em] uppercase rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow-md active:scale-95 text-center"
              >
                <span>{t.ctaRequest}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenBooking}
                className="py-3.5 px-5 border border-[#1C1B1A]/25 hover:border-[#1C1B1A] text-[#1C1B1A] text-xs font-semibold tracking-wider uppercase rounded transition-colors text-center cursor-pointer"
              >
                {t.ctaAddBooking}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
