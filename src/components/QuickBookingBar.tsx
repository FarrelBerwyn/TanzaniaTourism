import React, { useState } from 'react';
import { Calendar, Users, Home, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { VILLAS_DATA } from '../data/villas';

interface QuickBookingBarProps {
  currentLang: Language;
  onCheckAvailability: (details: {
    checkIn: string;
    checkOut: string;
    guests: number;
    villaId: string;
  }) => void;
}

export const QuickBookingBar: React.FC<QuickBookingBarProps> = ({
  currentLang,
  onCheckAvailability,
}) => {
  const t = TRANSLATIONS[currentLang];

  // Default dates: today + 14 days, checkout + 19 days
  const today = new Date();
  const defaultCheckIn = new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];
  const defaultCheckOut = new Date(today.getTime() + 19 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split('T')[0];

  const [checkIn, setCheckIn] = useState(defaultCheckIn);
  const [checkOut, setCheckOut] = useState(defaultCheckOut);
  const [guests, setGuests] = useState(2);
  const [selectedVillaId, setSelectedVillaId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCheckAvailability({
      checkIn,
      checkOut,
      guests,
      villaId: selectedVillaId,
    });
  };

  return (
    <div
      id="quick-booking-bar-wrapper"
      className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-14"
    >
      <div className="bg-[#1C1B1A] border border-[#2C2B28] rounded-xl shadow-2xl p-4 sm:p-6 backdrop-blur-xl">
        <form
          id="quick-booking-form"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-center"
        >
          {/* Check-In */}
          <div className="relative border-b sm:border-b-0 sm:border-r border-[#2C2B28] pb-3 sm:pb-0 sm:pr-4">
            <label
              htmlFor="booking-check-in"
              className="flex items-center space-x-1.5 text-[10px] tracking-[0.2em] uppercase text-[#D8CCB8]/80 font-medium mb-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C4A27A]" />
              <span>{t.quickBooking.checkIn}</span>
            </label>
            <input
              id="booking-check-in"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full bg-transparent text-[#FAF8F5] text-sm font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
              required
            />
          </div>

          {/* Check-Out */}
          <div className="relative border-b sm:border-b-0 sm:border-r border-[#2C2B28] pb-3 sm:pb-0 sm:pr-4">
            <label
              htmlFor="booking-check-out"
              className="flex items-center space-x-1.5 text-[10px] tracking-[0.2em] uppercase text-[#D8CCB8]/80 font-medium mb-1.5"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C4A27A]" />
              <span>{t.quickBooking.checkOut}</span>
            </label>
            <input
              id="booking-check-out"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full bg-transparent text-[#FAF8F5] text-sm font-medium focus:outline-none cursor-pointer [color-scheme:dark]"
              required
            />
          </div>

          {/* Guests Count */}
          <div className="relative border-b sm:border-b-0 lg:border-r border-[#2C2B28] pb-3 sm:pb-0 sm:pr-4">
            <label
              htmlFor="booking-guests-count"
              className="flex items-center space-x-1.5 text-[10px] tracking-[0.2em] uppercase text-[#D8CCB8]/80 font-medium mb-1.5"
            >
              <Users className="w-3.5 h-3.5 text-[#C4A27A]" />
              <span>{t.quickBooking.guests}</span>
            </label>
            <select
              id="booking-guests-count"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full bg-transparent text-[#FAF8F5] text-sm font-medium focus:outline-none cursor-pointer"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num} className="bg-[#1C1B1A] text-[#FAF8F5]">
                  {num} {t.quickBooking.guestsCount}
                </option>
              ))}
            </select>
          </div>

          {/* Preferred Villa (Optional Selection) */}
          <div className="relative border-b sm:border-b-0 lg:border-r border-[#2C2B28] pb-3 sm:pb-0 sm:pr-4">
            <label
              htmlFor="booking-villa-select"
              className="flex items-center space-x-1.5 text-[10px] tracking-[0.2em] uppercase text-[#D8CCB8]/80 font-medium mb-1.5"
            >
              <Home className="w-3.5 h-3.5 text-[#C4A27A]" />
              <span>{t.quickBooking.villaChoice}</span>
            </label>
            <select
              id="booking-villa-select"
              value={selectedVillaId}
              onChange={(e) => setSelectedVillaId(e.target.value)}
              className="w-full bg-transparent text-[#FAF8F5] text-sm font-medium focus:outline-none cursor-pointer truncate"
            >
              <option value="" className="bg-[#1C1B1A] text-[#FAF8F5]">
                {t.quickBooking.allVillas}
              </option>
              {VILLAS_DATA.map((v) => (
                <option key={v.id} value={v.id} className="bg-[#1C1B1A] text-[#FAF8F5]">
                  {v.roomNumber} - {v.name}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-2 sm:pt-0">
            <button
              id="booking-submit-btn"
              type="submit"
              className="w-full py-3.5 px-4 bg-[#B8966C] hover:bg-[#C4A27A] text-[#141413] text-xs font-semibold tracking-[0.16em] uppercase rounded flex items-center justify-center space-x-2 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
            >
              <span>{t.quickBooking.checkAvailability}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
