import React, { useState, useEffect } from 'react';
import { Language, Villa } from './types';
import { VILLAS_DATA } from './data/villas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickBookingBar } from './components/QuickBookingBar';
import { PropertyIntro } from './components/PropertyIntro';
import { VillasSection } from './components/VillasSection';
import { VillaDetailModal } from './components/VillaDetailModal';
import { PropertyExperienceSection } from './components/PropertyExperienceSection';
import { DiningSection } from './components/DiningSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { ExploreZanzibarSection } from './components/ExploreZanzibarSection';
import { BeyondZanzibarSection } from './components/BeyondZanzibarSection';
import { CustomItinerarySection } from './components/CustomItinerarySection';
import { ShuttleSection } from './components/ShuttleSection';
import { ConciergeSection } from './components/ConciergeSection';
import { WhyStaySection } from './components/WhyStaySection';
import { FacilitiesSection } from './components/FacilitiesSection';
import { PromotionalVideoSection } from './components/PromotionalVideoSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { OtaChannelsSection } from './components/OtaChannelsSection';
import { MapSection } from './components/MapSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ChatAssistant } from './components/ChatAssistant';
import { CmsAdminModal } from './components/CmsAdminModal';

export default function App() {
  // Global State
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [villas, setVillas] = useState<Villa[]>(VILLAS_DATA);

  useEffect(() => {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  }, [currentLang]);

  // Modals State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedVillaForDetail, setSelectedVillaForDetail] = useState<Villa | null>(null);
  const [cmsPitchModalOpen, setCmsPitchModalOpen] = useState(false);
  const [isSupportChatOpen, setIsSupportChatOpen] = useState(false);
  const [supportInitialQuery, setSupportInitialQuery] = useState<string | null>(null);

  const handleOpenSupportChat = (initialQuery?: string) => {
    if (initialQuery) {
      setSupportInitialQuery(initialQuery);
    }
    setIsSupportChatOpen(true);
  };

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

      {/* Main Page Flow (Curated Customer Journey) */}
      <main id="main-content">
        {/* 01: Hero Section */}
        <HeroSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 02: Quick Search / Booking Bar */}
        <QuickBookingBar
          currentLang={currentLang}
          onCheckAvailability={handleCheckAvailability}
        />

        {/* 03: Editorial Introduction (MORE THAN A STAY) */}
        <PropertyIntro currentLang={currentLang} />

        {/* 04: Stay Section (STAY YOUR WAY - Villas, Bungalows, Rooms) */}
        <VillasSection
          currentLang={currentLang}
          onSelectVilla={(v) => setSelectedVillaForDetail(v)}
          onRequestBooking={(id) => handleOpenBooking(id)}
        />

        {/* 05: Property Experience (DISCOVER THE RETREAT) */}
        <PropertyExperienceSection currentLang={currentLang} />

        {/* 06: Dining Section (TASTE ZANZIBAR + FROM OUR GARDEN TO YOUR TABLE) */}
        <DiningSection currentLang={currentLang} />

        {/* 07: Experiences Section (EXPERIENCES - Discover Zanzibar beyond the ordinary) */}
        <ExperiencesSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
          onOpenSupportChat={handleOpenSupportChat}
        />

        {/* 08: Explore Zanzibar (Stone Town, Mnemba, Spice Farms, Jozani, Nungwi) */}
        <ExploreZanzibarSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 09: Beyond Zanzibar & Tanzania Safari (ONE ISLAND. A WHOLE TANZANIA TO DISCOVER.) */}
        <BeyondZanzibarSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
          onOpenSupportChat={handleOpenSupportChat}
        />

        {/* 10: Custom Itinerary Builder (BUILD YOUR TANZANIA JOURNEY) */}
        <CustomItinerarySection
          currentLang={currentLang}
          onOpenSupportChat={handleOpenSupportChat}
        />

        {/* 11: Shuttle & Arrival Service (ARRIVE. RELAX. WE'LL TAKE CARE OF THE REST.) */}
        <ShuttleSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 12: Concierge Feature (YOUR JOURNEY, PERSONALLY ARRANGED) */}
        <ConciergeSection
          currentLang={currentLang}
          onOpenSupportChat={handleOpenSupportChat}
        />

        {/* 13: Why Stay With Us (WHY ZANZIRANGI HOUSE) */}
        <WhyStaySection currentLang={currentLang} />

        {/* 14: Promotional Film Journey */}
        <PromotionalVideoSection currentLang={currentLang} />

        {/* 15: Facilities & Amenities */}
        <FacilitiesSection currentLang={currentLang} />

        {/* 16: Gallery Section (7 Luxury Categories + Lightbox) */}
        <GallerySection currentLang={currentLang} />

        {/* 17: Guest Impressions & Testimonials */}
        <ReviewsSection currentLang={currentLang} />

        {/* 18: OTA Distribution Trust Channels */}
        <OtaChannelsSection currentLang={currentLang} />

        {/* 19: Location, Map & Directions */}
        <MapSection currentLang={currentLang} />

        {/* 20: Final Call To Action */}
        <FinalCtaSection
          currentLang={currentLang}
          onOpenBooking={() => handleOpenBooking()}
        />
      </main>

      {/* 21: Sophisticated Luxury Footer */}
      <Footer
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenBooking={() => handleOpenBooking()}
        onOpenCmsPitch={() => setCmsPitchModalOpen(true)}
        onOpenSupportChat={handleOpenSupportChat}
      />

      {/* Unified Personal Concierge & Support Chat Assistant in Bottom Left */}
      <ChatAssistant
        currentLang={currentLang}
        onOpenBooking={() => handleOpenBooking()}
        isOpen={isSupportChatOpen}
        onToggleOpen={setIsSupportChatOpen}
        externalQuery={supportInitialQuery}
        onClearExternalQuery={() => setSupportInitialQuery(null)}
      />

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
        onOpenSupportChat={handleOpenSupportChat}
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
