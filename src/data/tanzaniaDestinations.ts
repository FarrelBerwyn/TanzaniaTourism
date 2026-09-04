export interface TanzaniaDestination {
  id: string;
  name: string;
  tagline: string;
  region: string;
  flightTimeFromZanzibar: string;
  heroImage: string;
  description: string;
  highlights: string[];
  bestFor: string;
  safariType: string;
}

export const TANZANIA_DESTINATIONS: TanzaniaDestination[] = [
  {
    id: 'dest-serengeti',
    name: 'SERENGETI',
    tagline: 'Wildlife & the Great Migration',
    region: 'Northern Tanzania',
    flightTimeFromZanzibar: '1h 45m Direct Bush Plane',
    heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=85',
    description:
      'Vast golden savannahs that stretch endlessly to the horizon. Witness millions of wildebeest and zebras braving crocodile-laden rivers, accompanied by resident prides of lions, solitary leopards, and luxury tented bush retreats under star-strewn equatorial skies.',
    highlights: [
      'The Great Wildebeest Migration',
      'Predator tracking with veteran rangers',
      'Sunrise hot air balloon safaris with Champagne brunch',
      'Exclusive luxury tented bush camps',
    ],
    bestFor: 'Big Five sightings & dramatic wildlife spectacles',
    safariType: 'Fly-in Bush Plane Safari',
  },
  {
    id: 'dest-ngorongoro',
    name: 'NGORONGORO',
    tagline: 'One of Africa’s most extraordinary natural landscapes',
    region: 'Crater Highlands',
    flightTimeFromZanzibar: '1h 30m to Manyara Airstrip',
    heroImage: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1600&q=85',
    description:
      'The world’s largest intact volcanic caldera, creating a self-contained ecological haven 600 meters deep. Descend through misty rim acacia forests into an ancient amphitheater bustling with endangered black rhinos, hippos, and thousands of pink flamingos wading in Lake Magadi.',
    highlights: [
      'Rare critically endangered Black Rhino conservation zone',
      'Dramatic 600m caldera descent drive',
      'Massive soda lake with shimmering flamingo flocks',
      'Dramatic rim lodges with panoramic cloud vistas',
    ],
    bestFor: 'Geological splendor & concentrated wildlife density',
    safariType: 'Crater Floor Game Drives',
  },
  {
    id: 'dest-kilimanjaro',
    name: 'KILIMANJARO',
    tagline: 'Stand at the roof of Africa',
    region: 'North-Eastern Tanzania',
    flightTimeFromZanzibar: '1h 10m to Kilimanjaro Int’l',
    heroImage: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=1600&q=85',
    description:
      'Africa’s highest peak and the world’s tallest free-standing mountain rises majestically 5,895 meters above tropical plains. From scenic private helicopter flights encircling Uhuru Peak to day treks along lush lower rainforest trails and coffee estates, experience Tanzania’s iconic crown.',
    highlights: [
      'Scenic helicopter mountain tours over the glacier summit',
      'Private day hikes on Marangu or Machame rainforest routes',
      'Organic Chagga coffee farm and waterfall visits',
      'Spectacular sunset silhouette photography',
    ],
    bestFor: 'Iconic aerial perspectives & alpine trekking',
    safariType: 'Scenic Flight & Guided Day Expedition',
  },
  {
    id: 'dest-tarangire',
    name: 'TARANGIRE',
    tagline: 'Elephants, baobabs and untamed landscapes',
    region: 'Manyara Region',
    flightTimeFromZanzibar: '1h 20m Flight',
    heroImage: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=85',
    description:
      'Famed for its colossal ancient baobab trees that stand like silent sentinels across a rugged river valley. Tarangire hosts East Africa’s highest concentration of elephant herds, where majestic family matriarchs guide their calves along the life-giving Tarangire River.',
    highlights: [
      'Giant multi-centenary baobab tree forests',
      'Enormous elephant gatherings of up to 300 individuals',
      'Dry-season wildlife congregations along the river',
      'Tree-climbing pythons and over 550 bird species',
    ],
    bestFor: 'Baobab landscapes & intimate elephant encounters',
    safariType: 'River Valley 4x4 Expedition',
  },
];
