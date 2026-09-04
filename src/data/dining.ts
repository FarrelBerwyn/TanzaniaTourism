import { DiningCategory } from '../types';

/**
 * CLIENT_PROPERTY_IMAGES / DINING
 * 3 culinary offerings: Local, Western, and Swahili Fusion.
 */
export const DINING_CATEGORIES: DiningCategory[] = [
  {
    id: 'local',
    name: 'Authentic Swahili Cuisine',
    tabLabel: 'Swahili',
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
    id: 'arabic',
    name: 'Authentic Arabic & Omani Cuisine',
    tabLabel: 'Arabic',
    subtitle: 'Royal Omani Heritage, Clay-Oven Grills & Middle Eastern Mezze',
    description: 'A celebration of Zanzibar’s centuries-old royal Omani heritage and Arabian sea routes. Savor slow-braised spiced meats, clay-oven flatbreads, exquisite cold and hot mezze, fragrant saffron-infused rice dishes, and sweet rosewater delicacies prepared by master chefs.',
    image: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=1200&q=85',
    signatureDishes: [
      {
        name: 'Omani Shuwa Spiced Slow-Roasted Lamb',
        description: 'Tender lamb slow-cooked for 24 hours with cloves, cardamom, coriander, dry lime, and banana leaves, served over fragrant golden saffron Kabsa rice.',
      },
      {
        name: 'Royal Mezze & Fresh Za’atar Khubz',
        description: 'Velvety pomegranate-drizzled hummus, smoky Mutabal, crispy herbed falafel, and handmade wood-fired Arabic flatbreads.',
      },
      {
        name: 'Mashwi Seafood & Charred Lime Platter',
        description: 'Charcoal-grilled Menai Bay jumbo prawns, calamari, and reef catch seasoned with Aleppo pepper, sumac, garlic, and wild herbs.',
      },
      {
        name: 'Warm Pistachio Baklava & Rosewater Muhallabia',
        description: 'Delicate flaky filo pastry layered with toasted pistachios and orange-blossom cardamom syrup alongside chilled rosewater milk pudding.',
      },
    ],
  },
  {
    id: 'western',
    name: 'Modern Western Gastronomy',
    tabLabel: 'Western',
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
    tabLabel: 'Fusion',
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
  {
    id: 'beverages',
    name: 'Beverages, Cellar & Refreshments',
    tabLabel: 'Beverages',
    subtitle: 'Fine Cellar Wines, Fresh Juices, Soft Drinks & Mineral Waters',
    description: 'An elevated beverage program curated for tropical indulgence. Enjoy world-class cellar vintages, pure cold-pressed Zanzibar tropical juices, house-crafted botanical soft drinks, and premium pristine mineral waters served beachfront or poolside.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=85',
    signatureDishes: [
      {
        name: 'Curated Cellar Wines & Champagne (Wines)',
        description: 'Old and New World collections, crisp South African Chenin Blanc & Sauvignon Blanc, elegant French Champagnes, and full-bodied Tuscan & Bordeaux reds.',
      },
      {
        name: 'Cold-Pressed Zanzibar Tropical Nectars (Juice)',
        description: 'Sun-ripened passion fruit, sweet Alfonso mango, crushed pineapple with fresh mint, and young King coconut water straight from coastal palm groves.',
      },
      {
        name: 'Artisanal Botanical Sodas & Tonics (Soft Drinks)',
        description: 'House-brewed fiery ginger beer with crushed lemongrass, sparkling Tanzanian hibiscus cooler, craft botanical tonics, and classic iced sodas.',
      },
      {
        name: 'Pristine Mineral Waters (Waters)',
        description: 'Still and sparkling premium European & East African spring waters served crystal chilled with fresh garden cucumber, mint, and Makunduchi lime.',
      },
    ],
  },
];
