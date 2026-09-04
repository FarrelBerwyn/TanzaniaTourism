import React from 'react';
import { Globe, ArrowUp, Instagram, Facebook, Settings } from 'lucide-react';
import { Language } from '../types';
import { PROPERTY_CONFIG } from '../data/propertyConfig';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenBooking: () => void;
  onOpenCmsPitch: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectLang,
  onOpenBooking,
  onOpenCmsPitch,
}) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'ar', label: 'العربية' },
    { code: 'zh', label: '中文' },
    { code: 'fr', label: 'Français' },
    { code: 'sw', label: 'Kiswahili' },
    { code: 'es', label: 'Español' },
    { code: 'it', label: 'Italiano' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0D0D0C] text-[#FAF8F5] pt-20 pb-12 border-t border-[#22211F]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#22211F]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl tracking-[0.16em] uppercase text-[#FAF8F5] block">
              {PROPERTY_CONFIG.name}
            </span>
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#C4A27A] block font-mono">
              Zanzibar • Tanzania
            </span>
            <p className="text-xs sm:text-sm text-[#D8CCB8]/80 leading-relaxed max-w-sm">
              {t.footer.brandStatement}
            </p>

            {/* Pitching Note Pill */}
            <div className="pt-2">
              <button
                onClick={onOpenCmsPitch}
                className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#1C1B1A] border border-[#C4A27A]/30 rounded text-[10px] uppercase font-mono tracking-wider text-[#D8CCB8] hover:border-[#C4A27A] transition-colors"
              >
                <Settings className="w-3 h-3 text-[#C4A27A]" />
                <span>Client CMS & Admin Demo</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A07E54] block mb-2">
              {t.footer.quickLinks}
            </span>
            <ul className="space-y-2 text-xs tracking-wider uppercase text-[#D8CCB8]/90">
              <li>
                <a href="#stay" className="hover:text-[#C4A27A] transition-colors">
                  {t.nav.stay}
                </a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#C4A27A] transition-colors">
                  {t.nav.experiences}
                </a>
              </li>
              <li>
                <a href="#facilities" className="hover:text-[#C4A27A] transition-colors">
                  {t.nav.facilities}
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-[#C4A27A] transition-colors">
                  {t.nav.dining}
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C4A27A] transition-colors">
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C4A27A] transition-colors">
                  {t.nav.location}
                </a>
              </li>
            </ul>
          </div>

          {/* Concierge & Inquiries */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A07E54] block mb-2">
              {t.footer.contactConcierge}
            </span>
            <div className="space-y-2 text-xs text-[#D8CCB8]/90 font-mono">
              <p>
                <span className="text-[10px] text-[#6B6862] block">Reservations:</span>
                <a href={`tel:${PROPERTY_CONFIG.contact.phone}`} className="hover:text-[#C4A27A]">
                  {PROPERTY_CONFIG.contact.phone}
                </a>
              </p>
              <p>
                <span className="text-[10px] text-[#6B6862] block">WhatsApp:</span>
                <a
                  href={`https://wa.me/${PROPERTY_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 text-emerald-500"
                >
                  {PROPERTY_CONFIG.contact.whatsapp}
                </a>
              </p>
              <p>
                <span className="text-[10px] text-[#6B6862] block">Email:</span>
                <a href={`mailto:${PROPERTY_CONFIG.contact.email}`} className="hover:text-[#C4A27A]">
                  {PROPERTY_CONFIG.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Social & Language */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#A07E54] block">
              Languages
            </span>
            <div className="flex flex-col space-y-1 text-xs">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onSelectLang(l.code)}
                  className={`text-left py-0.5 transition-colors ${
                    currentLang === l.code
                      ? 'text-[#C4A27A] font-semibold'
                      : 'text-[#D8CCB8]/60 hover:text-[#FAF8F5]'
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={PROPERTY_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF8F5] hover:border-[#C4A27A] hover:text-[#C4A27A] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={PROPERTY_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#FAF8F5] hover:border-[#C4A27A] hover:text-[#C4A27A] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B6862] gap-4">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} {PROPERTY_CONFIG.name}. {t.footer.allRightsReserved}
          </p>

          <p className="text-[11px] font-mono text-[#A07E54] text-center">
            {t.footer.clientDemoNotice}
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-xs tracking-wider uppercase text-[#D8CCB8] hover:text-white transition-colors"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
