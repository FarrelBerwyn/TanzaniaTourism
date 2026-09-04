export interface ZanzibarDestination {
  id: string;
  name: string;
  theme: string;
  location: string;
  image: string;
  shortDescription: string;
  highlights: string[];
  ctaLabel: string;
}

export const ZANZIBAR_DESTINATIONS: ZanzibarDestination[] = [
  {
    id: 'dest-stone-town',
    name: 'STONE TOWN',
    theme: 'Culture & Heritage',
    location: 'West Coast • UNESCO World Heritage Site',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
    shortDescription:
      'Labyrinthine coral ragstone alleyways, centuries-old Omani brass-studded carved doors, Persian baths, and the vibrant scents of coffee and clove hanging in historic Swahili courtyards.',
    highlights: ['House of Wonders & Old Fort', 'Freddie Mercury Museum', 'Darajani Spice Market', 'Forodhani Gardens Sunset Bazaar'],
    ctaLabel: 'Explore Stone Town',
  },
  {
    id: 'dest-mnemba',
    name: 'MNEMBA ISLAND',
    theme: 'Marine Life & Crystal Waters',
    location: 'North-East Coast • Protected Marine Sanctuary',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    shortDescription:
      'An idyllic triangular coral atoll surrounded by electric turquoise waters. Dive or snorkel alongside green sea turtles, playful dolphins, and vibrant clownfish in one of Africa’s premier marine reserves.',
    highlights: ['Crystalline coral reef walls', 'Green sea turtle nesting sites', 'Pristine sandbank picnics', 'Dolphin observation'],
    ctaLabel: 'Discover Mnemba Atoll',
  },
  {
    id: 'dest-spice-farms',
    name: 'SPICE FARMS',
    theme: 'The Flavours of Zanzibar',
    location: 'Central Countryside • Historical Plantations',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    shortDescription:
      'Walk through fragrant rainforest groves of cloves, green cardamom pods, cinnamon bark, and wild vanilla vines. Uncover the centuries of maritime spice trade that gave Zanzibar its legendary nickname.',
    highlights: ['Fresh vanilla & cinnamon harvesting', 'Rare tropical fruit tastings', 'Handmade leaf crowns & Swahili songs', 'Traditional spice lunch'],
    ctaLabel: 'Taste Spice Heritage',
  },
  {
    id: 'dest-jozani',
    name: 'JOZANI FOREST',
    theme: 'Nature & Wildlife',
    location: 'South-Central Zanzibar • National Park',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=85',
    shortDescription:
      'Zanzibar’s only national park preserves 50 square kilometers of virgin groundwater forest, ancient red mahogany groves, and the playful, critically endangered Zanzibar Red Colobus monkey.',
    highlights: ['Endemic Red Colobus monkeys', 'Mangrove boardwalk trail', 'Over 40 butterfly species', 'Medicinal tree guide'],
    ctaLabel: 'Trek Jozani Canopy',
  },
  {
    id: 'dest-nungwi',
    name: 'NUNGWI & KENDWA',
    theme: 'Beaches & Sunset',
    location: 'Northern Tip of Unguja Island',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    shortDescription:
      'Powdery white beaches unaffected by low tides, crystal-clear swimming conditions all day, traditional artisan dhow boatbuilding yards, and iconic fire-sky African ocean sunsets.',
    highlights: ['Tide-free swimming beaches', 'Centuries-old wooden dhow builders', 'Marine turtle conservation aquarium', 'Barefoot oceanfront lounges'],
    ctaLabel: 'Experience Nungwi Coast',
  },
];
