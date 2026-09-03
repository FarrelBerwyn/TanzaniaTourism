import React, { useState } from 'react';
import { X, Calendar, Users, Home, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { VILLAS_DATA } from '../data/villas';
import { PROPERTY_CONFIG } from '../data/propertyConfig';
import { TRANSLATIONS } from '../data/translations';

interface BookingModalProps {
  isOpen: boolean;
  initialVillaId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: number;
  currentLang: Language;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialVillaId,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
  currentLang,
  onClose,
}) => {
  if (!isOpen) return null;

  const t = TRANSLATIONS[currentLang];

  const today = new Date();
  const defaultCheckIn =
    initialCheckIn ||
    new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];
  const defaultCheckOut =
    initialCheckOut ||
    new Date(today.getTime() + 19 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const [selectedVillaId, setSelectedVillaId] = useState(initialVillaId || VILLAS_DATA[0].id);
  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(initialGuests || 2);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [airportTransfer, setAirportTransfer] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const chosenVilla =
    VILLAS_DATA.find((v) => v.id === selectedVillaId) || VILLAS_DATA[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const generateWhatsAppUrl = () => {
    const message = encodeURIComponent(
      `Jambo ${PROPERTY_CONFIG.name} Concierge,\n\nI would like to request a reservation for:\n• Villa: ${chosenVilla.name} (${chosenVilla.roomNumber})\n• Dates: ${checkIn} to ${checkOut}\n• Guests: ${guests}\n• Name: ${fullName || 'Guest'}\n• Airport Transfer: ${airportTransfer ? 'Yes' : 'No'}\n\nPlease confirm availability and bespoke rates.`
    );
    return `https://wa.me/${PROPERTY_CONFIG.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
  };

  return (
    <div
      id="booking-inquiry-modal"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 lg:p-10 animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="relative w-full max-w-3xl bg-[#FAF8F5] text-[#1C1B1A] rounded-xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 sm:px-8 py-5 bg-[#FAF8F5] border-b border-[#E7DFD2]">
          <div>
            <span className="text-[10px] tracking-[0.25em] font-mono uppercase text-[#A07E54] block">
              {PROPERTY_CONFIG.name} Concierge
            </span>
            <h3 className="font-serif text-2xl font-light text-[#141413] tracking-wide">
              {t.bookingModal.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-black/5 text-[#1C1B1A] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-6 sm:p-8 flex-1">
          {isSuccess ? (
            <div className="text-center py-10 space-y-6 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="font-serif text-2xl text-[#141413]">
                  {t.bookingModal.successTitle}
                </h4>
                <p className="text-sm text-[#55524B] max-w-md mx-auto leading-relaxed">
                  {t.bookingModal.successMessage}
                </p>
              </div>

              {/* Inquiry Summary Pill */}
              <div className="bg-[#F4EFE6] border border-[#E7DFD2] p-5 rounded-lg max-w-md mx-auto text-left text-xs space-y-1.5 font-mono">
                <p>
                  <strong className="text-[#A07E54]">Accommodation:</strong> {chosenVilla.name} ({chosenVilla.roomNumber})
                </p>
                <p>
                  <strong className="text-[#A07E54]">Dates:</strong> {checkIn} → {checkOut}
                </p>
                <p>
                  <strong className="text-[#A07E54]">Party Size:</strong> {guests} Guests
                </p>
                <p>
                  <strong className="text-[#A07E54]">Guest:</strong> {fullName} ({email})
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wider uppercase rounded flex items-center justify-center space-x-2 transition-all shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.bookingModal.chatViaWhatsapp}</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 border border-[#1C1B1A]/30 hover:bg-[#1C1B1A] hover:text-[#FAF8F5] text-[#1C1B1A] text-xs font-semibold tracking-wider uppercase rounded transition-all"
                >
                  {t.bookingModal.close}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <p className="text-xs text-[#6B6862] leading-relaxed">
                {t.bookingModal.subtitle}
              </p>

              {/* Accommodation & Dates Section */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#A07E54] border-b border-[#E7DFD2] pb-1.5 flex items-center space-x-1.5">
                  <span>01.</span>
                  <span>{t.bookingModal.step1}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Preferred Villa */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="modal-villa-select"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.bookingModal.selectedVilla}
                    </label>
                    <select
                      id="modal-villa-select"
                      value={selectedVillaId}
                      onChange={(e) => setSelectedVillaId(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                    >
                      {VILLAS_DATA.map((v) => (
                        <option key={v.id} value={v.id}>
                          {v.roomNumber} - {v.name} ({v.type}) • {v.pricePerNight}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Dates */}
                  <div>
                    <label
                      htmlFor="modal-checkin-date"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.quickBooking.checkIn}
                    </label>
                    <input
                      id="modal-checkin-date"
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-checkout-date"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.quickBooking.checkOut}
                    </label>
                    <input
                      id="modal-checkout-date"
                      type="date"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                      required
                    />
                  </div>

                  {/* Guests */}
                  <div>
                    <label
                      htmlFor="modal-guests-count"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.quickBooking.guests}
                    </label>
                    <select
                      id="modal-guests-count"
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} Guests
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Details Section */}
              <div className="space-y-4 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#A07E54] border-b border-[#E7DFD2] pb-1.5 flex items-center space-x-1.5">
                  <span>02.</span>
                  <span>{t.bookingModal.step2}</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="modal-guest-name"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.bookingModal.guestName} *
                    </label>
                    <input
                      id="modal-guest-name"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Eleanor Vance"
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-guest-email"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.bookingModal.guestEmail} *
                    </label>
                    <input
                      id="modal-guest-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. eleanor@residence.com"
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-guest-phone"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.bookingModal.guestPhone}
                    </label>
                    <input
                      id="modal-guest-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+44 7911 123456"
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="modal-guest-country"
                      className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                    >
                      {t.bookingModal.country}
                    </label>
                    <input
                      id="modal-guest-country"
                      type="text"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="e.g. United Kingdom"
                      className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label
                    htmlFor="modal-special-requests"
                    className="block text-[11px] uppercase tracking-wider text-[#6B6862] font-medium mb-1"
                  >
                    {t.bookingModal.specialRequests}
                  </label>
                  <textarea
                    id="modal-special-requests"
                    rows={3}
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    placeholder="Dietary requirements, honeymoon setup, late arrival notes..."
                    className="w-full bg-[#FAF8F5] border border-[#E7DFD2] rounded p-2.5 text-sm text-[#141413] focus:outline-none focus:border-[#B8966C]"
                  />
                </div>

                {/* Airport transfer checkbox */}
                <label
                  htmlFor="modal-airport-transfer"
                  className="flex items-center space-x-2.5 text-xs text-[#2C2B28] cursor-pointer pt-1"
                >
                  <input
                    id="modal-airport-transfer"
                    type="checkbox"
                    checked={airportTransfer}
                    onChange={(e) => setAirportTransfer(e.target.checked)}
                    className="w-4 h-4 text-[#B8966C] rounded border-[#E7DFD2] focus:ring-[#B8966C]"
                  />
                  <span>{t.bookingModal.airportTransfer}</span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-[#E7DFD2] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-1.5 text-xs text-[#6B6862]">
                  <ShieldCheck className="w-4 h-4 text-[#A07E54]" />
                  <span>No payment required now • 100% Secure</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#B8966C] hover:bg-[#C4A27A] disabled:opacity-50 text-[#141413] text-xs font-semibold tracking-[0.2em] uppercase rounded flex items-center justify-center space-x-2 transition-all shadow-md active:scale-95"
                >
                  <span>
                    {isSubmitting ? t.bookingModal.submitting : t.bookingModal.submitRequest}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
