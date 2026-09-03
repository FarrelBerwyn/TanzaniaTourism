import { DiningCategory } from '../types';

/**
 * CLIENT_PROPERTY_IMAGES / DINING
 * 3 culinary offerings: Local, Western, and Swahili Fusion.
 */
export const DINING_CATEGORIES: DiningCategory[] = [
  {
    id: 'local',
    name: 'Authentic Swahili Cuisine',
    subtitle: 'Heritage Flavors & Zanzibar Spices',
    description: 'Centuries of Arab, Persian, Indian, and East African maritime trade converged in Zanzibar’s coastal kitchens. Our executive chefs prepare time-honored recipes featuring freshly harvested coconut milk, aromatic cardamom, cloves from Pemba, and line-caught seafood brought straight to our shores.',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=85',
    signatureDishes: [
      {
        name: 'Zanzibari Coral Reef Snapper in Coconut & Turmeric',
        description: 'Pan-seared wild reef snapper simmered with fresh green coriander, stone-ground turmeric, and hand-squeezed coastal coconut milk served with saffron rice.',
      },
      {
        name: 'Tanzanian Urojo & Tiger Prawn Stew',
        description: 'A tangy, slow-simmered mango and tamarind broth with tender prawns, spiced cassava crisps, and crushed chili coconut sambal.',
      },
      {
        name: 'Slow-Braised Goat with Pilau Spices',
        description: 'Fork-tender local lamb infused with star anise, cinnamon quills, and black cardamom, accompanied by pickled kachumbari salad.',
      },
    ],
  },
  {
    id: 'western',
    name: 'Modern Western Gastronomy',
    subtitle: 'International Standards with Refined Precision',
    description: 'Designed for international palates seeking comforting familiarity prepared with the highest fine-dining techniques. Prime imported beef cuts, fresh Mediterranean salads, homemade handmade pasta, and decadent desserts executed with crisp culinary precision.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=85',
    signatureDishes: [
      {
        name: 'Prime Wagyu Tenderloin with Truffle Glaze',
        description: 'Char-grilled to perfection, paired with smooth parsnip mousseline, blistered vine tomatoes, and a 24-hour reduced red wine jus.',
      },
      {
        name: 'Wild Yellowfin Tuna Tartare with Avocado',
        description: 'Line-caught local tuna diced with Hass avocado, cold-pressed olive oil, caper berries, and house-baked sourdough crisps.',
      },
      {
        name: 'Handmade Tagliolini with Rock Lobster',
        description: 'Fresh egg pasta tossed with sweet Kizimkazi rock lobster tail, garlic confit, baby cherry tomatoes, and a light Pinot Grigio bisque.',
      },
    ],
  },
  {
    id: 'fusion',
    name: 'Swahili Contemporary Fusion',
    subtitle: 'Where Tropical Island Meets Modern French Haute Cuisine',
    description: 'Our culinary signature. An imaginative dialogue between classical French technique and Zanzibar’s extraordinary spice terroir. Expect harmonious pairings like vanilla bean infused lobster butter, tamarind reductions, and passion fruit soufflés.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85',
    signatureDishes: [
      {
        name: 'Butter-Poached Rock Lobster with Pemba Vanilla',
        description: 'Sweet succulent lobster poached in clarified French butter scented with fragrant Pemba vanilla pods, sweet potato emulsion, and sea asparagus.',
      },
      {
        name: 'Seared Duck Breast with Tamarind & Hibiscus',
        description: 'Crispy skin Magret duck breast served medium rare with a tart hibiscus flower glaze, roasted baby carrots, and spiced cassava purée.',
      },
      {
        name: 'Valrhona Chocolate & Zanzibar Cardamom Fondant',
        description: 'Molten dark 70% chocolate cake perfumed with green cardamom, served with house-spun coconut gelato and passionfruit coulis.',
      },
    ],
  },
];
