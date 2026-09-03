import { Language } from '../types';

export interface TranslationDictionary {
  nav: {
    stay: string;
    experiences: string;
    facilities: string;
    dining: string;
    gallery: string;
    location: string;
    bookStay: string;
    cmsPitch: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    exploreProperty: string;
    bookYourStay: string;
    scrollIndicator: string;
  };
  quickBooking: {
    title: string;
    checkIn: string;
    checkOut: string;
    guests: string;
    villaChoice: string;
    allVillas: string;
    checkAvailability: string;
    guestsCount: string;
  };
  intro: {
    heading: string;
    subhead: string;
    body: string;
    statsVillas: string;
    statsPool: string;
    statsDining: string;
    statsSupport: string;
  };
  villas: {
    heading: string;
    subhead: string;
    viewVilla: string;
    bookVilla: string;
    perNight: string;
    maxGuests: string;
    bed: string;
    bath: string;
    size: string;
    view: string;
    amenities: string;
    requestBooking: string;
    featuredTag: string;
    allUnits: string;
  };
  facilities: {
    heading: string;
    subhead: string;
  };
  dining: {
    heading: string;
    subhead: string;
    exploreMenu: string;
    signatureDishes: string;
  };
  video: {
    heading: string;
    subhead: string;
    playFilm: string;
    pauseFilm: string;
    storylineConcept: string;
    sceneArrival: string;
    sceneExterior: string;
    sceneVilla: string;
    scenePool: string;
    sceneDining: string;
    sceneSunset: string;
    sceneSafari: string;
  };
  experiences: {
    heading: string;
    subhead: string;
    tabResort: string;
    tabZanzibar: string;
    tabTanzania: string;
    discoverTanzaniaTitle: string;
    discoverTanzaniaText: string;
    marketplaceVision: string;
  };
  surroundings: {
    heading: string;
    subhead: string;
    distance: string;
    travelTime: string;
  };
  gallery: {
    heading: string;
    subhead: string;
    all: string;
    villas: string;
    rooms: string;
    pool: string;
    dining: string;
    food: string;
    beach: string;
    facilities: string;
    experiences: string;
    fullscreen: string;
  };
  reviews: {
    heading: string;
    subhead: string;
    sampleBadge: string;
    sampleNotice: string;
  };
  ota: {
    heading: string;
    subhead: string;
    notice: string;
  };
  map: {
    heading: string;
    subhead: string;
    address: string;
    phone: string;
    email: string;
    whatsapp: string;
    getDirections: string;
  };
  finalCta: {
    heading: string;
    subhead: string;
    bookStay: string;
    contactUs: string;
  };
  footer: {
    brandStatement: string;
    quickLinks: string;
    contactConcierge: string;
    sanctuaryAddress: string;
    allRightsReserved: string;
    clientDemoNotice: string;
  };
  bookingModal: {
    title: string;
    subtitle: string;
    step1: string;
    step2: string;
    selectedVilla: string;
    dates: string;
    guestName: string;
    guestEmail: string;
    guestPhone: string;
    country: string;
    specialRequests: string;
    airportTransfer: string;
    submitRequest: string;
    submitting: string;
    successTitle: string;
    successMessage: string;
    chatViaWhatsapp: string;
    close: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      stay: 'Stay',
      experiences: 'Experiences',
      facilities: 'Facilities',
      dining: 'Dining',
      gallery: 'Gallery',
      location: 'Location',
      bookStay: 'Book Your Stay',
      cmsPitch: 'Client CMS Preview',
    },
    hero: {
      eyebrow: 'Zanzibar • Tanzania',
      title: 'YOUR PRIVATE ESCAPE IN TANZANIA',
      subtitle: 'Experience comfort, nature and authentic hospitality in one exceptional destination.',
      exploreProperty: 'EXPLORE THE PROPERTY',
      bookYourStay: 'BOOK YOUR STAY',
      scrollIndicator: 'SCROLL TO DISCOVER',
    },
    quickBooking: {
      title: 'Plan Your Sanctuary Escape',
      checkIn: 'CHECK-IN',
      checkOut: 'CHECK-OUT',
      guests: 'GUESTS',
      villaChoice: 'ACCOMMODATION',
      allVillas: 'Select Preferred Villa',
      checkAvailability: 'CHECK AVAILABILITY',
      guestsCount: 'Guests',
    },
    intro: {
      heading: 'A PLACE TO SLOW DOWN',
      subhead: 'Where Untamed Nature Meets Modern Sanctuary',
      body: 'A carefully designed private retreat where modern comfort meets the beauty and character of Tanzania. Sheltered along the serene southern coastline of Zanzibar, each villa is an architectural homage to Swahili coastal heritage, crafted with natural coral ragstone, warm timber, and expansive terraces that open directly to the gentle rhythm of the Indian Ocean.',
      statsVillas: 'PRIVATE VILLAS',
      statsPool: 'SWIMMING POOL',
      statsDining: 'DINING & BAR',
      statsSupport: 'GUEST SUPPORT',
    },
    villas: {
      heading: 'STAY YOUR WAY',
      subhead: 'Thoughtfully designed spaces for comfort, privacy and unforgettable stays.',
      viewVilla: 'VIEW VILLA',
      bookVilla: 'REQUEST BOOKING',
      perNight: 'per night',
      maxGuests: 'Guests',
      bed: 'Bed',
      bath: 'Bath',
      size: 'Size',
      view: 'View',
      amenities: 'Villa Amenities',
      requestBooking: 'Request This Villa',
      featuredTag: 'Featured Sanctuary',
      allUnits: 'Explore All 8 Villas',
    },
    facilities: {
      heading: 'EVERYTHING YOU NEED',
      subhead: 'Uncompromising refinement tailored for wellness, restoration, and effortless comfort.',
    },
    dining: {
      heading: 'TASTE THE EXPERIENCE',
      subhead: 'A gastronomic journey from traditional Swahili spices to contemporary haute cuisine.',
      exploreMenu: 'EXPLORE SIGNATURE DISHES',
      signatureDishes: 'Signature Tasting Highlights',
    },
    video: {
      heading: 'EXPERIENCE THE PROPERTY',
      subhead: 'A cinematic preview journey through our private coastal sanctuary.',
      playFilm: 'PLAY FILM',
      pauseFilm: 'PAUSE FILM',
      storylineConcept: 'Promotional Storyline Sequence',
      sceneArrival: 'Arrival & Welcome',
      sceneExterior: 'Coastal Architecture',
      sceneVilla: 'Private Villa Quarters',
      scenePool: 'Infinity Pool Lagoon',
      sceneDining: 'Swahili Culinary Arts',
      sceneSunset: 'Sunset Dhow Journey',
      sceneSafari: 'Tanzania Safari Horizon',
    },
    experiences: {
      heading: 'EXPERIENCE MORE THAN A STAY',
      subhead: 'Immersive coastal adventures, cultural heritage, and the gateway to the African wild.',
      tabResort: 'At The Resort',
      tabZanzibar: 'Zanzibar Island',
      tabTanzania: 'Discover Tanzania (Safari)',
      discoverTanzaniaTitle: 'DISCOVER TANZANIA',
      discoverTanzaniaText: 'Your stay can be the beginning of a larger Tanzanian journey. Connect seamlessly with private charter flights to the Serengeti, Ngorongoro Crater, and Mount Kilimanjaro.',
      marketplaceVision: 'Future Tourism Marketplace Integration',
    },
    surroundings: {
      heading: 'DISCOVER THE SURROUNDINGS',
      subhead: 'Idyllic coastal seclusion with effortless proximity to Zanzibar’s natural and historic wonders.',
      distance: 'Distance',
      travelTime: 'Travel Time',
    },
    gallery: {
      heading: 'VISUAL CHRONICLES',
      subhead: 'An intimate window into light, texture, and tranquil Indian Ocean living.',
      all: 'ALL',
      villas: 'VILLAS',
      rooms: 'ROOMS',
      pool: 'POOL',
      dining: 'DINING',
      food: 'FOOD',
      beach: 'BEACH',
      facilities: 'FACILITIES',
      experiences: 'EXPERIENCES',
      fullscreen: 'View High Resolution',
    },
    reviews: {
      heading: 'WHAT OUR GUESTS SAY',
      subhead: 'Reflections from international travelers who have made our sanctuary their home.',
      sampleBadge: 'SAMPLE / DEMO TESTIMONIALS',
      sampleNotice: 'Client Presentation Note: For demo purposes, sample testimonials are illustrated above. Verified guest reviews will be integrated upon official property launch.',
    },
    ota: {
      heading: 'BOOK WITH CONFIDENCE',
      subhead: 'Global luxury distribution and direct booking guarantee.',
      notice: 'Available through selected booking channels. Partner logos shown for demonstration.',
    },
    map: {
      heading: 'FIND US',
      subhead: 'Kizimkazi Dimbani • South Coast, Zanzibar • Tanzania',
      address: 'Property Address',
      phone: 'Direct Telephone',
      email: 'Concierge Inquiries',
      whatsapp: 'Instant WhatsApp Concierge',
      getDirections: 'GET DIRECTIONS',
    },
    finalCta: {
      heading: 'YOUR TANZANIA EXPERIENCE STARTS HERE.',
      subhead: 'Discover a private retreat surrounded by comfort, nature and authentic Tanzanian hospitality.',
      bookStay: 'BOOK YOUR STAY',
      contactUs: 'CONTACT US',
    },
    footer: {
      brandStatement: 'An intimate eight-villa private sanctuary on the southern shores of Zanzibar, bridging authentic Swahili soul with international luxury hospitality.',
      quickLinks: 'Navigation',
      contactConcierge: 'Guest Concierge',
      sanctuaryAddress: 'Sanctuary Address',
      allRightsReserved: 'All rights reserved.',
      clientDemoNotice: 'Pitching Demonstration Model. Built for presentation to property owners, investors & hospitality partners.',
    },
    bookingModal: {
      title: 'REQUEST A RESERVATION',
      subtitle: 'Please select your travel dates and requirements. Our dedicated reservations team will confirm availability within 4 hours.',
      step1: 'Reservation Details',
      step2: 'Guest Contact Information',
      selectedVilla: 'Preferred Villa',
      dates: 'Stay Dates',
      guestName: 'Full Name',
      guestEmail: 'Email Address',
      guestPhone: 'Phone / WhatsApp Number',
      country: 'Country of Residence',
      specialRequests: 'Special Requests & Dietary Notes',
      airportTransfer: 'Request VIP Private Airport Chauffeur Transfer',
      submitRequest: 'SUBMIT BOOKING REQUEST',
      submitting: 'TRANSMITTING REQUEST...',
      successTitle: 'Inquiry Transmitted Successfully',
      successMessage: 'Thank you. Your reservation request has been received by our private concierge. A tailored availability quote has been scheduled.',
      chatViaWhatsapp: 'Chat Directly via WhatsApp',
      close: 'Close Window',
    },
  },
  fr: {
    nav: {
      stay: 'Séjour',
      experiences: 'Expériences',
      facilities: 'Installations',
      dining: 'Gastronomie',
      gallery: 'Galerie',
      location: 'Emplacement',
      bookStay: 'Réserver Votre Séjour',
      cmsPitch: 'Aperçu CMS Propriétaire',
    },
    hero: {
      eyebrow: 'Zanzibar • Tanzanie',
      title: 'VOTRE ÉCHAPPÉE PRIVÉE EN TANZANIE',
      subtitle: 'Vivez le confort, la nature et une hospitalité authentique dans une destination d’exception.',
      exploreProperty: 'EXPLORER LA PROPRIÉTÉ',
      bookYourStay: 'RÉSERVER VOTRE SÉJOUR',
      scrollIndicator: 'DÉCOUVRIR',
    },
    quickBooking: {
      title: 'Planifiez Votre Séjour',
      checkIn: 'ARRIVÉE',
      checkOut: 'DÉPART',
      guests: 'VOYAGEURS',
      villaChoice: 'VILLA',
      allVillas: 'Sélectionnez une Villa',
      checkAvailability: 'VÉRIFIER LA DISPONIBILITÉ',
      guestsCount: 'Personnes',
    },
    intro: {
      heading: 'UN LIEU POUR RALENTIR',
      subhead: 'Où la Nature Sauvage Rencontre le Sanctuaire Moderne',
      body: 'Un refuge privé soigneusement conçu où le confort moderne rencontre la beauté et le caractère de la Tanzanie. Nichée sur la côte sud de Zanzibar, chaque villa rend hommage au patrimoine swahili.',
      statsVillas: 'VILLAS PRIVÉES',
      statsPool: 'PISCINE INFINIE',
      statsDining: 'RESTAURANT & BAR',
      statsSupport: 'SUPPORT CLIENT',
    },
    villas: {
      heading: 'SÉJOURNEZ À VOTRE FAÇON',
      subhead: 'Des espaces pensés pour le confort, l’intimité et des séjours inoubliables.',
      viewVilla: 'VOIR LA VILLA',
      bookVilla: 'DEMANDER UNE RÉSERVATION',
      perNight: 'par nuit',
      maxGuests: 'Invités',
      bed: 'Lit',
      bath: 'Salle de bain',
      size: 'Superficie',
      view: 'Vue',
      amenities: 'Équipements de la Villa',
      requestBooking: 'Demander cette Villa',
      featuredTag: 'Sanctuaire d’Exception',
      allUnits: 'Découvrir les 8 Villas',
    },
    facilities: {
      heading: 'TOUT CE DONT VOUS AVEZ BESOIN',
      subhead: 'Un raffinement sans compromis conçu pour le bien-être et le confort absolu.',
    },
    dining: {
      heading: 'DÉGUSTEZ L’EXPÉRIENCE',
      subhead: 'Un voyage gastronomique des épices traditionnelles swahilies à la haute cuisine contemporaine.',
      exploreMenu: 'DÉCOUVRIR LE MENU',
      signatureDishes: 'Plats Signatures',
    },
    video: {
      heading: 'DÉCOUVREZ LA PROPRIÉTÉ',
      subhead: 'Un voyage cinématographique à travers notre sanctuaire côtier privé.',
      playFilm: 'LANCER LE FILM',
      pauseFilm: 'PAUSE',
      storylineConcept: 'Séquence Scénaristique',
      sceneArrival: 'Arrivée & Accueil',
      sceneExterior: 'Architecture Côtière',
      sceneVilla: 'Villas Privées',
      scenePool: 'Piscine Débordante',
      sceneDining: 'Arts Culinaires',
      sceneSunset: 'Voilier Dhow au Coucher',
      sceneSafari: 'Horizon Safari Tanzanie',
    },
    experiences: {
      heading: 'PLUS QU’UN SÉJOUR, UNE EXPÉRIENCE',
      subhead: 'Aventures côtières, patrimoine culturel et porte d’entrée vers la faune africaine.',
      tabResort: 'Au Domaine',
      tabZanzibar: 'Île de Zanzibar',
      tabTanzania: 'Découvrir la Tanzanie (Safari)',
      discoverTanzaniaTitle: 'DÉCOUVRIR LA TANZANIE',
      discoverTanzaniaText: 'Votre séjour peut être le point de départ d’une grande aventure tanzanienne vers le Serengeti, le Ngorongoro et le Kilimandjaro.',
      marketplaceVision: 'Plateforme Tourisme du Futur',
    },
    surroundings: {
      heading: 'DÉCOUVREZ LES ENVIRONS',
      subhead: 'Isolement idyllique et proximité immédiate avec les merveilles naturelles de Zanzibar.',
      distance: 'Distance',
      travelTime: 'Temps de Trajet',
    },
    gallery: {
      heading: 'CHRONIQUES VISUELLES',
      subhead: 'Une immersion dans la lumière et la douceur de vivre de l’Océan Indien.',
      all: 'TOUT',
      villas: 'VILLAS',
      rooms: 'CHAMBRES',
      pool: 'PISCINE',
      dining: 'RESTAURANT',
      food: 'PLATS',
      beach: 'PLAGE',
      facilities: 'SERVICES',
      experiences: 'ACTIVITÉS',
      fullscreen: 'Plein Écran',
    },
    reviews: {
      heading: 'CE QUE DISENT NOS CLIENTS',
      subhead: 'Les impressions de nos voyageurs internationaux.',
      sampleBadge: 'TÉMOIGNAGES DE DÉMONSTRATION',
      sampleNotice: 'Note de Présentation : Avis de démonstration présentés pour illustrer la future intégration des avis vérifiés.',
    },
    ota: {
      heading: 'RÉSERVEZ EN TOUTE CONFIANCE',
      subhead: 'Distribution internationale de luxe et garantie du meilleur tarif direct.',
      notice: 'Disponible via les canaux sélectionnés. Logos présentés à titre de démonstration.',
    },
    map: {
      heading: 'NOUS TROUVER',
      subhead: 'Kizimkazi Dimbani • Côte Sud, Zanzibar • Tanzanie',
      address: 'Adresse de la Propriété',
      phone: 'Téléphone Direct',
      email: 'Email Conciergerie',
      whatsapp: 'WhatsApp Concierge',
      getDirections: 'ITINÉRAIRE',
    },
    finalCta: {
      heading: 'VOTRE EXPÉRIENCE TANZANIENNE COMMENCE ICI.',
      subhead: 'Découvrez un sanctuaire privé alliant confort, nature et hospitalité authentique.',
      bookStay: 'RÉSERVER VOTRE SÉJOUR',
      contactUs: 'CONTACTEZ-NOUS',
    },
    footer: {
      brandStatement: 'Un sanctuaire privé de huit villas sur les côtes méridionales de Zanzibar, unissant l’âme swahilie à l’hôtellerie d’excellence.',
      quickLinks: 'Navigation',
      contactConcierge: 'Conciergerie',
      sanctuaryAddress: 'Adresse',
      allRightsReserved: 'Tous droits réservés.',
      clientDemoNotice: 'Modèle de Démonstration pour Présentation Client.',
    },
    bookingModal: {
      title: 'DEMANDE DE RÉSERVATION',
      subtitle: 'Sélectionnez vos dates. Notre équipe vous répondra sous 4 heures.',
      step1: 'Détails du Séjour',
      step2: 'Coordonnées de Contact',
      selectedVilla: 'Villa Préférée',
      dates: 'Dates du Séjour',
      guestName: 'Nom Complet',
      guestEmail: 'Adresse Email',
      guestPhone: 'Téléphone / WhatsApp',
      country: 'Pays de Résidence',
      specialRequests: 'Demandes Spéciales',
      airportTransfer: 'Demander le Chauffeur VIP Privé',
      submitRequest: 'ENVOYER LA DEMANDE',
      submitting: 'TRANSMISSION...',
      successTitle: 'Demande Transmise avec Succès',
      successMessage: 'Merci. Votre demande a bien été reçue par notre conciergerie.',
      chatViaWhatsapp: 'Échanger par WhatsApp',
      close: 'Fermer',
    },
  },
  sw: {
    nav: {
      stay: 'Malazi',
      experiences: 'Matukio',
      facilities: 'Huduma',
      dining: 'Vyakula',
      gallery: 'Picha',
      location: 'Mahali',
      bookStay: 'Weka Nafasi Yako',
      cmsPitch: 'Onyesho la Mfumo wa CMS',
    },
    hero: {
      eyebrow: 'Zanzibar • Tanzania',
      title: 'KIMBILIO LAKO BINAFSI NCHINI TANZANIA',
      subtitle: 'Pata faraja, asili na ukarimu wa dhati katika eneo moja la kipekee.',
      exploreProperty: 'TAZAMA ENEO LOTE',
      bookYourStay: 'WEKA NAFASI YAKO',
      scrollIndicator: 'SHUKA CHINI KUGUNDUA',
    },
    quickBooking: {
      title: 'Panga Safari Yako',
      checkIn: 'KUINGIA',
      checkOut: 'KUTOKA',
      guests: 'WAGENI',
      villaChoice: 'VILLA',
      allVillas: 'Chagua Villa Unayopenda',
      checkAvailability: 'HAKIKI NAFASI',
      guestsCount: 'Wageni',
    },
    intro: {
      heading: 'MAHALI PA KUTULIZA NAFSI',
      subhead: 'Mahali Ambapo Asili ya Pwani Inakutana na Anasa ya Kisasa',
      body: 'Kimbilio la faragha lililoundwa kwa uangalifu ambapo faraja ya kisasa inakutana na uzuri na utamaduni wa Tanzania. Kando ya pwani tulivu ya kusini mwa Zanzibar, kila villa inaakisi urithi wa Kiswahili.',
      statsVillas: 'VILLA ZA KIBINAFSI',
      statsPool: 'BWANA LA KUOGELEA',
      statsDining: 'MGAHAWA NA BAARI',
      statsSupport: 'HUDUMA KWA WAGENI',
    },
    villas: {
      heading: 'KAA KWA UTULIVU',
      subhead: 'Nafasi zilizoundwa kwa ustadi kwa ajili ya faraja, usiri na kumbukumbu za kudumu.',
      viewVilla: 'ANGALIA VILLA',
      bookVilla: 'OMBA NAFASI',
      perNight: 'kwa usiku',
      maxGuests: 'Wageni',
      bed: 'Kitanda',
      bath: 'Bafu',
      size: 'Ukubwa',
      view: 'Mandhari',
      amenities: 'Vifaa vya Villa',
      requestBooking: 'Omba Villa Hii',
      featuredTag: 'Villa Bora',
      allUnits: 'Tazama Villa Zote 8',
    },
    facilities: {
      heading: 'KILA KITU UNACHOHITAJI',
      subhead: 'Huduma bora zilizoboreshwa kwa ajili ya afya, mapumziko na utulivu kamili.',
    },
    dining: {
      heading: 'ONJA UTAMU WA ZANZIBAR',
      subhead: 'Safari ya ladha kutoka viungo vya asili vya Waswahili hadi vyakula vya kimataifa.',
      exploreMenu: 'TAZAMA MENYU YA VYAKULA',
      signatureDishes: 'Vyakula Maalum',
    },
    video: {
      heading: 'JIONEE MWENYEWE ENEO LETU',
      subhead: 'Safari ya picha za sinema kupitia kimbilio letu la pwani.',
      playFilm: 'CHEZA FILAMU',
      pauseFilm: 'SIMAMISHA',
      storylineConcept: 'Mtiririko wa Sinema',
      sceneArrival: 'Kufika & Mapokezi',
      sceneExterior: 'Majengo ya Pwani',
      sceneVilla: 'Ndani ya Villa',
      scenePool: 'Bwawa la Bahari',
      sceneDining: 'Ladha ya Vyakula',
      sceneSunset: 'Safari ya Mashua',
      sceneSafari: 'Safari za Tanzania',
    },
    experiences: {
      heading: 'ZAIDI YA MALAZI TU',
      subhead: 'Safari za baharini, urithi wa kiutamaduni na mwanzo wa safari za mbuga za wanyama.',
      tabResort: 'Ndani ya Eneo',
      tabZanzibar: 'Kisiwa cha Zanzibar',
      tabTanzania: 'Gundua Tanzania (Safari)',
      discoverTanzaniaTitle: 'GUNDUA TANZANIA',
      discoverTanzaniaText: 'Ukaaji wako unaweza kuwa mwanzo wa safari kubwa ya Tanzania kuelekea Serengeti, Ngorongoro na Mlima Kilimanjaro.',
      marketplaceVision: 'Soko la Utalii la Baadaye',
    },
    surroundings: {
      heading: 'GUNDUA MAENEO YA KARIBU',
      subhead: 'Utulivu wa pwani ukiwa karibu na vivutio vya kihistoria na vya asili vya Zanzibar.',
      distance: 'Umbali',
      travelTime: 'Muda wa Safari',
    },
    gallery: {
      heading: 'PICHA ZA ENZINI',
      subhead: 'Tazama uzuri wa mwanga, hewa safi na bahari ya Hindi.',
      all: 'ZOTE',
      villas: 'VILLA',
      rooms: 'VYUMBA',
      pool: 'BWAWA',
      dining: 'MGAHAWA',
      food: 'VYAKULA',
      beach: 'UFUKWENI',
      facilities: 'HUDUMA',
      experiences: 'MATUKIO',
      fullscreen: 'Picha Kamili',
    },
    reviews: {
      heading: 'WAGENI WETU WANACHOSEMA',
      subhead: 'Ushuhuda kutoka kwa wageni wa kimataifa waliotutembelea.',
      sampleBadge: 'MAONI YA MFANO / DEMO',
      sampleNotice: 'Kumbuka: Haya ni maoni ya mfano kwa ajili ya kuwasilisha mfumo kwa wateja.',
    },
    ota: {
      heading: 'WEKA NAFASI KWA KUJIAMINI',
      subhead: 'Inapatikana pia kupitia mitandao mikubwa ya utalii duniani.',
      notice: 'Inapatikana kupitia njia zilizochaguliwa za kuweka nafasi. Nembo zinaonyeshwa kama mfano tu.',
    },
    map: {
      heading: 'TUTAFUTE',
      subhead: 'Kizimkazi Dimbani • Pwani ya Kusini, Zanzibar • Tanzania',
      address: 'Anwani ya Eneo',
      phone: 'Simu ya Moja kwa Moja',
      email: 'Barua Pepe ya Concierge',
      whatsapp: 'Wasiliana kwa WhatsApp',
      getDirections: 'PATA MAELEKEZO',
    },
    finalCta: {
      heading: 'SAFARI YAKO YA TANZANIA INAANZIA HAPA.',
      subhead: 'Gundua kimbilio la faragha lililozungukwa na faraja, asili na ukarimu wa dhati wa Kitanzania.',
      bookStay: 'WEKA NAFASI YAKO',
      contactUs: 'WASILIANA NASI',
    },
    footer: {
      brandStatement: 'Kimbilio la faragha la villa nane kusini mwa Zanzibar, linalounganisha utamaduni wa Waswahili na ukarimu wa kiwango cha juu cha kimataifa.',
      quickLinks: 'Viungo vya Haraka',
      contactConcierge: 'Mhudumu Maalum',
      sanctuaryAddress: 'Anwani ya Kimbilio',
      allRightsReserved: 'Haki zote zimehifadhiwa.',
      clientDemoNotice: 'Mfano wa Onyesho kwa ajili ya wamiliki na wawekezaji wa hoteli.',
    },
    bookingModal: {
      title: 'OMBI LA KUWEKA NAFASI',
      subtitle: 'Tafadhali chagua tarehe unazotaka. Timu yetu itakujibu ndani ya masaa 4.',
      step1: 'Maelezo ya Safari',
      step2: 'Mawasiliano Yako',
      selectedVilla: 'Villa Unayoitaka',
      dates: 'Tarehe za Kukaa',
      guestName: 'Jina Kamili',
      guestEmail: 'Barua Pepe',
      guestPhone: 'Nambari ya Simu / WhatsApp',
      country: 'Nchi Unapoishi',
      specialRequests: 'Maombi Maalum',
      airportTransfer: 'Omba Usafiri Binafsi wa Uwanja wa Ndege',
      submitRequest: 'TUMA OMBI LAKO',
      submitting: 'INATUMA...',
      successTitle: 'Ombi Limetumwa Kikamilifu',
      successMessage: 'Asante sana. Ombi lako limepokelewa na tutawasiliana nawe mara moja.',
      chatViaWhatsapp: 'Wasiliana Papo Hapo kwa WhatsApp',
      close: 'Funga',
    },
  },
  es: {
    nav: {
      stay: 'Alojamiento',
      experiences: 'Experiencias',
      facilities: 'Instalaciones',
      dining: 'Gastronomía',
      gallery: 'Galería',
      location: 'Ubicación',
      bookStay: 'Reserve Su Estancia',
      cmsPitch: 'Vista Previa CMS',
    },
    hero: {
      eyebrow: 'Zanzíbar • Tanzania',
      title: 'SU REFUGIO PRIVADO EN TANZANIA',
      subtitle: 'Disfrute del confort, la naturaleza y la hospitalidad auténtica en un destino excepcional.',
      exploreProperty: 'EXPLORAR LA PROPIEDAD',
      bookYourStay: 'RESERVE SU ESTANCIA',
      scrollIndicator: 'DESPLÁCESE PARA DESCUBRIR',
    },
    quickBooking: {
      title: 'Planifique Su Escapada',
      checkIn: 'LLEGADA',
      checkOut: 'SALIDA',
      guests: 'HUÉSPEDES',
      villaChoice: 'VILLA',
      allVillas: 'Seleccione una Villa',
      checkAvailability: 'CONSULTAR DISPONIBILIDAD',
      guestsCount: 'Huéspedes',
    },
    intro: {
      heading: 'UN LUGAR PARA DESACELERAR',
      subhead: 'Donde la Naturaleza se Une al Santuario Moderno',
      body: 'Un refugio privado cuidadosamente diseñado donde el confort contemporáneo se encuentra con la belleza y el alma de Tanzania. Situado en la costa sur de Zanzíbar, cada villa rinde homenaje a la arquitectura swahili.',
      statsVillas: 'VILLAS PRIVADAS',
      statsPool: 'PISCINA INFINITA',
      statsDining: 'RESTAURANTE Y BAR',
      statsSupport: 'ATENCIÓN AL HUÉSPED',
    },
    villas: {
      heading: 'VIVA A SU MANERA',
      subhead: 'Espacios concebidos para el confort, la intimidad y estancias inolvidables.',
      viewVilla: 'VER VILLA',
      bookVilla: 'SOLICITAR RESERVA',
      perNight: 'por noche',
      maxGuests: 'Huéspedes',
      bed: 'Cama',
      bath: 'Baño',
      size: 'Tamaño',
      view: 'Vistas',
      amenities: 'Servicios de la Villa',
      requestBooking: 'Solicitar Esta Villa',
      featuredTag: 'Santuario Destacado',
      allUnits: 'Ver las 8 Villas',
    },
    facilities: {
      heading: 'TODO LO QUE NECESITA',
      subhead: 'Sofisticación sin concesiones diseñada para el bienestar y la máxima relajación.',
    },
    dining: {
      heading: 'SABOREE LA EXPERIENCIA',
      subhead: 'Un viaje culinario desde las especias de Zanzíbar hasta la alta cocina contemporánea.',
      exploreMenu: 'VER MENÚ',
      signatureDishes: 'Platos Exclusivos',
    },
    video: {
      heading: 'DESCUBRA LA PROPIEDAD',
      subhead: 'Un recorrido cinematográfico por nuestro santuario costero.',
      playFilm: 'VER VÍDEO',
      pauseFilm: 'PAUSA',
      storylineConcept: 'Secuencia Narrativa',
      sceneArrival: 'Llegada y Bienvenida',
      sceneExterior: 'Arquitectura Costera',
      sceneVilla: 'Villas Privadas',
      scenePool: 'Piscina Infinita',
      sceneDining: 'Gastronomía Swahili',
      sceneSunset: 'Atardecer en Dhow',
      sceneSafari: 'Horizonte Safari Tanzania',
    },
    experiences: {
      heading: 'MÁS QUE UNA ESTANCIA',
      subhead: 'Aventuras marinas, patrimonio cultural y la puerta de entrada a la fauna africana.',
      tabResort: 'En el Resort',
      tabZanzibar: 'Isla de Zanzíbar',
      tabTanzania: 'Descubra Tanzania (Safari)',
      discoverTanzaniaTitle: 'DESCUBRA TANZANIA',
      discoverTanzaniaText: 'Su estancia puede ser el inicio de un viaje memorable hacia el Serengueti, el Cráter del Ngorongoro y el Kilimanjaro.',
      marketplaceVision: 'Plataforma Turística del Futuro',
    },
    surroundings: {
      heading: 'DESCUBRA LOS ALREDEDORES',
      subhead: 'Aislamiento idílico y cercanía absoluta a las maravillas naturales de Zanzíbar.',
      distance: 'Distancia',
      travelTime: 'Tiempo de Viaje',
    },
    gallery: {
      heading: 'CRÓNICAS VISUALES',
      subhead: 'Una mirada íntima a la luz y la serenidad del Océano Índico.',
      all: 'TODO',
      villas: 'VILLAS',
      rooms: 'HABITACIONES',
      pool: 'PISCINA',
      dining: 'RESTAURANTE',
      food: 'PLATOS',
      beach: 'PLAYA',
      facilities: 'SERVICIOS',
      experiences: 'EXPERIENCIAS',
      fullscreen: 'Pantalla Completa',
    },
    reviews: {
      heading: 'LO QUE DICEN NUESTROS HUÉSPEDES',
      subhead: 'Impresiones de viajeros internacionales.',
      sampleBadge: 'TESTIMONIOS DE DEMOSTRACIÓN',
      sampleNotice: 'Nota de Presentación: Reseñas de muestra ilustradas para la demostración del cliente.',
    },
    ota: {
      heading: 'RESERVE CON TOTAL CONFIANZA',
      subhead: 'Presencia global de lujo y garantía de mejor tarifa directa.',
      notice: 'Disponible en canales seleccionados. Logotipos con fines demostrativos.',
    },
    map: {
      heading: 'DÓNDE ESTAMOS',
      subhead: 'Kizimkazi Dimbani • Costa Sur, Zanzíbar • Tanzania',
      address: 'Dirección',
      phone: 'Teléfono Directo',
      email: 'Correo Concierge',
      whatsapp: 'WhatsApp Concierge',
      getDirections: 'CÓMO LLEGAR',
    },
    finalCta: {
      heading: 'SU EXPERIENCIA EN TANZANIA COMIENZA AQUÍ.',
      subhead: 'Descubra un retiro privado rodeado de confort, naturaleza y auténtica hospitalidad.',
      bookStay: 'RESERVE SU ESTANCIA',
      contactUs: 'CONTÁCTENOS',
    },
    footer: {
      brandStatement: 'Un santuario íntimo de ocho villas en la costa sur de Zanzíbar, uniendo la esencia swahili con el lujo internacional.',
      quickLinks: 'Navegación',
      contactConcierge: 'Conserjería',
      sanctuaryAddress: 'Ubicación',
      allRightsReserved: 'Todos los derechos reservados.',
      clientDemoNotice: 'Modelo de Demostración para Presentación a Propietarios e Inversores.',
    },
    bookingModal: {
      title: 'SOLICITAR RESERVA',
      subtitle: 'Seleccione sus fechas. Nuestro equipo responderá en menos de 4 horas.',
      step1: 'Detalles de la Reserva',
      step2: 'Datos de Contacto',
      selectedVilla: 'Villa Seleccionada',
      dates: 'Fechas',
      guestName: 'Nombre Completo',
      guestEmail: 'Correo Electrónico',
      guestPhone: 'Teléfono / WhatsApp',
      country: 'País de Residencia',
      specialRequests: 'Peticiones Especiales',
      airportTransfer: 'Solicitar Traslado VIP Privado',
      submitRequest: 'ENVIAR SOLICITUD',
      submitting: 'ENVIANDO...',
      successTitle: 'Solicitud Enviada con Éxito',
      successMessage: 'Muchas gracias. Su solicitud de reserva ha sido recibida con éxito.',
      chatViaWhatsapp: 'Contactar por WhatsApp',
      close: 'Cerrar',
    },
  },
  it: {
    nav: {
      stay: 'Soggiorno',
      experiences: 'Esperienze',
      facilities: 'Servizi',
      dining: 'Ristorazione',
      gallery: 'Galleria',
      location: 'Posizione',
      bookStay: 'Prenota il Tuo Soggiorno',
      cmsPitch: 'Anteprima CMS',
    },
    hero: {
      eyebrow: 'Zanzibar • Tanzania',
      title: 'IL TUO RIFUGIO PRIVATO IN TANZANIA',
      subtitle: 'Vivi il comfort, la natura e un’ospitalità autentica in una destinazione eccezionale.',
      exploreProperty: 'ESPLORA LA PROPRIETÀ',
      bookYourStay: 'PRENOTA IL TUO SOGGIORNO',
      scrollIndicator: 'SCORRI PER SCOPRIRE',
    },
    quickBooking: {
      title: 'Pianifica la Tua Fuga',
      checkIn: 'ARRIVO',
      checkOut: 'PARTENZA',
      guests: 'OSPITI',
      villaChoice: 'VILLA',
      allVillas: 'Seleziona una Villa',
      checkAvailability: 'VERIFICA DISPONIBILITÀ',
      guestsCount: 'Ospiti',
    },
    intro: {
      heading: 'UN LUOGO DOVE RALLENTARE',
      subhead: 'Dove la Natura Incontra il Santuario Moderno',
      body: 'Un rifugio privato progettato con cura dove il comfort moderno incontra la bellezza e il carattere della Tanzania. Situata sulla costa meridionale di Zanzibar, ogni villa rende omaggio all’eredità costiera swahili.',
      statsVillas: 'VILLE PRIVATE',
      statsPool: 'PISCINA A SFIORO',
      statsDining: 'RISTORANTE E BAR',
      statsSupport: 'ASSISTENZA OSPITI',
    },
    villas: {
      heading: 'VIVI A MODO TUO',
      subhead: 'Spazi pensati per il comfort, la privacy e soggiorni indimenticabili.',
      viewVilla: 'VEDI LA VILLA',
      bookVilla: 'RICHIEDI PRENOTAZIONE',
      perNight: 'a notte',
      maxGuests: 'Ospiti',
      bed: 'Letto',
      bath: 'Bagno',
      size: 'Superficie',
      view: 'Vista',
      amenities: 'Servizi della Villa',
      requestBooking: 'Richiedi Questa Villa',
      featuredTag: 'Santuario Esclusivo',
      allUnits: 'Scopri Tutte le 8 Ville',
    },
    facilities: {
      heading: 'TUTTO CIÒ DI CUI HAI BISOGNO',
      subhead: 'Raffinatezza senza compromessi pensata per il benessere e il relax assoluto.',
    },
    dining: {
      heading: 'GUSTA L’ESPERIENZA',
      subhead: 'Un viaggio gastronomico dalle spezie di Zanzibar all’alta cucina internazionale.',
      exploreMenu: 'SCOPRI IL MENU',
      signatureDishes: 'I Nostri Piatti Iconici',
    },
    video: {
      heading: 'SCOPRI LA PROPRIETÀ',
      subhead: 'Un viaggio cinematografico nel nostro santuario costiero privato.',
      playFilm: 'GUARDA IL FILM',
      pauseFilm: 'PAUSA',
      storylineConcept: 'Sequenza Narrativa',
      sceneArrival: 'Arrivo & Benvenuto',
      sceneExterior: 'Architettura Costiera',
      sceneVilla: 'Le Nostre Ville',
      scenePool: 'Piscina a Sfioro',
      sceneDining: 'Arte Culinaria',
      sceneSunset: 'Tramonto sul Dhow',
      sceneSafari: 'Safari in Tanzania',
    },
    experiences: {
      heading: 'PIÙ DI UN SEMPLICE SOGGIORNO',
      subhead: 'Avventure costiere, patrimonio culturale e la porta d’accesso alla fauna africana.',
      tabResort: 'Nel Resort',
      tabZanzibar: 'Isola di Zanzibar',
      tabTanzania: 'Scopri la Tanzania (Safari)',
      discoverTanzaniaTitle: 'SCOPRI LA TANZANIA',
      discoverTanzaniaText: 'Il vostro soggiorno può essere l’inizio di un magnifico viaggio nel Serengeti, nel Cratere di Ngorongoro e sul Kilimangiaro.',
      marketplaceVision: 'Piattaforma Turistica del Futuro',
    },
    surroundings: {
      heading: 'SCOPRI I DINTORNI',
      subhead: 'Tranquillità incontaminata a breve distanza dalle meraviglie di Zanzibar.',
      distance: 'Distanza',
      travelTime: 'Tempo di Viaggio',
    },
    gallery: {
      heading: 'CRONACHE VISIVE',
      subhead: 'Uno sguardo intimo sulla luce e la quiete dell’Oceano Indiano.',
      all: 'TUTTO',
      villas: 'VILLE',
      rooms: 'CAMERE',
      pool: 'PISCINA',
      dining: 'RISTORANTE',
      food: 'PIATTI',
      beach: 'SPIAGGIA',
      facilities: 'SERVIZI',
      experiences: 'ESPERIENZE',
      fullscreen: 'Schermo Intero',
    },
    reviews: {
      heading: 'COSA DICONO I NOSTRI OSPITI',
      subhead: 'Le testimonianze dei nostri ospiti internazionali.',
      sampleBadge: 'RECENSIONI DI DIMOSTRAZIONE',
      sampleNotice: 'Nota di Presentazione: Recensioni dimostrative predisposte per la presentazione al cliente.',
    },
    ota: {
      heading: 'PRENOTA IN TOTALE SICUREZZA',
      subhead: 'Presenza sui principali canali mondiali e miglior tariffa diretta garantita.',
      notice: 'Disponibile tramite canali selezionati. Loghi mostrati a scopo illustrativo.',
    },
    map: {
      heading: 'DOVE SIAMO',
      subhead: 'Kizimkazi Dimbani • Costa Sud, Zanzibar • Tanzania',
      address: 'Indirizzo',
      phone: 'Telefono Diretto',
      email: 'Email Concierge',
      whatsapp: 'WhatsApp Concierge',
      getDirections: 'INDICAZIONI STRADALI',
    },
    finalCta: {
      heading: 'LA TUA ESPERIENZA IN TANZANIA INIZIA QUI.',
      subhead: 'Scoprite un rifugio privato immerso nel comfort, nella natura e nell’ospitalità autentica.',
      bookStay: 'PRENOTA IL TUO SOGGIORNO',
      contactUs: 'CONTATTACI',
    },
    footer: {
      brandStatement: 'Un santuario esclusivo di otto ville sulla costa meridionale di Zanzibar, che unisce l’anima swahili all’ospitalità d’eccellenza.',
      quickLinks: 'Navigazione',
      contactConcierge: 'Concierge',
      sanctuaryAddress: 'Indirizzo',
      allRightsReserved: 'Tutti i diritti riservati.',
      clientDemoNotice: 'Modello dimostrativo per presentazione a proprietari e investitori.',
    },
    bookingModal: {
      title: 'RICHIEDI UNA PRENOTAZIONE',
      subtitle: 'Selezionate le vostre date. Il nostro team vi risponderà entro 4 ore.',
      step1: 'Dettagli del Soggiorno',
      step2: 'Contatti Ospite',
      selectedVilla: 'Villa Preferita',
      dates: 'Date del Soggiorno',
      guestName: 'Nome e Cognome',
      guestEmail: 'Indirizzo Email',
      guestPhone: 'Telefono / WhatsApp',
      country: 'Paese di Residenza',
      specialRequests: 'Richieste Particolari',
      airportTransfer: 'Richiedi Autista VIP Privato',
      submitRequest: 'INVIA RICHIESTA',
      submitting: 'INVIO IN CORSO...',
      successTitle: 'Richiesta Inviata con Successo',
      successMessage: 'Grazie. La vostra richiesta è stata ricevuta dal nostro concierge privato.',
      chatViaWhatsapp: 'Contattaci su WhatsApp',
      close: 'Chiudi',
    },
  },
};
