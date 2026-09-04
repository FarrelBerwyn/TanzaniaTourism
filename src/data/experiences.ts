export interface Experience {
  id: string;
  title: string;
  category:
    | 'all'
    | 'cultural'
    | 'marine'
    | 'nature'
    | 'sailing'
    | 'adventure';
  duration: string;
  tag: string;
  priceNote: string;
  shortDescription: string;
  description: string;
  image: string;
  whatsappMessage: string;
}

export const EXPERIENCES_DATA: Experience[] = [
  {
    id: 'exp-stonetown',
    title: 'Stone Town Heritage & Historic Quarters',
    category: 'cultural',
    duration: 'Full Day (Private Chauffeur & Guide)',
    tag: 'Culture & Heritage',
    priceNote: 'Price on Request',
    shortDescription:
      'Walk through labyrinthine coral ragstone alleyways, ornate Omani carved teak doors, historical spice bazaars, and the Sultan’s Palace.',
    description:
      'A private journey through UNESCO World Heritage Stone Town. Led by a resident Swahili historian, explore the House of Wonders, the 17th-century Old Fort, the Anglican Cathedral and Old Slave Market memorial, and artisan workshops specializing in silver jewelry and woven textiles.',
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I am interested in booking the private Stone Town Heritage Experience.',
  },
  {
    id: 'exp-island-hopping',
    title: 'Private Island Hopping & Sandbank Safari',
    category: 'marine',
    duration: 'Full Day (Private Speedboat)',
    tag: 'Island Hopping',
    priceNote: 'Price on Request',
    shortDescription:
      'Cruise to secluded uninhabited coral islets, swim in deserted tidal lagoons, and enjoy a grilled seafood lunch on a private sandbank.',
    description:
      'Chart your own course across the turquoise waters of southern and western Zanzibar. Disembark onto ephemeral powder-white sandbanks that emerge only at low tide, swim in warm crystalline waters, and savor a freshly prepared lunch of grilled Menai Bay lobster, calamari, and tropical fruit.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like to inquire about the Private Island Hopping Sandbank Safari.',
  },
  {
    id: 'exp-dolphins',
    title: 'Kizimkazi Wild Dolphin Encounter',
    category: 'marine',
    duration: '3.5 Hours (Early Morning Dawn Cruise)',
    tag: 'Dolphin Experience',
    priceNote: 'Price on Request',
    shortDescription:
      'Set sail at sunrise from Kizimkazi into the protected waters of Menai Bay to witness pods of resident spinner and bottlenose dolphins.',
    description:
      'Our location in Kizimkazi on Zanzibar’s southern coast provides direct access to East Africa’s most famous dolphin sanctuary. Depart at dawn on a private dhow or motor launch to watch dolphin pods playing in their natural ocean habitat before enjoying breakfast back at the property.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like to experience the Kizimkazi Wild Dolphin Encounter.',
  },
  {
    id: 'exp-snorkeling-diving',
    title: 'Coral Reef Snorkeling & Deep Scuba Diving',
    category: 'marine',
    duration: 'Half Day or Full Day Excursion',
    tag: 'Snorkeling & Diving',
    priceNote: 'Price on Request',
    shortDescription:
      'Explore vibrant coral gardens, underwater marine walls, and meet sea turtles, spotted eagle rays, and exotic reef species.',
    description:
      'Zanzibar’s barrier reefs are teeming with tropical biodiversity. Equipped with top-tier professional gear and accompanied by certified PADI divemasters, discover stunning drop-offs, swim-through caves, and crystal visibility extending up to 30 meters.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like to arrange a Snorkeling & Diving excursion.',
  },
  {
    id: 'exp-sunset-cruise',
    title: 'Traditional Wooden Dhow Sunset Cruise',
    category: 'sailing',
    duration: '2.5 Hours (Late Afternoon Golden Hour)',
    tag: 'Sunset Cruise',
    priceNote: 'Price on Request',
    shortDescription:
      'Glide across the calm Indian Ocean under billowed canvas sails as the equatorial sun paints the sky in shades of amber and rose gold.',
    description:
      'Step aboard a handcrafted Swahili sailing dhow carved from indigenous mahogany. Relax upon plush cushions with chilled Champagne, artisanal canapés, and the hypnotic sounds of the ocean breeze and acoustic taarab melodies as daylight fades into dusk.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like to book a private Sunset Dhow Cruise.',
  },
  {
    id: 'exp-spice-farm',
    title: 'Organic Botanical Spice Farm Journey',
    category: 'nature',
    duration: '4 Hours (Morning or Afternoon)',
    tag: 'Spice Farm',
    priceNote: 'Price on Request',
    shortDescription:
      'Immerse your senses in centuries of aromatic history: pluck fresh cinnamon, crush green cardamom, and taste wild vanilla bean.',
    description:
      'Walk alongside expert local botanists through verdant rural plantations. Touch, smell, and taste raw spices directly from the trees and vines—including black pepper, nutmeg, ginger, lemongrass, and turmeric—concluding with fresh King coconut water harvested high in the canopy.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I am interested in the Organic Botanical Spice Farm Journey.',
  },
  {
    id: 'exp-fishing',
    title: 'Deep Sea Big Game Sport Fishing',
    category: 'adventure',
    duration: 'Half Day (5 Hours) or Full Day (8 Hours)',
    tag: 'Deep Sea Fishing',
    priceNote: 'Price on Request',
    shortDescription:
      'Venture into the deep Pemba and Zanzibar channels for world-class sport fishing targeting yellowfin tuna, sailfish, and wahoo.',
    description:
      'Aboard our chartered offshore sportfisher equipped with outriggers, Shimano tackle, and modern nautical electronics, experience the adrenaline of big game fishing in the deep currents of the Indian Ocean. Strictly adheres to catch-and-release protocols for billfish.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like details on Deep Sea Sport Fishing trips.',
  },
  {
    id: 'exp-mnemba',
    title: 'Mnemba Atoll Luxury Marine Sanctuary',
    category: 'marine',
    duration: 'Full Day Private Expedition',
    tag: 'Mnemba Island',
    priceNote: 'Price on Request',
    shortDescription:
      'Sail to the crown jewel of Zanzibar marine reserves: unmatched turquoise clarity, pristine coral gardens, and sea turtle lagoons.',
    description:
      'Located off Zanzibar’s northeast coast, Mnemba Atoll is recognized globally for its pristine underwater conditions. Enjoy private boat transfers, exclusive snorkeling over coral pinnacles, and a beachside gourmet picnic arranged by our private chef.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like to book the Mnemba Island Marine Sanctuary expedition.',
  },
  {
    id: 'exp-cultural',
    title: 'Swahili Traditions, Taarab & Village Life',
    category: 'cultural',
    duration: '3.5 Hours (Custom Timing)',
    tag: 'Cultural Experiences',
    priceNote: 'Price on Request',
    shortDescription:
      'Engage authentically with local coastal artisans, learn palm-weaving and dhow restoration, and discover ancient Swahili heritage.',
    description:
      'Visit the historic Kizimkazi fishing settlement and the ancient Dimbani Mosque (dating to 1107 AD). Meet local master craftsmen carving traditional dhows by hand, participate in a Swahili culinary workshop, or enjoy private taarab violin and kanun music under the night stars.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like to learn more about Swahili Cultural Experiences.',
  },
  {
    id: 'exp-nature-jozani',
    title: 'Jozani Forest & Red Colobus Eco-Sanctuary',
    category: 'nature',
    duration: '4 Hours (Morning Recommended)',
    tag: 'Nature Experiences',
    priceNote: 'Price on Request',
    shortDescription:
      'Trek through virgin groundwater mahogany forest to encounter the playful, endemic Zanzibar Red Colobus monkey.',
    description:
      'Led by an authorized national park naturalist, journey into ancient hardwood forests protected within Jozani Chwaka Bay National Park. Observe monkey troops swinging through the canopy, walk the elevated mangrove boardwalk, and learn about the rare flora unique to Zanzibar.',
    image: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=1200&q=85',
    whatsappMessage: 'Hello Zanzirangi House Concierge, I would like to reserve the Jozani Forest Nature Experience.',
  },
];
