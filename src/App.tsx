import React, { useState } from 'react';
import { Language, Villa } from './types';
import { VILLAS_DATA } from './data/villas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickBookingBar } from './components/QuickBookingBar';
import { PropertyIntro } from './components/PropertyIntro';
import { VillasSection } from './components/VillasSection';
import { VillaDetailModal } from './components/VillaDetailModal';
import { FacilitiesSection } from './components/FacilitiesSection';
import { DiningSection } from './components/DiningSection';
import { PromotionalVideoSection } from './components/PromotionalVideoSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { SurroundingsSection } from './components/SurroundingsSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { OtaChannelsSection } from './components/OtaChannelsSection';
import { MapSection } from './components/MapSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CmsAdminModal } from './components/CmsAdminModal';

export default function App() {
  // Global State
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [villas, setVillas] = useState<Villa[]>(VILLAS_DATA);

  // Modals State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedVillaForDetail, setSelectedVillaForDetail] = useState<Villa | null>(null);
  const [cmsPitchModalOpen, setCmsPitchModalOpen] = useState(false);

  // Preselected booking parameters
  const [bookingParams, setBookingParams] = useState<{
    villaId?: string;
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  const handleOpenBooking = (villaId?: string) => {
    setBookingParams((prev) => ({
      ...prev,
      villaId: villaId || prev.villaId,
    }));
    setBookingModalOpen(true);
  };

  const handleCheckAvailability = (details: {
    checkIn: string;
    checkOut: string;
    guests: number;
    villaId: string;
  }) => {
    setBookingParams({
      checkIn: details.checkIn,
      checkOut: details.checkOut,
      guests: details.guests,
      villaId: details.villaId || undefined,
    });
    setBookingModalOpen(true);
  };

  const handleUpdateVillaFromCms = (id: string, updated: Partial<Villa>) => {
    setVillas((prev) =>
      prev.map((v) => (v.id === id ? { ...v, ...updated } : v))
    );
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1C1B1A] font-sans selection:bg-[#B8966C] selection:text-[#141413]">
      {/* 00: Fixed Luxury Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenBooking={handleOpenBooking}
        onOpenCmsPitch={() => setCmsPitchModalOpen(true)}
      />

      {/* Main Page Flow (Sections 01 - 15) */}
      <main id="main-content">
        {/* Section 01: Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 02: Quick Booking / Search Bar */}
        <QuickBookingBar
          currentLang={currentLang}
          onCheckAvailability={handleCheckAvailability}
        />

        {/* Section 03: Property Introduction */}
        <PropertyIntro currentLang={currentLang} />

        {/* Section 04: Accommodation / Room Showcase (8 Villas) */}
        <VillasSection
          currentLang={currentLang}
          onSelectVilla={(v) => setSelectedVillaForDetail(v)}
          onRequestBooking={(id) => handleOpenBooking(id)}
        />

        {/* Section 05: Facilities & Amenities */}
        <FacilitiesSection currentLang={currentLang} />

        {/* Section 06: Dining & Restaurant Experience */}
        <DiningSection currentLang={currentLang} />

        {/* Section 07: Promotional Video Cinematic Journey */}
        <PromotionalVideoSection currentLang={currentLang} />

        {/* Section 08: Activities, Experiences & Discover Tanzania */}
        <ExperiencesSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Section 09: Surroundings & Attractions */}
        <SurroundingsSection currentLang={currentLang} />

        {/* Section 10: Photo Gallery */}
        <GallerySection currentLang={currentLang} />

        {/* Section 11: Guest Reviews & Testimonials */}
        <ReviewsSection currentLang={currentLang} />

        {/* Section 12: OTA Booking Distribution Channels */}
        <OtaChannelsSection currentLang={currentLang} />

        {/* Section 13: Location, Contact & Map */}
        <MapSection currentLang={currentLang} />

        {/* Section 14: Final Call To Action */}
        <FinalCtaSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* Section 15: Footer */}
      <Footer
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCmsPitch={() => setCmsPitchModalOpen(true)}
      />

      {/* Floating Concierge WhatsApp Direct Access */}
      <WhatsAppButton />

      {/* Villa Detail Modal */}
      {selectedVillaForDetail && (
        <VillaDetailModal
          villa={selectedVillaForDetail}
          currentLang={currentLang}
          onClose={() => setSelectedVillaForDetail(null)}
          onRequestBooking={(villaId) => handleOpenBooking(villaId)}
        />
      )}

      {/* Interactive Reservation Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialVillaId={bookingParams.villaId}
        initialCheckIn={bookingParams.checkIn}
        initialCheckOut={bookingParams.checkOut}
        initialGuests={bookingParams.guests}
        currentLang={currentLang}
        onClose={() => setBookingModalOpen(false)}
      />

      {/* Client Pitch: Admin / CMS Studio Modal */}
      <CmsAdminModal
        isOpen={cmsPitchModalOpen}
        onClose={() => setCmsPitchModalOpen(false)}
        villas={villas}
        onUpdateVilla={handleUpdateVillaFromCms}
      />
    </div>
  );
}
