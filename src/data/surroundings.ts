import { SurroundingPlace } from '../types';

/**
 * CLIENT_PROPERTY_IMAGES / SURROUNDINGS
 * Surrounding places, travel times, and directions.
 */
export const SURROUNDINGS_DATA: SurroundingPlace[] = [
  {
    id: 'surr-beach',
    title: 'Kizimkazi White Coral Beach',
    category: 'Coast & Ocean',
    distance: '150 m',
    travelTime: '2 MIN',
    transport: 'Private Footpath',
    description: 'Direct step-down access through the resort grounds to powdery white sand, private sun loungers, and warm swimming tides.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'surr-village',
    title: 'Kizimkazi Historic Fishing Village & Mosque',
    category: 'Culture & Heritage',
    distance: '1.8 km',
    travelTime: '5 MIN',
    transport: 'Complimentary Bicycle / Walk',
    description: 'Home to the oldest known mosque in East Africa (dating from 1107 AD with Kufic inscriptions) and a tranquil artisan boatbuilding village.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'surr-restaurants',
    title: 'Rock & Oceanfront Specialty Restaurants',
    category: 'Dining & Cocktails',
    distance: '4.5 km',
    travelTime: '7 MIN',
    transport: 'Chauffeur / Golf Cart',
    description: 'Curated cliffside seafood eateries and relaxed sunset beach bars in neighboring coastal bays.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'surr-dolphins',
    title: 'Menai Bay Dolphin Point',
    category: 'Marine Adventure',
    distance: '6.0 km',
    travelTime: '15 MIN',
    transport: 'Private Dhow Launch',
    description: 'Premier launch point for swimming with resident wild dolphin pods in crystal turquoise waters.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'surr-jozani',
    title: 'Jozani Chwaka Bay National Park',
    category: 'Nature Sanctuary',
    distance: '24 km',
    travelTime: '30 MIN',
    transport: 'Resort Chauffeur',
    description: 'Ancient indigenous mahogany rain forest, mangrove boardwalks, and the sanctuary of the rare Zanzibar Red Colobus monkey.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'surr-airport',
    title: 'Abeid Amani Karume Int\'l Airport (ZNZ)',
    category: 'International Gateway',
    distance: '52 km',
    travelTime: '55 MIN',
    transport: 'VIP Airport Chauffeur',
    description: 'Direct flights from Europe, Middle East, Nairobi, and Dar es Salaam. Private VIP meet & greet service available on arrival.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
  },
];
