import { PropertyConfig } from '../types';

/**
 * CLIENT_PROPERTY_IMAGES / CONFIGURATION
 * All property details, photography placeholders, and contact details
 * are centralized here for seamless client onboarding and CMS integration.
 */
export const PROPERTY_CONFIG: PropertyConfig = {
  name: 'Zanzirangi House',
  tagline: 'YOUR PRIVATE GATEWAY TO ZANZIBAR',
  subTagline: 'Stay, explore and experience the island — with Tanzania beyond.',
  destination: 'Zanzibar, Tanzania',
  address: 'Kizimkazi Dimbani, South Coast',
  city: 'Zanzibar',
  country: 'Tanzania',
  locationDetails: 'Nestled between ancient baobab groves and pristine turquoise coral lagoons on the peaceful southern coast of Unguja Island.',
  coordinates: {
    lat: -6.4429,
    lng: 39.4678,
    embedUrl: 'https://maps.google.com/maps?q=-6.4429,39.4678&hl=en&z=14&output=embed',
  },
  phone: '+255 777 890 123',
  displayPhone: '+255 (0) 777 890 123',
  whatsappNumber: '255777890123',
  whatsappMessage: 'Hello, I would like to inquire about availability and rates at Zanzirangi House.',
  email: 'concierge@zanzirangihouse.com',
  contact: {
    phone: '+255 777 890 123',
    email: 'concierge@zanzirangihouse.com',
    whatsapp: '+255 777 890 123',
  },
  stats: {
    villasCount: 8,
    poolsCount: 1,
    diningCount: 1,
    supportText: '24/7 Butler & Concierge Support',
  },
  socials: {
    instagram: 'https://www.instagram.com/zanzirangihouse',
    facebook: 'https://www.facebook.com/p/Zanzirangi-House-61576133951151/',
    tiktok: 'https://www.tiktok.com/@zanzirangihouse',
    youtube: 'https://www.youtube.com/@zanzirangihouse',
    tripadvisor: 'https://tripadvisor.com',
  },
  social: {
    instagram: 'https://www.instagram.com/zanzirangihouse',
    facebook: 'https://www.facebook.com/p/Zanzirangi-House-61576133951151/',
    tiktok: 'https://www.tiktok.com/@zanzirangihouse',
    youtube: 'https://www.youtube.com/@zanzirangihouse',
    tripadvisor: 'https://tripadvisor.com',
  },
};

export const OTA_CHANNELS = [
  {
    name: 'Booking.com',
    logoText: 'Booking.com',
    rating: '9.8 / 10 Exceptional',
    description: 'Premier Guest Review Award',
  },
  {
    name: 'Trip.com',
    logoText: 'Trip.com',
    rating: '5.0 Star Luxury Choice',
    description: 'Diamond Luxury Partner',
  },
  {
    name: 'Agoda',
    logoText: 'Agoda',
    rating: '9.7 Customer Choice',
    description: 'Top Villas in East Africa',
  },
  {
    name: 'Expedia',
    logoText: 'Expedia',
    rating: '4.9 / 5.0 Excellent',
    description: 'VIP Access Preferred Property',
  },
];
