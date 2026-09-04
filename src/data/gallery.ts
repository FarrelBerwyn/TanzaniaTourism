import { GalleryItem } from '../types';

/**
 * ZANZIRANGI HOUSE / GALLERY ARCHIVE
 * High-resolution curated imagery organized across the 7 luxury categories:
 * PROPERTY, VILLAS, DINING, POOL, GARDEN, ZANZIBAR, EXPERIENCES
 */
export const GALLERY_DATA: GalleryItem[] = [
  // PROPERTY
  {
    id: 'g-prop-01',
    title: 'Cliffside Oceanfront Sanctuary',
    category: 'property',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1600&q=85',
    aspect: 'landscape',
    caption: 'The sweeping coastal grounds of Zanzirangi House overlooking Menai Bay.',
  },
  {
    id: 'g-prop-02',
    title: 'Swahili Coral Ragstone Architecture',
    category: 'property',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1400&q=85',
    aspect: 'portrait',
    caption: 'Sustainable indigenous timber, makuti thatch roofs, and artisanal stone craftsmanship.',
  },
  {
    id: 'g-prop-03',
    title: 'Twilight Over Menai Bay Shoreline',
    category: 'property',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    caption: 'Sunset hues reflecting across private beachfront daybeds and gentle evening tides.',
  },

  // VILLAS
  {
    id: 'g-vil-01',
    title: 'Sultan Oceanfront Villa Sun Deck',
    category: 'villas',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=85',
    aspect: 'landscape',
    caption: 'Private timber deck with personal plunge pool overlooking the turquoise Indian Ocean.',
  },
  {
    id: 'g-vil-02',
    title: 'Hand-Carved Zanzibar Four-Poster Teak Bed',
    category: 'villas',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    caption: 'Egyptian cotton linens and natural ocean breeze cross-ventilation in the Master Suite.',
  },
  {
    id: 'g-vil-03',
    title: 'Makuti Garden Sanctuary Verandah',
    category: 'villas',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    caption: 'Secluded outdoor lounge enveloped by blooming frangipani and traveler palms.',
  },

  // DINING
  {
    id: 'g-din-01',
    title: 'Oceanfront Candlelit Beach Dinner',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85',
    aspect: 'portrait',
    caption: 'Private barefoot dining beneath equatorial stars with personalized butler service.',
  },
  {
    id: 'g-din-02',
    title: 'Line-Caught Reef Snapper in Coconut Bisque',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    caption: 'Fresh morning catch infused with garden-harvested lemongrass, ginger, and turmeric.',
  },
  {
    id: 'g-din-03',
    title: 'Artisanal Tropical Breakfast Presentation',
    category: 'dining',
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1200&q=85',
    aspect: 'square',
    caption: 'Sun-ripened papaya, passion fruit curd, fresh baked brioche, and spiced Tanzanian coffee.',
  },

  // POOL
  {
    id: 'g-pol-01',
    title: '25m Ocean Horizon Infinity Pool',
    category: 'pool',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1600&q=85',
    aspect: 'landscape',
    caption: 'Freshwater infinity pool merging seamlessly with the azure waters of Menai Bay.',
  },
  {
    id: 'g-pol-02',
    title: 'Sunken Poolside Daybed Lounge',
    category: 'pool',
    image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85',
    aspect: 'portrait',
    caption: 'Shaded canopy loungers with poolside refreshments and chilled coconut water.',
  },

  // GARDEN
  {
    id: 'g-gar-01',
    title: 'From Our Garden Organic Produce & Herbs',
    category: 'garden',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    caption: 'The estate’s organic garden where seasonal vegetables, chili, and spices are cultivated for our kitchen.',
  },
  {
    id: 'g-gar-02',
    title: 'Centenary Baobab Tree & Botanical Pathways',
    category: 'garden',
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    caption: 'Ancient sculptural baobabs and fragrant flowering frangipani throughout the retreat grounds.',
  },

  // ZANZIBAR
  {
    id: 'g-zan-01',
    title: 'Stone Town Ancient Carved Doorway',
    category: 'zanzibar',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    caption: 'Masterwork Swahili teak and brass carving in the UNESCO cultural quarter.',
  },
  {
    id: 'g-zan-02',
    title: 'Pristine White Coral Sands of Nungwi',
    category: 'zanzibar',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    caption: 'Endless turquoise tides and powdery sands along the island’s northern coast.',
  },

  // EXPERIENCES
  {
    id: 'g-exp-01',
    title: 'Menai Bay Wild Dolphin Pod',
    category: 'experiences',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85',
    aspect: 'landscape',
    caption: 'Early morning dolphin encounters swimming peacefully in open coastal waters.',
  },
  {
    id: 'g-exp-02',
    title: 'Red Colobus in Jozani National Park',
    category: 'experiences',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=85',
    aspect: 'portrait',
    caption: 'Endemic Red Colobus monkey resting peacefully in the mahogany canopy.',
  },
];
