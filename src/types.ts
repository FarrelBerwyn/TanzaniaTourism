export type Language = 'en' | 'fr' | 'sw' | 'es' | 'it' | 'ar' | 'zh';

export type GalleryCategory = 'property' | 'villas' | 'dining' | 'pool' | 'garden' | 'zanzibar' | 'experiences';

export interface PropertyConfig {
  name: string;
  tagline: string;
  subTagline: string;
  destination: string;
  address: string;
  city?: string;
  country?: string;
  locationDetails: string;
  coordinates: {
    lat: number;
    lng: number;
    embedUrl?: string;
  };
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  contact?: {
    phone: string;
    email: string;
    whatsapp: string;
  };
  stats: {
    villasCount: number;
    poolsCount: number;
    diningCount: number;
    supportText: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    tripadvisor: string;
  };
  social?: {
    instagram: string;
    facebook: string;
    tripadvisor: string;
  };
}

export interface Villa {
  id: string;
  roomNumber: string;
  name: string;
  type: string;
  capacity: number;
  bed: string;
  bathroom: string | number;
  size: string;
  view: string;
  pricePerNight: string;
  availability: boolean;
  isAvailable?: boolean;
  featured?: boolean;
  shortDescription: string;
  description: string;
  heroImage: string;
  images: string[];
  amenities: string[];
  architecturalFeature?: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  hours?: string;
  highlight?: string;
}

export interface DiningCategory {
  id: string;
  name: string;
  tabLabel?: string;
  subtitle: string;
  description: string;
  image: string;
  signatureDishes: {
    name: string;
    description: string;
  }[];
}

export interface Experience {
  id: string;
  title: string;
  category: 'resort' | 'zanzibar' | 'tanzania';
  duration: string;
  tag: string;
  description: string;
  image: string;
}

export interface SurroundingPlace {
  id: string;
  title: string;
  name?: string;
  category: string;
  distance: string;
  travelTime: string;
  transport: string;
  description: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  src?: string;
  aspect: 'portrait' | 'landscape' | 'square';
  caption: string;
  description?: string;
}

export interface Review {
  id: string;
  guestName: string;
  author?: string;
  country: string;
  countryCode: string;
  rating: number;
  stayDate: string;
  villaStayed: string;
  stayedVilla?: string;
  title: string;
  reviewText: string;
  comment?: string;
  isDemoSample: boolean;
  verified?: boolean;
}

export interface BookingInquiry {
  villaId: string;
  villaName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  specialRequests: string;
  transferNeeded: boolean;
}
